let button = document.querySelector("#sticky");

button.addEventListener("click", function (e) {

    let sticky = document.createElement("div");
    sticky.setAttribute("class", "sticky");
    sticky.innerHTML =
        `<div class="navbar">
    <div class="minimise"></div>
    <div class="close"></div>

</div>
    <textarea name="" class="textarea"></textarea>`
    body.appendChild(sticky);
    let mini = sticky.querySelector(".minimise");
    let close = sticky.querySelector(".close");
    let textarea = sticky.querySelector("textarea");
    let isClose = false;
    mini.addEventListener("click", function (e) {
        if (isClose == false) {
            textarea.style.display = "none";
        } else {
            textarea.style.display = "block";
        }
        isClose = !isClose;
    })
    close.addEventListener("click", function (e) {
        sticky.remove();
    })
})