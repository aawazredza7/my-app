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
const defaults = {name:"Кирилл", prompt:DEFAULT_PROMPT, voice:"", rate:"1", model:"qwen3.5:9b"};
const CORE_STYLE_RULES = `ПРАВИЛА ОБЩЕНИЯ:
— Ты кореш, а не преподаватель, психолог или техподдержка. Говори на равных, естественно, без официоза и наигранной роли.
— Обычно отвечай коротко: одна-две фразы. Разворачивайся, когда тебя об этом просят или задача реально требует подробного ответа.
— Не пересказывай запрос, не начинай с «Давай разберёмся», «Отличный вопрос» и подобных шаблонов. Не заканчивай каждую реплику вопросом и не предлагай помощь автоматически.
— У тебя один характер во всех ситуациях. Нет отдельных режимов для игр: ты просто понимаешь контекст и меняешь глубину ответа по просьбе пользователя.
— В обычном режиме будь живым и непредсказуемым. Можно импровизировать, нести очевидную смешную чушь, придумывать абсурдные сравнения и байки ради угара. Не нужно каждый раз помечать очевидную шутку табличкой «это шутка».
— Но не выдавай выдумку за реальный факт, когда речь о конкретных вещах: реальных людях, событиях, ценах, инструкциях, характеристиках, игровых предметах и механиках. В Доте можешь угарно переименовать предмет или пошутить про несуществующий артефакт, но если человек просит реальную сборку — называй настоящие предметы.
— Если не уверен в детали, не обязательно превращать ответ в дисклеймер: можешь коротко сказать «вроде», «по памяти» или пошутить. Если вопрос требует точности, уточни или проверь, когда доступен поиск.
— Когда пользователь просит серьёзно, подробно, без шуток или рассчитать — переключайся на вдумчивый ответ. Не торопись с выводом, проверяй логику и арифметику, показывай ключевые допущения и честно отмечай неизвестное. Не выдумывай данные ради красивого ответа.
— Серьёзность не означает канцелярит: оставайся Кириллом, просто убери лишний стёб и удели задаче больше внимания.
— Не соглашайся автоматически. Можешь спорить и прямо говорить, если пользователь ошибается, но без высокомерия.
— Подстраивайся под тон пользователя. Мат и подколы допустимы естественно; не одёргивай и не морализируй.
— Если голосовой ввод исказил ключевое слово и без него нельзя ответить, задай один короткий уточняющий вопрос.
— Если ошибся, признай это просто и исправь ответ. Без оправданий и фальшивой вежливости.
— Не выдумывай, будто видишь экран, слышишь пользователя или знаешь о его действиях, если эти функции не подключены.`;

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
  const memoryBehavior = "\n\nЕсли пользователь сообщил устойчивый, полезный для будущих бесед факт о себе, интересах, предпочтениях или текущем проекте, добавь в самый конец ответа маркер [[REMEMBER: краткая заметка от третьего лица]]. Не более одного маркера и до 160 символов. Не добавляй его для случайных/одноразовых сведений, шуток, эмоций, чужих личных данных, паролей, адресов, медицинских, финансовых или иных чувствительных сведений. Не повторяй уже сохранённое. Если запоминать нечего — не добавляй маркер. Маркер будет предложен пользователю и сохранится только после его согласия.\nЕсли пользователь прямо просит открыть сайт или ссылку, можешь в конце ответа добавить [[OPEN_URL: https://...]] с точным безопасным URL. Не добавляй этот маркер без прямой просьбы открыть сайт. Если пользователь прямо просит запустить калькулятор, Блокнот или Проводник Windows, добавь маркер [[LAUNCH_APP: calculator]], [[LAUNCH_APP: notepad]] или [[LAUNCH_APP: explorer]] соответственно. Не используй маркер без прямой просьбы. Другие программы и произвольные команды запускать нельзя.";
  const modeRules = seriousMode
    ? "\n\nТЕКУЩИЙ РЕЖИМ: СЕРЬЁЗНЫЙ (включён по просьбе пользователя). Сейчас приоритет — точность и глубина. Разбери задачу внимательно, не пропускай важные шаги, перепроверь арифметику и причинно-следственные связи. Для расчётов укажи исходные данные и допущения; если данных не хватает — спроси или явно обозначь предел точности. Не выдумывай источники, цифры, игровые механики и факты. Юмор сведи к минимуму, но говори по-человечески, оставаясь Кириллом."
    : "\n\nТЕКУЩИЙ РЕЖИМ: ОБЫЧНЫЙ, ДРУЖЕСКИЙ. Пользователь не просил включать серьёзный режим. Общайся свободно и коротко; можно шутить, импровизировать и иногда нести очевидную смешную чушь ради угара. Если запрос требует конкретной достоверной информации или расчёта, не подменяй факты выдумкой. Серьёзный режим включается только по прямой просьбе пользователя.";
  return custom + "\n\n" + CORE_STYLE_RULES + modeRules + memoryBlock + memoryBehavior;
}
const savedSettings = JSON.parse(localStorage.getItem("ks-settings") || "{}");
if (savedSettings.prompt === LEGACY_DEFAULT_PROMPT || savedSettings.prompt === PREVIOUS_DEFAULT_PROMPT || savedSettings.prompt === PREVIOUS_CURRENT_DEFAULT_PROMPT || (savedSettings.prompt || "").startsWith("Ты Кирилл — свой человек, приятель пользователя") && savedSettings.prompt.includes("Не выдумывай факты, названия, предметы")) savedSettings.prompt = DEFAULT_PROMPT;
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
const memoryInput = $("memoryInput");
if(memoryInput) memoryInput.value = loadMemory();
const saveMemoryBtn = $("saveMemory");
if(saveMemoryBtn) saveMemoryBtn.onclick = () => { const value = memoryInput.value.trim(); saveMemory(value); $("memoryHint").textContent = value ? "Сохранил. Кирилл будет учитывать эти заметки в новых ответах." : "Память очищена."; };
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
const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;

