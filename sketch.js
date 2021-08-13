var ball;
var position, database


function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "yellow";
    var ballposition = database.ref('ball/position')
    ballposition.on("value", readposition, showerror)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        updatePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        updatePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        updatePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        updatePosition(0,+1);
    }
    drawSprites();
}

function updatePosition(x,y){
    database.ref('ball/position').set({
        'x': position.x + x,
        'y': position.y + y
    })
}

function readposition(data){
    position = data.val()
    ball.x = position.x;
    ball.y = position.y;
}

function showerror(){
    console.log("this is an error")
}