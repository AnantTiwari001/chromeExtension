// the main script file of extension
// Recieving the message from popup.js and sending title of the document as response
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.title === "show"){
      let title= document.title;
      sendResponse({title: title});
    }
  }
);
