let mouseCursor = document.getElementById('cursor');

window.addEventListener('mousemove', cursor);

function cursor(event) {
    mouseCursor.style.top = event.pageY + "px";
    mouseCursor.style.left = event.pageX + "px";
}