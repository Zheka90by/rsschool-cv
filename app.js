hljs.initHighlightingOnLoad()

document.getElementById("burger").onclick = function() {open()};

function open() {
    document.getElementById("list-navigation").classList.toggle("show");
}