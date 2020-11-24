class Plinko {

    constructor(x,y,diameter) {

        var options = {

            isStatic:true

        }

        this.diameter = 15;
        this.body = Bodies.circle(x,y,15,options);

        World.add(world,this.body);

    }

    display() {

        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        fill("white");
        ellipseMode(CENTER);
        ellipse(0, 0, 15);
        pop();

    }

}