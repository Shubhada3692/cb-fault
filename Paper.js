class Paper{
    constructor(x,y,r)
	{
	var options={
        isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
    this.x=x;
    this.y=y;
    this.r=r;
    this.image = loadImage("paper.png");
    this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options);
    World.add(world, this.body);

	}
    display()
	{
			var paperpos=this.body.position;		
			//push()
			//translate(paperpos.x, paperpos.y);
			ellipseMode(RADIUS);
			//strokeWeight(4);
			//stroke("black");
			//fill("white");
			//draw the ellipse here to display the rubber ball
            //ellipse(0,0,this.r,this.r);
			image(this.image,paperpos.x,paperpos.y,this.r,this.r);
			//pop()
	}

}