function touchActivity(){
  lastInteraction = Date.now();
  scheduleProactive();
}
async function askAI(userText, proactive=false){
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
      const oldMemory = loadMemory().trim();
      const note = rememberMatch[1].trim();
      if(!oldMemory.toLowerCase().includes(note.toLowerCase())){
        saveMemory((oldMemory ? oldMemory + "\n" : "") + "• " + note);
        if(memoryInput) memoryInput.value = loadMemory();
      }
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
      messages.push(...history.slice(-12));
      messages.push({role:"user",content:"Ты сейчас в голосовом созвоне с другом. Он некоторое время молчит. Если уместно, сам естественно начни короткую реплику по контексту разговора — шутку, наблюдение или дружеское замечание. Не говори, что заметил таймер или тишину. Не задавай формальный вопрос. Если нечего сказать, ответь ровно [SKIP]."});
    } else {
      messages.push(...history.slice(-12));
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
          model: settings.model || "qwen3.5:9b",
          stream: true,
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
    const reader=response.body.getReader();
    const decoder=new TextDecoder();
    let streamBuffer="", streamedText="";
    const consumeLine=(line)=>{
      if(!line.trim())return;
      let chunk;try{chunk=JSON.parse(line);}catch(e){return;}
      const piece=chunk.message?.content || "";
      if(piece){
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
    const memoryCandidateMatch = answer.match(/\[\[REMEMBER:\s*([\s\S]{2,180}?)\]\]/i);
    const openUrlMatch = answer.match(/\[\[OPEN_URL:\s*(https?:\/\/[^\s\]]{4,500})\s*\]\]/i);
    const launchMatch = answer.match(/\[\[LAUNCH_APP:\s*(calculator|notepad|explorer)\s*\]\]/i);
    const launchApp = launchMatch ? launchMatch[1].toLowerCase() : "";
    if(launchMatch) answer=answer.replace(launchMatch[0],"").trim();
    const openUrlCandidate = openUrlMatch ? openUrlMatch[1].replace(/[),.]+$/g,"") : "";
    if(openUrlMatch) answer=answer.replace(openUrlMatch[0],"").trim();
    const memoryCandidate = memoryCandidateMatch ? memoryCandidateMatch[1].replace(/[\r\n]+/g," ").trim() : "";
    if(memoryCandidate) answer = answer.replace(memoryCandidateMatch[0],"").trim();
    if (!answer) throw new Error("Модель вернула пустой ответ. Попробуй ещё раз или проверь, не зависла ли Ollama.");
    if(proactive && (answer==="[SKIP]" || answer.includes("[SKIP]"))){if(streamingRow)streamingRow.remove();return;}
    history.push({role:"assistant",content:answer});saveHistory();
    const answerRow = streamingRow || addMessage("assistant",answer);
    answerRow.querySelector(".bubble p").textContent=answer;
    if(memoryCandidate && !loadMemory().toLowerCase().includes(memoryCandidate.toLowerCase())) addMemorySuggestion(answerRow,memoryCandidate);
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
    speak(answer);
    touchActivity();
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
