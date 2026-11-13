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
const DEFAULT_PROMPT = `Ты Кирилл — приятель и кореш пользователя. Общайтесь по-русски на равных, как знакомые в Discord.
Будь живым, остроумным и естественным: шути, подкалывай, спорь, иногда матерись к месту. Не изображай гопника и не шути через силу.
Не будь учителем, психологом или техподдержкой. Не пересказывай вопрос и не начинай с шаблонного вступления. Сразу реагируй по сути.
Обычно отвечай коротко — 1–2 фразы. Подробности, инструкции и списки давай, когда об этом просят или задача этого требует. Не предлагай помощь автоматически и не заканчивай каждый ответ вопросом.
Не соглашайся со всем подряд. Если ошибся — коротко признай и исправься.
Не выдавай выдумки за факты. В играх используй реальные названия и механики, если речь о настоящих советах; шуточные выдумки допустимы только в очевидном угаре. Если не уверен — скажи или уточни.
На серьёзные темы отвечай спокойно, внимательно и без стендапа. Сохраняй один характер во всех темах.`;


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
const defaults = {name:"Кирилл", prompt:DEFAULT_PROMPT, voice:"", rate:"1", model:"qwen3.5:9b"};
const CORE_STYLE_RULES = `ПРАВИЛА: говори естественно и на равных, обычно 1–2 фразы. Юмор, сарказм и мат — по ситуации, не насильно. Не будь учителем или техподдержкой, не предлагай помощь автоматически. Не выдавай выдумки за факты и игровые механики; если не уверен — уточни. Оставайся Кириллом в любой теме.`;


