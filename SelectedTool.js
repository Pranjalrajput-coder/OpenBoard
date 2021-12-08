let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let rect = document.querySelector("#rect");
let line = document.querySelector("#line");
let options = document.querySelectorAll(".size-container");

let cTool = "pencil";
pencil.addEventListener("click", function (event) {
    if (cTool == "pencil") {
        options[0].style.display = "flex";
    } else {
        // pencil.style.border="1px solid grey";

        cTool = "pencil"
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
            options[i].style.border = "none";

        }
        tool.lineWidth = pencilSize;
    }
})
eraser.addEventListener("click", function (event) {
    if (cTool == "eraser") {
        options[1].style.display = "flex";
    } else {
        // eraser.style.border="1px solid grey";
        cTool = "eraser"
        tool.strokeStyle = "white";
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        tool.lineWidth = eraserSize;
    }
})
rect.addEventListener("click", function (event) {
    if (cTool == "rect") {
        options[2].style.display = "flex";
    } else {
        // rect.style.border="1px solid grey";
        cTool = "rect"
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        tool.lineWidth = rectSize;
    }

})
line.addEventListener("click", function (event) {
    if (cTool == "line") {
        options[3].style.display = "flex";
    } else {
        // line.style.border="1px solid grey";
        cTool = "line"
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        tool.lineWidth = lineSize;
    }
})