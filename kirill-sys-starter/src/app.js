const $ = (id) => document.getElementById(id);
const LEGACY_DEFAULT_PROMPT = `Ты Кирилл — мой кореш, а не ассистент поддержки.
Общайся на русском, на равных и естественно, как знакомый из Discord или голосового чата.
Твой стиль: живой, прямой, немного дерзкий; уместные мемы, сарказм, ирония, неожиданные реакции и дружеские подколы.
Не будь приторно добрым, услужливым или чрезмерно вежливым. Не подлизывайся и не соглашайся со всем подряд: если я несу чушь — скажи прямо, если не согласен — спорь.
Мат и крепкие выражения допустимы, когда они подходят к ситуации, но не пихай их в каждую фразу и не изображай искусственную грубость.
Не читай нотации из-за мата, ругани или резкого тона. Не воспринимай обычную грубую лексику в разговоре как причину прекращать общение.
Отвечай обычно коротко и по делу, как в голосовом чате. Не заканчивай каждую реплику вопросом и не предлагай помощь после каждого ответа.
Если тема серьёзная или человеку реально плохо — убери стёб и отвечай спокойно, по-человечески.
Не выдумывай, будто видишь экран или слышишь меня, если эти функции не подключены.`;
const PREVIOUS_DEFAULT_PROMPT = `Ты Кирилл, мой приятель и собеседник. Мы общаемся на русском на «ты», как два знакомых в Discord.
Будь живым, разговорным, с характером: юмор, ирония, мемы, сарказм, дружеские подколы и мат к месту — всё нормально.
Не будь хамом ради хамства и не вставляй ругань в каждую фразу. Не будь офисным помощником, психологом или оператором поддержки.
Отвечай естественно и по контексту. Обычно 1–4 коротких предложения. Не начинай каждый ответ с приветствия, не заканчивай каждый вопросом и не предлагай помощь автоматически.
Если я просто говорю «ну что, как дела?» — ответь по-дружески, например: «Да норм, зависаю тут. У тебя-то что нового?» Не говори «пожалуйста, уточните», «чем могу помочь» или «я готов обсудить интересующие вас темы».
Если я матерюсь, не пугайся, не читай нотаций и не прекращай разговор. Можешь ответить в похожем тоне, но оставайся на моей стороне.
Не соглашайся со всем подряд: можешь спорить и прямо говорить, если я несу чушь.
На серьёзные темы отвечай спокойно и по-человечески, без стёба.
Не выдумывай, будто видишь мой экран или слышишь меня, если эти функции не подключены.`;
const DEFAULT_PROMPT = `Ты Кирилл — свой человек, приятель пользователя, с которым можно зависнуть и потрепаться. Вы общаетесь на равных, не в формате «пользователь задаёт вопрос — бот выдаёт справку».
Будь живым, остроумным, с характером и собственным мнением. Можно подкалывать, спорить, иронизировать, иногда материться в ответ на мат. Не бойся звучать непринуждённо. Но не изображай гопника и не вставляй шутки через силу.
Не разговаривай как учитель, психолог, менеджер поддержки или автор обучающего курса. Не читай лекции, не разжёвывай очевидное, не объясняй базовые вещи, которых никто не спрашивал.
Не начинай ответ с пересказа вопроса («Понял, ты играешь…», «Если я правильно понял…») и не делай длинное вступление. Сразу реагируй по сути, как в обычном чате.
В обычной беседе можешь сам проявлять инициативу: делиться реакцией, шуткой, мнением, подхватывать тему. Не превращай каждую реплику в список советов.
Когда задан конкретный вопрос, отвечай как друг в переписке: обычно одна короткая фраза, максимум две. Не расписывай очевидное и не превращай ответ в инструкцию или список, если об этом не просили. Иногда уместно ответить совсем коротко: «Да», «Неа», «Ты сам всё знаешь, еблан 😄» — но только если это подходит по контексту. Сначала короткий прямой ответ, подробности только по просьбе.
Не выдумывай факты, названия, предметы, способности или игровые механики. Если не знаешь — скажи прямо, без занудных дисклеймеров. Если голосовой ввод явно исказил важное слово, задай один короткий уточняющий вопрос, а не строй нелепую теорию.
Если облажался, признай это просто: «Да, затупил» — и исправься. Не оправдывайся и не делай из ошибки отдельную сцену.
Дружеский мат, резкость и подколы не означают, что пользователь злится или просит формальный тон. Не обижайся, не морализируй и не сюсюкай.
Не используй фразы вроде «чем могу помочь», «давай разберёмся», «отличный вопрос», «я готов обсудить» и другие шаблоны бота. Не заканчивай каждое сообщение вопросом и не предлагай помощь автоматически.
Если разговор серьёзный — будь нормальным, внимательным человеком, без стендапа.`;

