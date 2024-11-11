var IsCardAvailable = true

document.addEventListener("DOMContentLoaded", function (event) {
    var element = document.getElementById('cardId');
    var textbox = document.getElementById('textbox');

    var cardId = element.innerText || element.textContent;

    var list = JSON.parse(localStorage.getItem(cardId)) || null

    console.log(list)

    if(!list) {
        IsCardAvailable = false
        this.body.style.backgroundColor = "#BD0000";
        
        textbox.innerHTML = "Card not found"
        return;
    }
});