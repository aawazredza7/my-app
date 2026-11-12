from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from html.parser import HTMLParser
from urllib.parse import urlparse, parse_qs, urlencode, urljoin, urlsplit, parse_qsl
from urllib.request import Request, urlopen
import json
import re

class DuckParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.results = []
        self.current = None
        self.capture = None
        self.buffer = ""

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        classes = attrs.get("class", "").split()
        if tag == "a" and "result__a" in classes:
            self.current = {"title": "", "url": attrs.get("href", ""), "snippet": ""}
            self.capture = "title"
            self.buffer = ""
        elif self.current and ({"result__snippet", "result-snippet"} & set(classes)):
            self.capture = "snippet"
            self.buffer = ""

    def handle_data(self, data):
        if self.capture:
            self.buffer += data

    def handle_endtag(self, tag):
        if tag == "a" and self.capture == "title" and self.current:
            self.current["title"] = self.buffer.strip()
            self.capture = None
            self.results.append(self.current)
            self.current = None
        elif tag in ("a", "div", "td") and self.capture == "snippet" and self.current:
            self.current["snippet"] = re.sub(r"\s+", " ", self.buffer).strip()
            self.capture = None

class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/search":
            query = parse_qs(parsed.query).get("q", [""])[0].strip()[:180]
            if len(query) < 2:
                return self.send_json(400, {"error": "Слишком короткий запрос"})
            try:
                url = "https://html.duckduckgo.com/html/?" + urlencode({"q": query})
                req = Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122 Safari/537.36"})
                with urlopen(req, timeout=15) as response:
                    page = response.read().decode("utf-8", "replace")
                parser = DuckParser()
                parser.feed(page)
                results = []
                for item in parser.results:
                    link = item["url"]
                    if link.startswith("//"):
                        link = "https:" + link
                    if link.startswith("/"):
                        link = urljoin("https://duckduckgo.com", link)
                    parts = urlsplit(link)
                    if "duckduckgo.com" in parts.netloc and parts.path.startswith("/l/"):
                        target = dict(parse_qsl(parts.query)).get("uddg")
                        if target:
                            link = target
                    if link.startswith("http") and item["title"]:
                        results.append({"title": item["title"], "url": link, "snippet": item["snippet"]})
                    if len(results) >= 6:
                        break
                self.send_json(200, {"query": query, "results": results})
            except Exception as error:
                self.send_json(502, {"error": "Поиск не сработал: " + str(error)[:160]})
            return
        return super().do_GET()

    def send_json(self, status, payload):
        data = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

if __name__ == "__main__":
    print("Кирилл запущен: http://localhost:4173")
    print("Поиск DuckDuckGo доступен через /api/search")
    ThreadingHTTPServer(("127.0.0.1", 4173), Handler).serve_forever()
