class Paper{
    construcrtor(x,y,r){
      var options={
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
      }
    this.x=350;
    this.y=250;
    this.r=1
    this.body=Bodies.circle(this.x,this.y,this.r/2,options);
    World.add(world,this.body);
}

display(){
      var paperpos=this.body.position;
    
    push()
    translate(paperpos.x,paperpos.y);
    rectMode(CENTER);
    strokeWeight(3);
    fill("red");
    ellipse(0,0,this.r,this.r);
    pop()
  }

}