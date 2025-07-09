//your JS code here. If required.
const text = document.getElementById("status");
const btn = document.getElementById("enterBtn");

btn.addEventListener("click", function() {
    text.innerHTML = `<h1>Entered Metaverse</h1>`;
})