let body = document.querySelector("body");
let canvas_board = document.querySelector("canvas");
canvas_board.height = 800;
canvas_board.width = 2270;

let tool = canvas_board.getContext("2d");
let ix, iy, fx, fy;


// canavas board -> top point kitna niche hai 
let boardTop = canvas_board.getBoundingClientRect().top;
// canavas board -> left  point kitna aage  hai 
let boardLeft = canvas_board.getBoundingClientRect().left;
let mouse_on = false;

canvas_board.addEventListener("mousedown", function (event) {
    ix = event.clientX - boardLeft;
    iy = event.clientY - boardTop;
    console.log(cTool);
    if (cTool == "pencil" || cTool == "eraser") {
        mouse_on = true;
        tool.beginPath();
        tool.moveTo(ix, iy);
    }
})

canvas_board.addEventListener("mouseup", function (event) {

    if (cTool == "pencil" || cTool == "eraser") {
        mouse_on = false;
    } else if (cTool == "rect" || cTool == "line") {
        fx = event.clientX + boardLeft;
        fy = event.clientY - boardTop;
        let height = fy - iy;
        let width = fx - ix;
        if (cTool == "rect") {
            tool.strokeRect(ix, iy, width, height);
        } else if (cTool == "line") {
            tool.beginPath();
            tool.moveTo(ix, iy);
            tool.lineTo(fx, fy);
            tool.stroke();
        }
    }
})

canvas_board.addEventListener("mousemove", function (event) {
    if (mouse_on == false) {
        return;
    }

    fx = event.clientX - boardLeft;
    fy = event.clientY - boardTop;
    tool.lineTo(fx, fy);
    tool.stroke();
    ix = fx;
    iy = fy;


})

let redcolor = document.querySelector(".red");
let greencolor = document.querySelector(".green");
let bluecolor = document.querySelector(".blue");
let blackcolor = document.querySelector(".black");
redcolor.addEventListener("click", function (event) {
    tool.strokeStyle = "lightcoral";
})
greencolor.addEventListener("click", function (event) {
    tool.strokeStyle = "greenyellow";
})
bluecolor.addEventListener("click", function (event) {
    tool.strokeStyle = "lightskyblue";
})
blackcolor.addEventListener("click", function (event) {
    tool.strokeStyle = "black";
})

let close_click = document.querySelector("#close");
close_click.addEventListener("click", function (e) {
    tool.clearRect(0, 0, canvas_board.width, canvas_board.height);

})