class Baseclass1
{
    constructor(x,y,width,height)
   {
      var options = 
      {
          'isStatic' : true
      }
      this.body = Bodies.rectangle(x,y,70,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png");
     
      World.add(world,this.body);
      
   }
   display()
   {
    var pos = this.body.position;
   
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    fill("red");
    image(this.image,0,0,this.width,this.height);
    pop();
   }
}