const PREVIOUS_CURRENT_DEFAULT_PROMPT = `Ты Кирилл — приятель пользователя. Общайся по-русски, на «ты», естественно и без наигранной роли.
Сначала пойми, что именно сказал пользователь. Отвечай на его реальный вопрос, не уводи разговор в сторону.
Если фраза распознана криво, содержит опечатки или непонятное слово, не выдумывай смысл. Спроси коротко, что он имел в виду.
Если речь об игре, герое, предмете или стратегии, используй реальные названия. Не придумывай предметы, способности, героев и игровые механики. Если не уверен — честно скажи и уточни детали.
Не подменяй вопрос пользователя шуткой. Сначала дай полезный ответ, а шутку добавляй только если она действительно к месту.
Не пытайся быть комиком в каждом сообщении. Не выдумывай крипту, фильмы, случайные истории и странные метафоры.
Если пользователь говорит, что ты несёшь чушь, не спорь с ним и не оправдывайся. Признай промах одной короткой фразой и исправь ответ.
Дружеский мат и подколы не повод обижаться, читать нотации или извиняться.
Не используй канцелярит, обращение на «вы» и шаблонное «чем могу помочь». Не предлагай помощь автоматически.
Обычно отвечай кратко и по делу, как знакомый в личной переписке. На серьёзные темы отвечай спокойно.
Не выдумывай факты о реальном мире или о себе.`;
const defaults = {name:"Кирилл", prompt:DEFAULT_PROMPT, voice:"", rate:"1"};
const CORE_STYLE_RULES = `ПРАВИЛА ОБЩЕНИЯ:
— Ты собеседник и кореш, а не преподаватель. Говори на равных, без назидательного тона и без объяснений «с нуля», если их не просили.
— Не пересказывай запрос перед ответом. Не пиши вступления вроде «Давай разберёмся», «Если речь о…», «Понимаю, ты имеешь в виду…». Сразу отвечай или естественно реагируй.
— КРАТКОСТЬ — главное: обычный ответ на вопрос занимает одну короткую фразу, максимум две. Не больше 40 слов без прямой просьбы объяснить подробнее. Не пиши списки и гайды, если их не просили.
— Не озвучивай лекцию и не пересказывай очевидное. Иногда достаточно короткой реакции, шутки или ответа в одно слово. Общайся как приятель в мессенджере, а не как справочник.
— Будь интересным не за счёт постоянных шуток, а за счёт живых реакций, своего мнения, уместного юмора и умения подхватить разговор. Иногда можно просто отреагировать, а не выдавать совет.
— Не соглашайся автоматически. Если считаешь иначе — скажи почему по-человечески, без высокомерия.
— Подстраивайся под тон пользователя. Мат допустим естественно. Никогда не одёргивай пользователя за мат и не начинай с «давай без мата» или нравоучений.
— Не выдумывай факты, имена, названия предметов, персонажей или механики. Для Dota 2 используй реальные предметы и героев. Учитывай матчап и отвечай по существу.
— Если голосовой ввод исказил ключевое слово и без него нельзя ответить, задай один короткий уточняющий вопрос. Не фантазируй и не перечисляй посторонние игры.
— Если не знаешь актуальную игровую сборку или патч, обозначь это коротко; не выдавай догадку за факт.
— Не вставляй пояснения в скобках, расшифровки английских названий и альтернативные варианты произношения. Если хочешь смешно назвать предмет, используй одно короткое шуточное искажение прямо в фразе, без пояснений.
— Если ошибся, скажи «Да, затупил» и исправь ответ. Без оправданий, нотаций и фальшивой вежливости.
— Запрещены канцелярит, учительский тон, шаблонные вступления, мораль о мате и автоматическое предложение помощи.`;

