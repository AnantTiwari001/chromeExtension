// the main script file of extension
// Recieving the message from popup.js and sending title of the document as response
// task 1
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.title === "show"){
      let title= document.title;
      sendResponse({title: title});
    }
  }
);
