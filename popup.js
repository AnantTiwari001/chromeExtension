console.log('hello world from popup')

//sending the cmd to send title of the current selected document 
let titlediv= document.getElementById('showTitle');
document.getElementById('showTitle').addEventListener('click', function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {title: "show"}, function(response) {
      titlediv.innerText=response.title;
    });
  });
})
