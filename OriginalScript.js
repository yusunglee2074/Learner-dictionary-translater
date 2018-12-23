import Jssoup from 'jssoup'
// for status management button and translatedText
let button = false;
let translated = false;

let searchWord;

// for share X, Y posiiton with 2 func
let tempE;

function highlightHandler(e) {
  // 만약 내가 표시하고있는 Div영역 외의 곳을 클릭하면 모두 꺼져야된다.
  if (e.target.className !== "yusunglee") {
    translated = false;
    if (document.getElementById('translatedText')) document.getElementById('translatedText').remove();
  }
  if (e.target.className !== "spn") {
    button = false;
    if (document.getElementById('yusunglee')) document.getElementById('yusunglee').remove();
  }
  // get the highlighted text
  let text = (document.all) ? document.selection.createRange().text : document.getSelection();
  // check if anything is actually highlighted
  if(text.toString() !== '' && text.toString().length > 2) {
    /*
    // delete button and translated div
    if (document.getElementById('yusunglee')) document.getElementById('yusunglee').remove();
    if (document.getElementById('translatedText')) document.getElementById('translatedText').remove();
    */
    // we've got a highlight, now do your stuff here
    searchWord = text;
    doStuff(e);
  }
}

document.onmouseup = highlightHandler;
if (!document.all) document.captureEvents(Event.MOUSEUP);

function doStuff(e) {
  tempE = e;
  let div = document.createElement('div');
  div.innerHTML = '<Button class="btn"><span class="spn" style="font-size: 20px">번역</span></Button>';
  div.addEventListener('click', translateWithENEN);
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

  // Set up our HTTP request
  var xhr = new XMLHttpRequest();

  // Setup our listener to process completed requests
  xhr.onload = function () {

    // Process our return data
    if (xhr.status >= 200 && xhr.status < 300) {
      // What do when the request is successful
      document.getElementById('yusunglee').remove();
      let soup = new Jssoup(xhr.responseText)
      button = false;
      let div = document.createElement('div');
      div.innerHTML = soup.findAll('div', 'sblocks')
      div.id = "translatedText"
      div.class = "yusunglee"
      div.style.position = "absolute"
      div.style.top = tempE.pageY + "px";
      div.style.left = tempE.pageX + "px";
      div.style.padding = "20px"
      div.style.border = "1px solid grey"
      div.style.backgroundColor = "White"
      if (!translated) {
        document.body.appendChild(div);
        translated = true;
      }
    } else {
      // What do when the request fails
      console.log('The request failed!');
    }

    // Code that should run regardless of the request status
    console.log('This always runs...');
  };

  // Create and send a GET request
  // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
  // The second argument is the endpoint URL
  xhr.open('GET', `https://cors-anywhere.herokuapp.com/learnersdictionary.com/definition/${searchWord}`);
  xhr.send();

}

