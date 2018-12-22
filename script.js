// for status management button and translatedText
let button = false;
let translated = false;

// for share X, Y posiiton with 2 func
let tempE;

function highlightHandler(e) {
  // 만약 내가 표시하고있는 Div영역 외의 곳을 클릭하면 모두 꺼져야된다.
  if (e.target.className !== "yusunglee") {
    translated = false;
    if (document.getElementById('translatedText')) document.getElementById('translatedText').remove();
  }
  // get the highlighted text
  let text = (document.all) ? document.selection.createRange().text : document.getSelection();
  // check if anything is actually highlighted
  if(text.toString() !== '') {
    /*
    // delete button and translated div
    if (document.getElementById('yusunglee')) document.getElementById('yusunglee').remove();
    if (document.getElementById('translatedText')) document.getElementById('translatedText').remove();
    */
    // we've got a highlight, now do your stuff here
    doStuff(text, e);
  }
}

document.onmouseup = highlightHandler;
if (!document.all) document.captureEvents(Event.MOUSEUP);

function doStuff(text, e) {
  tempE = e;
  let div = document.createElement('div');
  div.innerHTML = '<Button onClick="translateWithENEN()"><span style="font-size: 20px">번역</span></Button>';
  div.id = "yusunglee"
  div.class = "yusunglee"
  div.style.position = "absolute"
  div.style.top = e.pageY + "px";
  div.style.left = e.pageX + "px";
  if (!button) {
    document.body.appendChild(div);
    button = true;
  }
}

function translateWithENEN() {
  document.getElementById('yusunglee').remove();
  button = false;
  let div = document.createElement('div');
  div.innerHTML = `<span class="yusunglee" style="font-size: 20px">번역내용이 쭉 나올 것입니다. 하하하하하</span>`;
  div.id = "translatedText"
  div.class = "yusunglee"
  div.style.position = "absolute"
  div.style.top = tempE.pageY + "px";
  div.style.left = tempE.pageX + "px";
  if (!translated) {
    document.body.appendChild(div);
    translated = true;
  }
}
