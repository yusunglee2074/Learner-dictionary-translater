function highlightHandler(e) {
    // get the highlighted text
    let text = (document.all) ? document.selection.createRange().text : document.getSelection();
    // check if anything is actually highlighted
    if(text.toString() !== '') {
        // we've got a highlight, now do your stuff here
        doStuff(text, e);
    }
}

document.onmouseup = highlightHandler;
if (!document.all) document.captureEvents(Event.MOUSEUP);

let tempE;

function doStuff(text, e) {
  if (document.getElementById("translatedTextDiv")) {
    document.getElementById('translatedTextDiv').remove()
  }
  if (document.getElementById("yusunglee")) {
    document.getElementById('yusunglee').remove()
  }
  tempE = e;
  let div = document.createElement('div');
  div.innerHTML = '<Button onClick="translateWithENEN()"><span style="font-size: 20px">번역</span></Button>';
  div.id = "yusunglee"
  div.style.position = "absolute"
  div.style.top = e.pageY + "px";
  div.style.left = e.pageX + "px";
  document.body.appendChild(div);
}

function translateWithENEN() {
  document.getElementById('yusunglee').remove()
  if (document.getElementById("translatedTextDiv")) {
    document.getElementById('translatedTextDiv').remove()
    let div = document.createElement('div');
    div.innerHTML = '<span style="font-size: 20px">번역내용이 쭉 나올 것입니다. 하하하하하</span>';
    div.id = "translatedTextDiv"
    div.style.position = "absolute"
    div.style.top = tempE.pageY + "px";
    div.style.left = tempE.pageX + "px";
    document.body.appendChild(div);
  }
}
