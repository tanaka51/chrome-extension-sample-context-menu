chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === 'sample') {
    var text = info.selectionText;

    console.log("text: " + text);

    chrome.tabs.sendMessage(tab.id, {text: text}, function(res) {
      console.log('success to send request');
    });
  }
});

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    'title': 'murakumo',
    'contexts': ["selection"],
    'id': 'sample'
  });
});
