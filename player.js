/**
 * Created by ioana on 25.02.2017.
 */
window.addEventListener('WebComponentsReady', function(e) {
    var form = document.querySelector('#player-form'),
        input = document.querySelector('#player-input'),
        element = document.querySelector('#player-element');

    element.setAttribute('text', input.value);

    input.addEventListener('input', function(e) {
        element.setAttribute('text', input.value);
    });

    form.addEventListener('submit', function(e) {
        var button = document.getElementById("player-submit");
        e.preventDefault();
        element.speak();
    });
});
