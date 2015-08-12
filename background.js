chrome.contextMenus.create({
    "title": "「%s」をSENSEI NOTEで検索",
    "type": "normal",
    "contexts": ["selection"],
    "onclick": function(info) {
        var url = 'https://senseinote.com/search?utf8=%E2%9C%93&word=' + encodeURIComponent(info.selectionText);
        chrome.tabs.create({
            url: url
        });
    }
});
