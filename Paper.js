class Paper {
    constructor(x, y, width, height) {
      var options = { 
   
        //isStatic:true, 
        restitution:0.3 ,
        friction:0.5,
        density:1.2        

    };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("t2.png");
      World.add(world, this.body);
    }
  
    display() {
      
      push();
      rectMode(CENTER)
      translate(this.body.position.x, this.body.position.y);
     imageMode(CENTER)
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  