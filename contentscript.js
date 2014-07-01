chrome.extension.onMessage.addListener(function(req, sender, sendResponse){
  console.log('got a message');

  alert(req.text);

  sendResponse({});
});
