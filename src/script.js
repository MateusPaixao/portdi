
document.addEventListener("DOMContentLoaded", function (e) {

    const btnAllow = document.querySelector('#btnAllow')

    btnAllow.addEventListener('click', function(e) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (activeTabs) {
            chrome.tabs.executeScript(activeTabs[0].id, { file: "src/handler.js" });
        }) 
    })
})
