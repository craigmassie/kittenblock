
function checkForTabloid(tabId, changeInfo, tab) {
    if (tab.url.indexOf('www.dailymail.co.uk') > -1){
        chrome.tabs.update(tabId, {url: "http://www.teaandkittens.co.uk/blocked/"});	  
    };
    if (tab.url.indexOf('www.express.co.uk') > -1){
        chrome.tabs.update(tabId, {url: "http://www.teaandkittens.co.uk/blocked/"});	  
    };
    if (tab.url.indexOf('www.thesun.co.uk') > -1){
        chrome.tabs.update(tabId, {url: "http://www.teaandkittens.co.uk/blocked/"});	  
    };
};

// Listen
chrome.tabs.onUpdated.addListener(checkForTabloid);
