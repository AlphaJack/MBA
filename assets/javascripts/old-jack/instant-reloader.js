// https://stackoverflow.com/a/67825703
let previousUrl = '';
const observer = new MutationObserver(function(mutations) {
  if (location.href !== previousUrl) {
    previousUrl = location.href;
    //console.log(`URL changed to ${location.href}`);

    // launch the script, but it's hardcoded to the absolute path!
    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = '/mba/assets/js/arithmatex.js';
    document.getElementsByTagName('head')[0].appendChild(newScript);

    }
});
const config = {subtree: true, childList: true};
observer.observe(document, config);
