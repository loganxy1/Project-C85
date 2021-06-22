canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;
rover_x = 400;
rover_y = 300;
nasa_images = ["1.jpg", "2.jpg", "3.jpg"];
random_num = Math.floor(Math.random()*3);
background_image = nasa_images[random_num];
rover_image = "rover.png";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    key_pressed = e.keyCode;
    console.log(key_pressed);

    if(key_pressed=='38'){
        console.log("up");
        up();
    }

    if(key_pressed=='40'){
        console.log("down");
        down();
    }
    if(key_pressed=='37'){
        console.log("left");
        left();
    }
    if(key_pressed=='39'){
        console.log("right");
        right();
    }
}

function up(){
    if(rover_y>=0){
        rover_y = rover_y - 10;
        console.log("x = "+rover_x+"y = "+rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down(){
    if(rover_y<=500){
        rover_y = rover_y + 10;
        console.log("x = "+rover_x+"y = "+rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x = rover_x - 10;
        console.log("x = "+rover_x+"y = "+rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right(){
    if(rover_x<=700){
        rover_x = rover_x + 10;
        console.log("x = "+rover_x+"y = "+rover_y);
        uploadBackground();
        uploadrover();
    }
}