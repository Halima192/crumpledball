var ball;

class paper{
    var options={
        isStatic:false,
        restitution:0.3,
         friction:0.5,
         density:1.2
  
    }

}
function setup(){
    ball=createSprite(20,30,22,20)
	ball.shapeColor='pink';
   }