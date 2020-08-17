
class Baseclass 
{
    constructor(x,y,height)
   {
      var options = 
      {
          'isStatic' : false,
          'restitution' : 0.3,
          'friction': 0.5,
          'density':1.2,
          'mass': 6800
      }
      this.body = Bodies.rectangle(x,y,70,height,options);
      this.radius = 70;
      this.height = height;
      this.image = loadImage("paper.png");
     
      World.add(world,this.body);
      
   }
   display()
   {
    var pos = this.body.position;
   
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    fill("red");
    image(this.image,0,0,this.radius,this.height);
    pop();
   }
}
