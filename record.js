/**
 * Created by ioana on 24.02.2017.
 */
window.addEventListener('WebComponentsReady', function(e) {
    var form = document.querySelector('#recognition-form'),
        input = document.querySelector('#recognition-input'),
        element = document.querySelector('#recognition-element');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        element.start();
    });

    element.addEventListener('result', function(e) {
        input.textContent = e.detail.result;
        if(input.textContent.includes("next")) {
            element.stop();
            window.open("next-page.html",'_blank'); //just to test if yelling 'Next' to your laptop will open a new tab
        }
    });
});


