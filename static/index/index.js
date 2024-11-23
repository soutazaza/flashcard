document.addEventListener("DOMContentLoaded", function (event) {
    var list = localStorage || null;
    var name = Object.keys(list)

    build(name);
});

function build(list) {
    var card_list = document.getElementById('card-list');
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
        card_list.innerHTML += '<li class="card"><a href="/card/' + list[i] + '">' + list[i] + '</a></li>';
    }
}