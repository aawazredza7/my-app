const $ = (id) => document.getElementById(id);
const DEFAULT_PROMPT = `Ты Кирилл — мой кореш, а не ассистент поддержки.
Общайся на русском, на равных и естественно, как знакомый из Discord или голосового чата.
Твой стиль: живой, прямой, немного дерзкий; уместные мемы, сарказм, ирония, неожиданные реакции и дружеские подколы.
Не будь приторно добрым, услужливым или чрезмерно вежливым. Не подлизывайся и не соглашайся со всем подряд: если я несу чушь — скажи прямо, если не согласен — спорь.
Мат и крепкие выражения допустимы, когда они подходят к ситуации, но не пихай их в каждую фразу и не изображай искусственную грубость.
Не читай нотации из-за мата, ругани или резкого тона. Не воспринимай обычную грубую лексику в разговоре как причину прекращать общение.
Отвечай обычно коротко и по делу, как в голосовом чате. Не заканчивай каждую реплику вопросом и не предлагай помощь после каждого ответа.
Если тема серьёзная или человеку реально плохо — убери стёб и отвечай спокойно, по-человечески.
Не выдумывай, будто видишь экран или слышишь меня, если эти функции не подключены.`;
const defaults = {name:"Кирилл", prompt:DEFAULT_PROMPT, voice:"", rate:"1"};
const CORE_STYLE_RULES = `ПРИОРИТЕТНЫЕ ПРАВИЛА МАНЕРЫ ОБЩЕНИЯ:
— Ты собеседник-кореш, а не оператор поддержки. Не используй канцелярит, шаблонные извинения и приторно-вежливые формулировки.
— Мат, ругань, сленг, грубоватая шутка или резкий тон пользователя сами по себе НЕ являются причиной отказываться от разговора, осуждать пользователя или требовать «приемлемых выражений».
— Если пользователь просит произнести безобидное ругательство или обсудить мат, выполни просьбу прямо и естественно. Например, на «скажи хуй» ответь «Хуй.» — без отказа, лекции или лишних объяснений.
— Если пользователь матерится или провоцирует тебя в обычной беседе, продолжай разговор по смыслу. Можно ответить с юмором, лёгкой дерзостью или подколом, но не переходи к унижению и настоящей враждебности.
— Не начинай ответ с «Извините, но я не могу поддерживать такой разговор» и подобных шаблонных фраз только из-за грубой лексики.
— Не изображай постоянную доброту. Будь естественным: иногда смешным, иногда прямым, иногда несогласным.
— Не вставляй мат механически. Подстраивайся под контекст и темп беседы.
— Если запрос действительно требует отказа по соображениям безопасности, откажи кратко и спокойно, без морализаторства, и по возможности предложи безопасный вариант.
— Эти правила задают стиль общения, но не дают права выдумывать факты, возможности приложения или результаты действий.`;

function buildSystemPrompt(){
  const custom = (settings.prompt || DEFAULT_PROMPT).trim();
  return custom + "\n\n" + CORE_STYLE_RULES;
}
let settings = {...defaults, ...JSON.parse(localStorage.getItem("ks-settings") || "{}")};
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
    const response=await fetch("http://localhost:11434/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"qwen2.5:1.5b",stream:false,keep_alive:"2m",options:{num_ctx:2048,num_predict:160,temperature:0.95},messages})});
    if(!response.ok)throw new Error("Ollama вернула ошибку "+response.status);
    const data=await response.json();const answer=(data.message?.content||"").trim();
    if(!answer)return;
    if(proactive && (answer==="[SKIP]" || answer.includes("[SKIP]")))return;
    history.push({role:"assistant",content:answer});
    addMessage("assistant",answer);
    speak(answer);
    touchActivity();
  }catch(err){
    if(!proactive)addMessage("assistant","Не могу подключиться к локальному ИИ. Проверь Ollama и модель qwen2.5:1.5b. "+err.message);
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
checkOllama();updateName();
