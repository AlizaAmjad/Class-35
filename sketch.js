
var ball,database

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    //initiating the database
    database = firebase.database()
    //read the values from the database
    database.ref("Ball/Position").on("value",function(data){
       var place = data.val() 
       ball.x = place.x
       ball.y = place.y
    })
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

//writing the values to the database
function changePosition(x,y){
    database.ref("Ball/Position").set({
    x: ball.x + x,
    y: ball.y + y
    })
}