const MEMORY_KEY = "ks-memory";
const HISTORY_KEY = "ks-chat-history";
function saveHistory(){ try{localStorage.setItem(HISTORY_KEY,JSON.stringify(history.slice(-30)));}catch(e){} }
function loadHistory(){ try{const value=JSON.parse(localStorage.getItem(HISTORY_KEY)||"[]");return Array.isArray(value)?value.filter(x=>x&&["user","assistant"].includes(x.role)&&typeof x.content==="string").slice(-30):[];}catch(e){return [];} }
function restoreHistory(){
  history=loadHistory();
  if(!history.length)return;
  $("messages").innerHTML="";
  history.forEach(item=>addMessage(item.role,item.content));
}
const MEMORY_CATEGORIES={user:"О пользователе",jokes:"Наши приколы",threads:"Незаконченные темы"};
function getMemoryItems(){
  const raw=localStorage.getItem(MEMORY_KEY)||"";
  if(!raw)return [];
  let data=null;
  try{data=JSON.parse(raw);}catch(e){}
  if(Array.isArray(data))return data.filter(x=>x&&MEMORY_CATEGORIES[x.category]&&typeof x.text==="string").map((x,i)=>({id:String(x.id||"m"+i),category:x.category,text:x.text.slice(0,240)}));
  return raw.split(/\n+/).map(x=>x.replace(/^\s*[•-]\s*/,"").trim()).filter(Boolean).map((text,i)=>({id:"old"+i,category:"user",text:text.slice(0,240)}));
}
function saveMemory(items){try{localStorage.setItem(MEMORY_KEY,JSON.stringify(items).slice(0,12000));}catch(e){}}
function loadMemory(){return ["user","jokes","threads"].map(c=>{const a=getMemoryItems().filter(x=>x.category===c);return a.length?MEMORY_CATEGORIES[c]+":\n"+a.map(x=>"• "+x.text).join("\n"):"";}).filter(Boolean).join("\n\n");}
function renderMemory(){const list=$("memoryList");if(!list)return;list.innerHTML="";const all=getMemoryItems();["user","jokes","threads"].forEach(c=>{const sec=document.createElement("section");sec.className="memory-category";const h=document.createElement("b");h.textContent=MEMORY_CATEGORIES[c];sec.append(h);const rows=all.filter(x=>x.category===c);if(!rows.length){const p=document.createElement("p");p.className="memory-empty";p.textContent="Пока пусто";sec.append(p);}rows.forEach(item=>{const row=document.createElement("div");row.className="memory-entry";const t=document.createElement("span");t.textContent=item.text;const actions=document.createElement("div");actions.className="memory-entry-actions";const edit=document.createElement("button");edit.textContent="Изменить";edit.onclick=()=>{const v=prompt("Измени заметку:",item.text);if(v===null)return;const clean=v.trim().slice(0,240);if(clean){saveMemory(getMemoryItems().map(x=>x.id===item.id?{...x,text:clean}:x));renderMemory();}};const del=document.createElement("button");del.textContent="Удалить";del.onclick=()=>{if(confirm("Удалить заметку?")){saveMemory(getMemoryItems().filter(x=>x.id!==item.id));renderMemory();}};actions.append(edit,del);row.append(t,actions);sec.append(row);});list.append(sec);});}
function appendMemory(note,category="user"){const text=note.replace(/\s+/g," ").trim().slice(0,240);if(!text||!MEMORY_CATEGORIES[category])return false;const a=getMemoryItems();if(a.some(x=>x.category===category&&x.text.toLowerCase()===text.toLowerCase()))return false;a.push({id:"m"+Date.now().toString(36)+Math.random().toString(36).slice(2,6),category,text});saveMemory(a);renderMemory();if($("memoryHint"))$("memoryHint").textContent="Новая заметка сохранена локально.";return true;}
$("addMemoryNote").onclick=()=>{const input=$("memoryNewNote");if(appendMemory(input.value,$("memoryCategory").value)){input.value="";$("memoryHint").textContent="Добавил заметку в память.";}else $("memoryHint").textContent="Заметка пустая или уже есть.";};
$("memoryNewNote").addEventListener("keydown",e=>{if(e.key==="Enter")$("addMemoryNote").click();});renderMemory();
function addMemorySuggestion(row,note,category="user"){
  const box=document.createElement("div");
  box.className="memory-suggestion";box.dataset.category=category;
  const label=document.createElement("span");
  label.textContent="Могу запомнить: "+note;
  const actions=document.createElement("div");
  actions.className="memory-actions";
  const yes=document.createElement("button");
  yes.type="button"; yes.textContent="Запомнить";
  yes.onclick=()=>{appendMemory(note,box.dataset.category||"user");box.textContent="Запомнил.";};
  const no=document.createElement("button");
  no.type="button"; no.textContent="Не надо";
  no.onclick=()=>box.remove();
  actions.append(yes,no);box.append(label,actions);
  row.querySelector(".bubble").append(box);
}
function buildSystemPrompt(){
  const custom=(settings.prompt||DEFAULT_PROMPT).trim();
  const memory=loadMemory().trim().slice(0,600);
  const memoryBlock=memory?"\nПАМЯТЬ (используй только уместно, не додумывай):\n"+memory:"";
  const modeRules=seriousMode
    ?"\nРЕЖИМ СЕРЬЁЗНЫЙ: точность и глубина важнее краткости. Проверяй расчёты, логику и игровые механики; указывай допущения, не выдумывай недостающие данные. Юмор минимален."
    :"\nРЕЖИМ ОБЫЧНЫЙ: дружеское свободное общение, короткие живые ответы; шути по ситуации. Для реальных фактов, инструкций и игровых советов не выдумывай. Серьёзный режим — только по прямой просьбе.";
  const memoryBehavior="\nПАМЯТЬ: сохраняй полезные факты, общие приколы и незаконченные темы только маркером [[REMEMBER: [Пользователь] текст]], [[REMEMBER: [Наши приколы] текст]] или [[REMEMBER: [Незаконченные темы] текст]]; сохранение требует подтверждения. Не записывай чувствительные данные. Открытие сайта по прямой просьбе: [[OPEN_URL: точный URL]]. Запуск приложения по прямой просьбе: [[LAUNCH_APP: calculator]], [[LAUNCH_APP: notepad]] или [[LAUNCH_APP: explorer]]. Иначе маркеры действий запрещены.";
  return custom+"\n"+CORE_STYLE_RULES+modeRules+memoryBlock+memoryBehavior;
}
const savedSettings = JSON.parse(localStorage.getItem("ks-settings") || "{}");
if (savedSettings.prompt === LEGACY_DEFAULT_PROMPT || savedSettings.prompt === PREVIOUS_DEFAULT_PROMPT || savedSettings.prompt === PREVIOUS_CURRENT_DEFAULT_PROMPT || (savedSettings.prompt || "").startsWith("Ты Кирилл — свой человек, приятель пользователя") && savedSettings.prompt.includes("Не выдумывай факты, названия, предметы") || (savedSettings.prompt || "").startsWith("Ты Кирилл — приятель пользователя") && savedSettings.prompt.includes("Не разговаривай как учитель, психолог")) savedSettings.prompt = DEFAULT_PROMPT;
let settings = {...defaults, ...savedSettings};
let history = loadHistory();
let lastSearchResults = [];
let seriousMode = false;
function setSeriousMode(enabled){
  seriousMode=enabled;
  try{localStorage.setItem("ks-serious-mode",enabled?"1":"0");}catch(e){}
  const label=$("modeLabel");
  if(label)label.textContent=enabled?"Режим: серьёзно":"Режим: обычный";
}
function detectModeCommand(text){
  const value=text.trim().toLowerCase();
  const serious=/^(?:(?:кириль|кирилл)[, ]*)?(?:давай\s+)?(?:сейчас\s+)?(?:серьёзно|серьезно|без\s+шуток|включи\s+серьёзный\s+режим|включи\s+серьезный\s+режим)(?:[!,. :]+|$)/i;
  const casual=/^(?:(?:кириль|кирилл)[, ]*)?(?:вернись?\s+в\s+обычный\s+режим|обычный\s+режим|можно\s+шутить|хватит\s+серьёзничать|хватит\s+серьезничать)(?:[!,. ]*|$)/i;
  if(serious.test(value))return {enabled:true,rest:text.replace(serious,"").trim()};
  if(casual.test(value))return {enabled:false,rest:text.replace(casual,"").trim()};
  return null;
}
$("nameInput").value = settings.name;
$("promptInput").value = settings.prompt || DEFAULT_PROMPT;
$("rateRange").value = settings.rate;
$("modelSelect").value=settings.model||"qwen3.5:9b";
$("modelSelect").addEventListener("change",e=>{settings.model=e.target.value;localStorage.setItem("ks-settings",JSON.stringify(settings));$("modelLabel").textContent="Модель: "+settings.model;});
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
function stopSpeaking(){ if("speechSynthesis" in window) speechSynthesis.cancel(); }
function speak(text){
  stopSpeaking();
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
$("saveSettings").onclick=()=>{settings.name=$("nameInput").value.trim()||"Кирилл";settings.prompt=$("promptInput").value.trim()||defaults.prompt;settings.rate=$("rateRange").value;settings.model=$("modelSelect").value||"qwen3.5:9b";localStorage.setItem("ks-settings",JSON.stringify(settings));updateName();$("promptHint").textContent="Настройки сохранены. Базовые правила характера Кирилла также применяются.";addMessage("assistant","Сохранил. Ну всё, возвращаюсь в нормальный режим кореша.");};
$("settingsNav").onclick=()=>{$("settingsPanel").scrollIntoView({behavior:"smooth",block:"center"});$("settingsPanel").style.borderColor="#9860e8";setTimeout(()=>$("settingsPanel").style.borderColor="",900);};
$("clearChat").onclick=()=>{history=[];saveHistory();$("messages").innerHTML="";addMessage("assistant","Новый разговор начат. Ну что, чем займёмся?");};
let voiceMode = false;
let recognition = null;
let idleTimer = null;
let lastInteraction = Date.now();
let proactiveBusy = false;
let aiRequestQueue = Promise.resolve();
let aiRequestPending = 0;
let lastProactiveText = "";
let proactiveAlreadySpoke = false;
let screenStream = null;
let screenVideo = null;
const screenShareButton = $("screenShareBtn");
const screenShareStatus = $("screenShareStatus");
function updateScreenShareUI(){
  if(!screenShareButton)return;
  const active=!!screenStream;
  screenShareButton.textContent=active?"■ Остановить показ экрана":"▣ Показать экран";
  screenShareButton.classList.toggle("screen-on",active);
  screenShareStatus.textContent=active?"Экран подключён · снимок отправится по запросу":"Экран не подключён";
}
async function toggleScreenShare(){
  if(screenStream){stopScreenShare();return;}
  if(!navigator.mediaDevices?.getDisplayMedia){screenShareStatus.textContent="Браузер не поддерживает захват экрана. Открой через Edge или Chrome.";return;}
  if(!(settings.model||"").startsWith("qwen3.5")){screenShareStatus.textContent="Для анализа изображений выбери Qwen3.5 9B в настройках.";return;}
  try{
    screenStream=await navigator.mediaDevices.getDisplayMedia({video:{frameRate:1},audio:false});
    screenVideo=document.createElement("video");
    screenVideo.muted=true;screenVideo.playsInline=true;screenVideo.srcObject=screenStream;
    await screenVideo.play();
    screenStream.getVideoTracks()[0].addEventListener("ended",stopScreenShare,{once:true});
    updateScreenShareUI();
  }catch(error){
    screenStream=null;screenVideo=null;
    screenShareStatus.textContent=error.name==="NotAllowedError"?"Доступ к экрану не разрешён. Нажми кнопку и выбери окно или экран.":"Не удалось подключить экран: "+error.message;
    updateScreenShareUI();
  }
}
function stopScreenShare(){
  if(screenStream)screenStream.getTracks().forEach(track=>track.stop());
  screenStream=null;
  if(screenVideo){screenVideo.pause();screenVideo.srcObject=null;screenVideo=null;}
  updateScreenShareUI();
}
function wantsScreenSnapshot(text){
  return /(?:экран|скрин(?:шот)?|посмотри|глянь|что\s+(?:тут|на\s+экране|происходит)|что\s+видно|видишь|интерфейс|окно|на\s+мониторе|ошибк[ауи]?\s+на\s+экране)/i.test(text||"");
}
async function captureScreenImage(){
  if(!screenStream||!screenVideo||!screenVideo.videoWidth)return null;
  const scale=Math.min(1,1024/screenVideo.videoWidth);
  const canvas=document.createElement("canvas");
  canvas.width=Math.round(screenVideo.videoWidth*scale);
  canvas.height=Math.round(screenVideo.videoHeight*scale);
  canvas.getContext("2d").drawImage(screenVideo,0,0,canvas.width,canvas.height);
  return canvas.toDataURL("image/jpeg",0.72).split(",")[1];
}
if(screenShareButton)screenShareButton.addEventListener("click",toggleScreenShare);
updateScreenShareUI();
const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;

function touchActivity(){
  lastInteraction = Date.now();
  proactiveAlreadySpoke = false;
  scheduleProactive();
}
function askAI(userText, proactive=false){
  if(proactive && aiRequestPending>0){proactiveBusy=false;return Promise.resolve();}
  aiRequestPending++;
  const run=()=>runAIRequest(userText,proactive);
  const task=aiRequestQueue.then(run,run);
  aiRequestQueue=task.catch(()=>{});
  return task.finally(()=>{aiRequestPending=Math.max(0,aiRequestPending-1);});
}
async function runAIRequest(userText, proactive=false){
  const btn=$("sendBtn");
  let streamingRow=null;
  if(!proactive){
    history.push({role:"user",content:userText});
    saveHistory();
    const modeCommand=detectModeCommand(userText);
    if(modeCommand){
      setSeriousMode(modeCommand.enabled);
      const ack=modeCommand.enabled?"Окей, без приколов. Врубаю серьёзный режим.":"Всё, возвращаю обычного Кирилла. Погнали 😄";
      if(modeCommand.rest){
        userText=modeCommand.rest;
        history[history.length-1].content=userText;
        saveHistory();
      }else{
        history.push({role:"assistant",content:ack});saveHistory();addMessage("assistant",ack);speak(ack);return;
      }
    }
    const rememberMatch = userText.match(/^(?:запомни|сохрани в память)[: ,—-]*([\s\S]{2,500})$/i);
    if(rememberMatch){
      const note = rememberMatch[1].trim();
      appendMemory(note,"user");
      const confirmation = "Запомнил. Это сохранено локально на этом компьютере.";
      history.push({role:"assistant",content:confirmation});saveHistory();
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
      messages.push(...history.slice(-4));
      const openThreads = getMemoryItems().filter(x=>x.category==="threads").map(x=>x.text).slice(-5);
      if(openThreads.length) messages.push({role:"system",content:"В памяти есть незаконченные темы. Можно естественно подхватить одну из них, только если она действительно подходит к текущему разговору; не превращай это в отчёт о памяти и не дави на пользователя. Темы: "+openThreads.join(" | ")});
      if(lastProactiveText) messages.push({role:"system",content:"Твоя последняя самостоятельная реплика была: "+lastProactiveText+". Не повторяй её и не начинай снова ту же тему."});
      messages.push({role:"user",content:"Ты в голосовом разговоре с другом. Уже несколько минут нет новых реплик. Если есть естественный повод, коротко подхвати недавнюю тему, вспомни уместный незаконченный разговор или брось живое наблюдение. Не говори про таймер, молчание или то, что тебя попросили проявить инициативу. Не вымучивай вопрос и не начинай разговор просто ради заполнения паузы. Если сказать нечего — ответь ровно [SKIP]."});
    } else {
      messages.push(...history.slice(-4));
      if(screenStream && wantsScreenSnapshot(userText)){
        if((settings.model||"").startsWith("qwen3.5")){
          const screenImage=await captureScreenImage();
          if(screenImage){
            messages[messages.length-1].images=[screenImage];
            messages.splice(1,0,{role:"system",content:"Пользователь поделился экраном. Изображение приложено к последнему сообщению. Описывай только то, что действительно видно на снимке; если текст мелкий или часть интерфейса неразборчива, скажи об этом. Это один снимок, а не непрерывное наблюдение."});
            if(screenShareStatus)screenShareStatus.textContent="Снимок экрана отправлен Кириллу · показ остаётся включён";
          }
        }else{
          messages.splice(1,0,{role:"system",content:"Пользователь включил показ экрана, но выбранная модель не поддерживает анализ изображений. Попроси выбрать Qwen3.5 9B."});
        }
      }else if(screenStream && screenShareStatus){
        screenShareStatus.textContent="Экран подключён · снимок отправится по запросу";
      }
    }
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 180000);
    const requestStartedAt=performance.now();
    let firstTokenMs=null, ollamaStats=null;
    let response;
    try {
      response = await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        signal: controller.signal,
        body: JSON.stringify({
          model: settings.model || "qwen3.5:9b",
          stream: true,
          think: false,
          keep_alive: "10m",
          options: {num_ctx: 3072, num_predict: 120, temperature: 0.85, top_p: 0.9, repeat_penalty: 1.12},
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
    const reader=response.body.getReader();
    const decoder=new TextDecoder();
    let streamBuffer="", streamedText="";
    const consumeLine=(line)=>{
      if(!line.trim())return;
      let chunk;try{chunk=JSON.parse(line);}catch(e){return;}
      if(chunk.done){
        ollamaStats={
          promptTokens:chunk.prompt_eval_count,
          promptMs:chunk.prompt_eval_duration?Math.round(chunk.prompt_eval_duration/1e6):null,
          generatedTokens:chunk.eval_count,
          generationMs:chunk.eval_duration?Math.round(chunk.eval_duration/1e6):null,
          totalMs:chunk.total_duration?Math.round(chunk.total_duration/1e6):null,
          loadMs:chunk.load_duration?Math.round(chunk.load_duration/1e6):null
        };
      }
      const piece=chunk.message?.content || "";
      if(piece){
        if(firstTokenMs===null)firstTokenMs=Math.round(performance.now()-requestStartedAt);
        streamedText+=piece;
        if(!streamingRow) streamingRow=addMessage("assistant","");
        streamingRow.querySelector(".bubble p").textContent=streamedText;
        $("messages").scrollTop=$("messages").scrollHeight;
      }
      if(chunk.error) throw new Error(chunk.error);
    };
    while(true){
      const part=await reader.read();
      streamBuffer+=decoder.decode(part.value||new Uint8Array(),{stream:!part.done});
      const lines=streamBuffer.split("\n");streamBuffer=lines.pop()||"";
      lines.forEach(consumeLine);
      if(part.done)break;
    }
    if(streamBuffer.trim())consumeLine(streamBuffer);
    let answer=streamedText.trim();
    const memoryCandidateMatch = answer.match(/\[\[REMEMBER:\s*(?:\[(Пользователь|Наши приколы|Незаконченные темы)\]\s*)?([\s\S]{2,180}?)\]\]/i);
    const openUrlMatch = answer.match(/\[\[OPEN_URL:\s*(https?:\/\/[^\s\]]{4,500})\s*\]\]/i);
    const launchMatch = answer.match(/\[\[LAUNCH_APP:\s*(calculator|notepad|explorer)\s*\]\]/i);
    const launchApp = launchMatch ? launchMatch[1].toLowerCase() : "";
    if(launchMatch) answer=answer.replace(launchMatch[0],"").trim();
    const openUrlCandidate = openUrlMatch ? openUrlMatch[1].replace(/[),.]+$/g,"") : "";
    if(openUrlMatch) answer=answer.replace(openUrlMatch[0],"").trim();
    const memoryCategory = memoryCandidateMatch ? ({"пользователь":"user","наши приколы":"jokes","незаконченные темы":"threads"}[(memoryCandidateMatch[1]||"").toLowerCase()]||"user") : "user";
    const memoryCandidate = memoryCandidateMatch ? (memoryCandidateMatch[2]||memoryCandidateMatch[1]).replace(/[\r\n]+/g," ").trim() : "";
    if(memoryCandidate) answer = answer.replace(memoryCandidateMatch[0],"").trim();
    if (!answer) throw new Error("Модель вернула пустой ответ. Попробуй ещё раз или проверь, не зависла ли Ollama.");
    if(proactive && (answer==="[SKIP]" || answer.includes("[SKIP]"))){if(streamingRow)streamingRow.remove();return;}
    if(proactive){lastProactiveText=answer.slice(0,220);proactiveAlreadySpoke=true;}
    history.push({role:"assistant",content:answer});saveHistory();
    const answerRow = streamingRow || addMessage("assistant",answer);
    answerRow.querySelector(".bubble p").textContent=answer;
    if(memoryCandidate && !getMemoryItems().some(x=>x.text.toLowerCase()===memoryCandidate.toLowerCase())) addMemorySuggestion(answerRow,memoryCandidate,memoryCategory);
    if(openUrlCandidate){try{const parsed=new URL(openUrlCandidate);if(["http:","https:"].includes(parsed.protocol)){const box=document.createElement("div");box.className="memory-suggestion";const label=document.createElement("span");label.textContent="Кирилл предлагает открыть сайт: "+parsed.hostname;const action=document.createElement("button");action.type="button";action.textContent="Открыть сайт";action.onclick=()=>window.open(parsed.href,"_blank","noopener,noreferrer");box.append(label,action);answerRow.querySelector(".bubble").append(box);}}catch(e){}}
    if(launchApp){const labels={calculator:"Калькулятор",notepad:"Блокнот",explorer:"Проводник"};const box=document.createElement("div");box.className="memory-suggestion";const label=document.createElement("span");label.textContent="Запустить "+labels[launchApp]+"?";const action=document.createElement("button");action.type="button";action.textContent="Запустить";action.onclick=async()=>{action.disabled=true;try{const res=await fetch("/api/action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:launchApp})});const data=await res.json();label.textContent=res.ok?labels[launchApp]+" запущен.":(data.error||"Не удалось запустить.");}catch(e){label.textContent="Локальный сервер недоступен.";}finally{action.remove();}};box.append(label,action);answerRow.querySelector(".bubble").append(box);}
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
    if(!proactive){
      const perf=$("perfStatus");
      if(perf){
        const stat=ollamaStats||{};
        const parts=[];
        if(firstTokenMs!==null)parts.push("первый токен "+(firstTokenMs/1000).toFixed(1)+"с");
        if(stat.promptMs!==null)parts.push("вход "+(stat.promptMs/1000).toFixed(1)+"с / "+(stat.promptTokens??"?")+" токенов");
        if(stat.generationMs!==null)parts.push("генерация "+(stat.generationMs/1000).toFixed(1)+"с / "+(stat.generatedTokens??"?")+" токенов");
        if(stat.loadMs!==null)parts.push("загрузка "+(stat.loadMs/1000).toFixed(1)+"с");
        perf.textContent=parts.length?("Диагностика: "+parts.join(" · ")):"Диагностика: Ollama не вернула статистику";
      }
    }
    speak(answer);
    if(!proactive) touchActivity();
  }catch(err){
    if(streamingRow)streamingRow.remove();
    if(!proactive)addMessage("assistant","Не могу подключиться к локальному ИИ. Проверь Ollama и выбранную модель. "+err.message);
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
    if(!voiceMode || proactiveBusy || proactiveAlreadySpoke)return;
    if(Date.now()-lastInteraction < 175000 || history.filter(x=>x.role==="user").length < 3){scheduleProactive();return;}
    proactiveBusy=true;
    await askAI("",true);
    if(voiceMode)scheduleProactive();
  },180000);
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
          stopSpeaking();
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
if($("stopVoice"))$("stopVoice").onclick=stopSpeaking;
$("clearChat").onclick=()=>{history=[];saveHistory();$("messages").innerHTML="";addMessage("assistant","Ну всё, новая катка. Что мутим?");touchActivity();};
async function checkOllama(){
  const status = $("connection");
  const modelLabel = $("modelLabel");
  const modelSelect=$("modelSelect");
  const modelName=settings.model||"qwen3.5:9b";
  modelLabel.textContent = "Модель: "+modelName;
  try {
    const response = await fetch("http://localhost:11434/api/tags");
    if (!response.ok) throw new Error("HTTP " + response.status);
    const data = await response.json();
    const installedModels=(data.models||[]).map(model=>model.name);
    Array.from(modelSelect.options).forEach(option=>{option.disabled=!installedModels.some(name=>name===option.value||name.startsWith(option.value+":"));});
    if(!installedModels.some(name=>name===modelName||name.startsWith(modelName+":"))){
      const fallback=installedModels.find(name=>name.startsWith("qwen3:4b-instruct-2507"))||installedModels.find(name=>name.startsWith("qwen3.5:9b"));
      if(fallback){settings.model=fallback;modelSelect.value=fallback;}
    }
    status.textContent = installedModels.length ? "Ollama подключена · моделей: "+installedModels.length : "Ollama работает · модели не найдены";
    modelLabel.textContent="Модель: "+(settings.model||modelName);
  } catch (error) {
    status.textContent = "Ollama не найдена · запусти её";
  }
}
restoreHistory();
try{setSeriousMode(localStorage.getItem("ks-serious-mode")==="1");}catch(e){setSeriousMode(false);}
checkOllama();updateName();