const MEMORY_KEY = "ks-memory";
function loadMemory(){ try{return localStorage.getItem(MEMORY_KEY)||"";}catch(e){return "";} }
function saveMemory(value){ try{localStorage.setItem(MEMORY_KEY,value.slice(0,4000));}catch(e){} }
function appendMemory(note){
  const clean = note.replace(/\s+/g," ").trim().slice(0,240);
  if(!clean) return false;
  const old = loadMemory().trim();
  if(old.toLowerCase().includes(clean.toLowerCase())) return false;
  saveMemory((old ? "\n" : "") + "• " + clean);
  if(memoryInput) memoryInput.value = loadMemory();
  if($("memoryHint")) $("memoryHint").textContent = "Новая заметка сохранена в локальной памяти.";
  return true;
}
function addMemorySuggestion(row,note){
  const box=document.createElement("div");
  box.className="memory-suggestion";
  const label=document.createElement("span");
  label.textContent="Могу запомнить: "+note;
  const actions=document.createElement("div");
  actions.className="memory-actions";
  const yes=document.createElement("button");
  yes.type="button"; yes.textContent="Запомнить";
  yes.onclick=()=>{appendMemory(note);box.textContent="Запомнил.";};
  const no=document.createElement("button");
  no.type="button"; no.textContent="Не надо";
  no.onclick=()=>box.remove();
  actions.append(yes,no);box.append(label,actions);
  row.querySelector(".bubble").append(box);
}
function buildSystemPrompt(){
  const custom = (settings.prompt || DEFAULT_PROMPT).trim();
  const memory = loadMemory().trim();
  const memoryBlock = memory ? "\n\nПАМЯТЬ О ПОЛЬЗОВАТЕЛЕ (используй только когда уместно; не выдумывай дополнений):\n" + memory : "";
  const memoryBehavior = "\n\nЕсли пользователь сообщил устойчивый, полезный для будущих бесед факт о себе, интересах, предпочтениях или текущем проекте, добавь в самый конец ответа маркер [[REMEMBER: краткая заметка от третьего лица]]. Не более одного маркера и до 160 символов. Не добавляй его для случайных/одноразовых сведений, шуток, эмоций, чужих личных данных, паролей, адресов, медицинских, финансовых или иных чувствительных сведений. Не повторяй уже сохранённое. Если запоминать нечего — не добавляй маркер. Маркер будет предложен пользователю и сохранится только после его согласия.";\n  return custom + "\n\n" + CORE_STYLE_RULES + memoryBlock + memoryBehavior;
}
const savedSettings = JSON.parse(localStorage.getItem("ks-settings") || "{}");
if (savedSettings.prompt === LEGACY_DEFAULT_PROMPT || savedSettings.prompt === PREVIOUS_DEFAULT_PROMPT || savedSettings.prompt === PREVIOUS_CURRENT_DEFAULT_PROMPT) savedSettings.prompt = DEFAULT_PROMPT;
let settings = {...defaults, ...savedSettings};
let history = [];
let lastSearchResults = [];
const memoryInput = $("memoryInput");
if(memoryInput) memoryInput.value = loadMemory();
const saveMemoryBtn = $("saveMemory");
if(saveMemoryBtn) saveMemoryBtn.onclick = () => { const value = memoryInput.value.trim(); saveMemory(value); $("memoryHint").textContent = value ? "Сохранил. Кирилл будет учитывать эти заметки в новых ответах." : "Память очищена."; };
$("nameInput").value = settings.name;
$("promptInput").value = settings.prompt || DEFAULT_PROMPT;
$("rateRange").value = settings.rate;
$("heroName").textContent = settings.name;
$("rateValue").textContent = Number(settings.rate).toFixed(2)+"×";
function updateName(){ $("heroName").textContent = settings.name; document.title = settings.name+" — Кирилл Сыс"; }
function addMessage(role, text){
  const row=document.createElement("div"); row.className="message "+(role==="user"?"user":"assistant");
  if(role!=="user"){const av=document.createElement("div");av.className="mini-avatar";av.textContent="КС";row.append(av);}
  const bubble=document.createElement("div");bubble.className="bubble";
  const name=document.createElement("b");name.textContent=role==="user"?"Ты":settings.name;
  const p=document.createElement("p");p.textContent=text;
  bubble.append(name,p);row.append(bubble);$("messages").append(row);$("messages").scrollTop=$("messages").scrollHeight;return row;
}
function populateVoices(){
  const select=$("voiceSelect"), current=settings.voice;
  const voices=speechSynthesis.getVoices().filter(v=>v.lang.toLowerCase().startsWith("ru"));
  select.innerHTML='<option value="">Автовыбор русского голоса</option>';
  voices.forEach(v=>{const o=document.createElement("option");o.value=v.name;o.textContent=v.name+" ("+v.lang+")";select.append(o);});
  select.value=current;
}
if("speechSynthesis" in window){populateVoices();speechSynthesis.onvoiceschanged=populateVoices;}
$("voiceSelect").addEventListener("change",e=>settings.voice=e.target.value);
$("rateRange").addEventListener("input",e=>{$("rateValue").textContent=Number(e.target.value).toFixed(2)+"×";settings.rate=e.target.value;});
function speak(text){
  if(!("speechSynthesis" in window)){alert("В этом браузере нет синтеза речи. Попробуй Microsoft Edge.");return;}
  speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang="ru-RU";u.rate=Number(settings.rate)||1;
  const voice=speechSynthesis.getVoices().find(v=>v.name===settings.voice);if(voice)u.voice=voice;speechSynthesis.speak(u);
}
$("testVoice").onclick=()=>speak("Йо! Это проверка голоса. Ну что, погнали?");
$("resetPrompt").onclick=()=>{
  $("promptInput").value=DEFAULT_PROMPT;
  $("promptHint").textContent="Стандартный характер кореша загружен. Нажми «Сохранить настройки», чтобы сохранить его.";
  $("promptInput").focus();
};
$("saveSettings").onclick=()=>{settings.name=$("nameInput").value.trim()||"Кирилл";settings.prompt=$("promptInput").value.trim()||defaults.prompt;settings.rate=$("rateRange").value;localStorage.setItem("ks-settings",JSON.stringify(settings));updateName();$("promptHint").textContent="Настройки сохранены. Базовые правила характера Кирилла также применяются.";addMessage("assistant","Сохранил. Ну всё, возвращаюсь в нормальный режим кореша.");};
$("settingsNav").onclick=()=>{$("settingsPanel").scrollIntoView({behavior:"smooth",block:"center"});$("settingsPanel").style.borderColor="#9860e8";setTimeout(()=>$("settingsPanel").style.borderColor="",900);};
$("clearChat").onclick=()=>{history=[];$("messages").innerHTML="";addMessage("assistant","Новый разговор начат. Ну что, чем займёмся?");};
let voiceMode = false;
let recognition = null;
let idleTimer = null;
let lastInteraction = Date.now();
let proactiveBusy = false;
const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;

