var IsCardAvailable = true

document.addEventListener("DOMContentLoaded", function (event) {
    var element = document.getElementById('cardId');
    var cardId = element.innerText || element.textContent;

    var list = JSON.parse(localStorage.getItem(cardId)) || null

    if(!list) {
        IsCardAvailable = false
        this.body.style.backgroundColor = "#BD0000";
        element.innerText = "ERROR: Card not found 😭😭😭😭😭"
        return;
    }
});

