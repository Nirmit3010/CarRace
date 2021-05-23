canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 100;
car1_height = 90;
background_image = "bg.jpg";
car1_image = "car1.jpg";
car1_x = 10;
car1_y = 10;
car2_width = 100;
car2_height = 90;
car2_image = "car2.jpg";
car2_x = 10;
car2_y = 110;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = upload_background;
    background_imgTag.src = background_image;
    car1_imgTag = new Image();
    car1_imgTag.onload = upload_car1;
    car1_imgTag.src = car1_image;
    car2_imgTag = new Image();
    car2_imgTag.onload = upload_car2;
    car2_imgTag.src = car2_image;
}

function upload_background() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function upload_car1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function upload_car2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        car1_up();
        console.log("up");
    }
    if (keyPressed == '39') {
        car1_right();
        console.log("right");
    }
    if (keyPressed == '40') {
        car1_down();
        console.log("down");
    }
    if (keyPressed == '37') {
        car1_left();
        console.log("left");
    }
    if (keyPressed == '87') {
        car2_up();
        console.log("up");
    }
    if (keyPressed == '68') {
        car2_right();
        console.log("right");
    }
    if (keyPressed == '83') {
        car2_down();
        console.log("down");
    }
    if (keyPressed == '65') {
        car2_left();
        console.log("left");
    }
    if (car1_x > 700) {
        console.log(car1_x);
        document.getElementById("win").innerHTML = "Car1 is the winner";
    } else if (car2_x > 700) {
        console.log(car2_x);
        document.getElementById("win").innerHTML = "Car2 is the winner";
    }
}

function car1_up() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("when up is pressed, x=" + car1_x + "y=" + car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car1_down() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        console.log("when down is pressed, x=" + car1_x + "y=" + car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car1_right() {
    if (car1_x <= 700) {
        car1_x = car1_x + 10;
        console.log("when right is pressed, x=" + car1_x + "y=" + car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car1_left() {
    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        console.log("when left is pressed, x=" + car1_x + "y=" + car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car2_up() {
    if (car2_y >= 0) {
        car2_y = car2_y - 10;
        console.log("when up is pressed, x=" + car2_x + "y=" + car2_y);
        upload_background();
        upload_car2();
        upload_car1();
    }
}

function car2_down() {
    if (car2_y <= 500) {
        car2_y = car2_y + 10;
        console.log("when down is pressed, x=" + car2_x + "y=" + car2_y);
        upload_background();
        upload_car2();
        upload_car1();
    }
}

function car2_right() {
    if (car2_x <= 700) {
        car2_x = car2_x + 10;
        console.log("when right is pressed, x=" + car2_x + "y=" + car2_y);
        upload_background();
        upload_car2();
        upload_car1();
    }
}

function car2_left() {
    if (car2_x >= 0) {
        car2_x = car2_x - 10;
        console.log("when left is pressed, x=" + car2_x + "y=" + car2_y);
        upload_background();
        upload_car2();
        upload_car1();
    }
}