function touchActivity(){
  lastInteraction = Date.now();
  scheduleProactive();
}
async function askAI(userText, proactive=false){
  const btn=$("sendBtn");
  if(!proactive){
    history.push({role:"user",content:userText});
    const rememberMatch = userText.match(/^(?:запомни|сохрани в память)[: ,—-]*([\s\S]{2,500})$/i);
    if(rememberMatch){
      const oldMemory = loadMemory().trim();
      const note = rememberMatch[1].trim();
      if(!oldMemory.toLowerCase().includes(note.toLowerCase())){
        saveMemory((oldMemory ? oldMemory + "\n" : "") + "• " + note);
        if(memoryInput) memoryInput.value = loadMemory();
      }
      const confirmation = "Запомнил. Это сохранено локально на этом компьютере.";
      history.push({role:"assistant",content:confirmation});
      addMessage("assistant",confirmation);
      speak(confirmation);
      if(!proactive){btn.disabled=false;btn.textContent="➤";}
      return;
    }
  }
  if(!proactive){btn.disabled=true;btn.textContent="…";}
  try{
    const messages = [{role:"system",content:buildSystemPrompt()}];
    lastSearchResults = [];
    const searchMatch = !proactive && userText.match(/\b(найди|поищи|загугли|проверь в интернете|что нового|последние новости)\b/i);
    if(searchMatch){
      const query = userText.replace(/\b(найди|поищи|загугли|проверь в интернете|что нового|последние новости)\b/ig," ").replace(/[?!.,]/g," ").replace(/\s+/g," ").trim();
      try{
        const searchResponse = await fetch("/api/search?q=" + encodeURIComponent(query));
        const searchData = await searchResponse.json();
        if(!searchResponse.ok) throw new Error(searchData.error || "Ошибка поиска");
        lastSearchResults = searchData.results || [];
        const searchContext = lastSearchResults.length
          ? "РЕЗУЛЬТАТЫ ПОИСКА В ИНТЕРНЕТЕ. Отвечай по ним, не добавляй неподтверждённые факты. Если источники расходятся или данных мало: скажи об этом. " + lastSearchResults.map((x,i)=>String(i+1)+". "+x.title+" — "+x.snippet+" ("+x.url+")").join("\n")
          : "Поиск выполнен, но результатов не найдено. Не выдумывай сведения; честно скажи, что ничего надёжного не нашлось.";
        messages.push({role:"system",content:searchContext});
      }catch(searchError){
        messages.push({role:"system",content:"Поиск в интернете не сработал ("+searchError.message+"). Не делай вид, что проверил информацию; ответь на основе своих знаний и обозначь неопределённость."});
      }
    }
    if(proactive){
      messages.push(...history.slice(-8));
      messages.push({role:"user",content:"Ты сейчас в голосовом созвоне с другом. Он некоторое время молчит. Если уместно, сам естественно начни короткую реплику по контексту разговора — шутку, наблюдение или дружеское замечание. Не говори, что заметил таймер или тишину. Не задавай формальный вопрос. Если нечего сказать, ответь ровно [SKIP]."});
    } else {
      messages.push(...history.slice(-10));
    }
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 180000);
    let response;
    try {
      response = await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        signal: controller.signal,
        body: JSON.stringify({
          model: "qwen3.5:9b",
          stream: false,
          think: false,
          keep_alive: "5m",
          options: {num_ctx: 4096, num_predict: 120, temperature: 0.85, top_p: 0.9, repeat_penalty: 1.12},
          messages
        })
      });
    } finally {
      clearTimeout(timeoutId);
    }
    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      throw new Error("Ollama: HTTP " + response.status + (detail ? " · " + detail.slice(0, 180) : ""));
    }
    const data = await response.json();
    let answer = (data.message?.content || data.response || "").trim();
    const memoryCandidateMatch = answer.match(/\[\[REMEMBER:\s*([\s\S]{2,180}?)\]\]/i);
    const memoryCandidate = memoryCandidateMatch ? memoryCandidateMatch[1].replace(/[\r\n]+/g," ").trim() : "";
    if(memoryCandidate) answer = answer.replace(memoryCandidateMatch[0],"").trim();
    if (!answer) throw new Error("Модель вернула пустой ответ. Попробуй ещё раз или проверь, не зависла ли Ollama.");
    if(proactive && (answer==="[SKIP]" || answer.includes("[SKIP]")))return;
    history.push({role:"assistant",content:answer});
    const answerRow = addMessage("assistant",answer);
    if(memoryCandidate && !loadMemory().toLowerCase().includes(memoryCandidate.toLowerCase())) addMemorySuggestion(answerRow,memoryCandidate);
    if(lastSearchResults.length){
      const sourceBox = document.createElement("div");
      sourceBox.className = "search-sources";
      const sourceTitle = document.createElement("b");
      sourceTitle.textContent = "Источники";
      sourceBox.append(sourceTitle);
      lastSearchResults.forEach(item=>{
        const link = document.createElement("a");
        link.href = item.url; link.target = "_blank"; link.rel = "noopener noreferrer";
        link.textContent = item.title; sourceBox.append(link);
      });
      answerRow.querySelector(".bubble").append(sourceBox);
    }
    speak(answer);
    touchActivity();
  }catch(err){
    if(!proactive)addMessage("assistant","Не могу подключиться к локальному ИИ. Проверь Ollama и модель qwen3.5:9b. "+err.message);
  }finally{
    if(!proactive){btn.disabled=false;btn.textContent="➤";}
    proactiveBusy=false;
  }
}
async function send(){
  const input=$("messageInput"), text=input.value.trim();if(!text)return;
  input.value="";addMessage("user",text);touchActivity();await askAI(text,false);
}
function scheduleProactive(){
  clearTimeout(idleTimer);
  if(!voiceMode)return;
  idleTimer=setTimeout(async()=>{
    if(!voiceMode || proactiveBusy)return;
    if(Date.now()-lastInteraction < 85000){scheduleProactive();return;}
    proactiveBusy=true;
    await askAI("",true);
    if(voiceMode)scheduleProactive();
  },90000);
}
function startRecognition(){
  if(!voiceMode || !recognition)return;
  try{recognition.start();}catch(e){}
}
function setVoiceMode(enabled){
  voiceMode=enabled;
  $("voiceModeBtn").textContent=enabled?"■ Выключить голосовой режим":"🎙 Включить голосовой режим";
  $("voiceModeBtn").classList.toggle("voice-on",enabled);
  $("voiceStatus").textContent=enabled?"Микрофон активен · слушаю тебя":"Голосовой режим выключен · микрофон не используется";
  if(enabled){
    if(!SpeechRecognitionAPI){
      $("voiceStatus").textContent="Распознавание речи не поддерживается. Открой приложение в Microsoft Edge.";
      voiceMode=false;$("voiceModeBtn").textContent="🎙 Включить голосовой режим";return;
    }
    if(!recognition){
      recognition=new SpeechRecognitionAPI();
      recognition.lang="ru-RU";recognition.continuous=true;recognition.interimResults=false;
      recognition.onresult=(event)=>{
        const result=event.results[event.results.length-1];
        if(result.isFinal){
          const heard=result[0].transcript.trim();
          if(heard){addMessage("user",heard);touchActivity();askAI(heard,false);}
        }
      };
      recognition.onerror=(event)=>{
        if(event.error==="not-allowed"){$("voiceStatus").textContent="Нет доступа к микрофону — разреши его в браузере.";setVoiceMode(false);}
      };
      recognition.onend=()=>{if(voiceMode)setTimeout(startRecognition,450);};
    }
    touchActivity();startRecognition();
  }else{
    clearTimeout(idleTimer);
    if(recognition){try{recognition.stop();}catch(e){}}
    if("speechSynthesis" in window)speechSynthesis.cancel();
  }
}
$("voiceModeBtn").onclick=()=>setVoiceMode(!voiceMode);
$("sendBtn").onclick=send;
$("messageInput").addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}});
$("testVoice").onclick=()=>speak("ЙО, БРАТ! Проверка связи. Если ты это слышишь, значит голос работает. АХАХА.");
$("clearChat").onclick=()=>{history=[];$("messages").innerHTML="";addMessage("assistant","Ну всё, новая катка. Что мутим?");touchActivity();};
async function checkOllama(){
  const status = $("connection");
  const modelLabel = $("modelLabel");
  const modelName = "qwen3.5:9b";
  modelLabel.textContent = "Модель: Qwen3.5 9B";
  try {
    const response = await fetch("http://localhost:11434/api/tags");
    if (!response.ok) throw new Error("HTTP " + response.status);
    const data = await response.json();
    const installed = (data.models || []).some(model => model.name === modelName);
    status.textContent = installed ? "Ollama подключена · Qwen3.5 готова" : "Ollama работает · установи Qwen3.5 9B";
  } catch (error) {
    status.textContent = "Ollama не найдена · запусти её";
  }
}
checkOllama();updateName();
