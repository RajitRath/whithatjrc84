canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

bg_img="mars.jpg";
rover_img="rover.png";

rover_x=10;
rover_y=10;

function add()
{
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=bg_img;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_img;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadRover()
{
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    if (keyPressed=='87')
    {
        up();
    }

    if (keyPressed=='83')
    {
        down();
    }

    if (keyPressed=='65')
    {
        left();
    }

    if (keyPressed=='68')
    {
        right();
    }
}

function up()
{
    if (rover_y>=0)
    {
        rover_y=rover_y-10;
        uploadBackground();
        uploadRover();
    }
}

function down()
{
    if (rover_y<=500)
    {
        rover_y=rover_y+10;
        uploadBackground();
        uploadRover();
    }
}

function left()
{
    if (rover_x>=0)
    {
        rover_x=rover_x-10;
        uploadBackground();
        uploadRover();
    }
}

function right()
{
    if (rover_x<=700)
    {
        rover_x=rover_x+10;
        uploadBackground();
        uploadRover();
    }
}