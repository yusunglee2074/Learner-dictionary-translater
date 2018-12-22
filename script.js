function highlightHandler(e) {
    // get the highlighted text
    let text = (document.all) ? document.selection.createRange().text : document.getSelection();
    // check if anything is actually highlighted
    if(text.toString() !== '') {
        // we've got a highlight, now do your stuff here
        doStuff(text);
    }
}

document.onmouseup = highlightHandler;
if (!document.all) document.captureEvents(Event.MOUSEUP);


function doStuff(text) {
  window.alert(text.toString())
  console.log(text.toString())
}

