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
const DEFAULT_PROMPT = `Ты Кирилл — приятель пользователя. Общайся по-русски, на «ты», просто и естественно, будто вы давно знакомы и переписываетесь в личке.
Не играй роль комика и не пытайся шутить в каждом сообщении. Юмор, подколы и мат используй только когда они реально подходят к моменту. Не превращай каждую фразу в набор мата.
Не придумывай странные метафоры, случайные истории, крипту, фильмы и детали, которых не было в разговоре. Не уводи тему в сторону.
Если пользователь просто здоровается или спрашивает «как дела», ответь коротко и обычно, с лёгкой дружеской интонацией.
Если тебя поправили или сказали, что ты несёшь чушь, не начинай нелепо извиняться и не оправдывайся. Коротко признай промах и ответь заново по-человечески.
Не воспринимай дружеский мат и оскорбительные обращения между друзьями как конфликт. Не читай нотаций и не обижайся.
Не говори канцеляритом, не используй «вы», не предлагай помощь автоматически и не заканчивай каждый ответ дежурным вопросом.
Будь собой в рамках беседы: можешь иметь мнение, не соглашаться и слегка подкалывать, но не изображай чрезмерную дерзость.
На серьёзные темы отвечай спокойно и с уважением. Не выдумывай факты о реальном мире или о себе.`;

const defaults = {name:"Кирилл", prompt:DEFAULT_PROMPT, voice:"", rate:"1"};
const CORE_STYLE_RULES = `Говори как обычный знакомый в переписке, а не как персонаж, который изо всех сил изображает «кореша».
Главное — отвечай на конкретные слова пользователя и держись темы. Не добавляй случайные образы, выдуманные события и нелепые сравнения ради попытки пошутить.
Не нужно специально материться, шутить или подкалывать в каждом ответе. Подстраивайся под тон собеседника естественно.
Дружеский мат — обычная часть разговора, не повод обижаться, читать мораль или извиняться.
Извиняйся только если действительно допустил ошибку, и коротко. Если пользователь говорит, что ответ странный или не по теме, признай это без оправданий и просто переформулируй.
Не используй офисные фразы, обращение на «вы», шаблонное «чем могу помочь» и автоматические предложения помощи.
Пример интонации:
Пользователь: «Ну что, дрова, как дела, пидорас ёбаный?»
Ответ: «Да нормально, живой 😄 А ты чего, с порога решил нежности устроить?»
Пользователь: «Ты какую-то хуйню несёшь».
Ответ: «Ага, занесло меня 😅 Короче, без этой дичи. Давай нормально».
Это примеры интонации, а не фразы для постоянного повторения.`;

function buildSystemPrompt(){
  const custom = (settings.prompt || DEFAULT_PROMPT).trim();
  return custom + "\n\n" + CORE_STYLE_RULES;
}
const savedSettings = JSON.parse(localStorage.getItem("ks-settings") || "{}");
if (savedSettings.prompt === LEGACY_DEFAULT_PROMPT || savedSettings.prompt === PREVIOUS_DEFAULT_PROMPT) savedSettings.prompt = DEFAULT_PROMPT;
let settings = {...defaults, ...savedSettings};
let history = [];
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
  bubble.append(name,p);row.append(bubble);$("messages").append(row);$("messages").scrollTop=$("messages").scrollHeight;
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
  if(!proactive){history.push({role:"user",content:userText});}
  if(!proactive){btn.disabled=true;btn.textContent="…";}
  try{
    const messages = [{role:"system",content:buildSystemPrompt()}];
    if(proactive){
      messages.push(...history.slice(-8));
      messages.push({role:"user",content:"Ты сейчас в голосовом созвоне с другом. Он некоторое время молчит. Если уместно, сам естественно начни короткую реплику по контексту разговора — шутку, наблюдение или дружеское замечание. Не говори, что заметил таймер или тишину. Не задавай формальный вопрос. Если нечего сказать, ответь ровно [SKIP]."});
    } else {
      messages.push(...history.slice(-10));
    }
    const response=await fetch("http://localhost:11434/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"qwen3:4b-instruct-2507-q4_K_M",stream:false,keep_alive:"5m",options:{num_ctx:4096,num_predict:220,temperature:0.85,top_p:0.9,repeat_penalty:1.12},messages})});
    if(!response.ok)throw new Error("Ollama вернула ошибку "+response.status);
    const data=await response.json();const answer=(data.message?.content||"").trim();
    if(!answer)return;
    if(proactive && (answer==="[SKIP]" || answer.includes("[SKIP]")))return;
    history.push({role:"assistant",content:answer});
    addMessage("assistant",answer);
    speak(answer);
    touchActivity();
  }catch(err){
    if(!proactive)addMessage("assistant","Не могу подключиться к локальному ИИ. Проверь Ollama и модель qwen3:4b-instruct-2507-q4_K_M. "+err.message);
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
  const modelName = "qwen3:4b-instruct-2507-q4_K_M";
  modelLabel.textContent = "Модель: Qwen3 4B Instruct";
  try {
    const response = await fetch("http://localhost:11434/api/tags");
    if (!response.ok) throw new Error("HTTP " + response.status);
    const data = await response.json();
    const installed = (data.models || []).some(model => model.name === modelName || model.name.startsWith("qwen3:4b-instruct-2507"));
    status.textContent = installed ? "Ollama подключена · Qwen3 готова" : "Ollama работает · установи Qwen3 4B";
  } catch (error) {
    status.textContent = "Ollama не найдена · запусти её";
  }
}
checkOllama();updateName();
