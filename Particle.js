class Particle {

    constructor(x,y,r) {

        var options = {

            isStatic:false,
            restitution:0.4

        }
    
        this.r = 10;
        this.body = Bodies.circle(x,y,10,options);
        this.color = color(random(0,255), random(0,255), random(0,255));

        World.add(world,this.body);

    }

    display() {

        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, 10);
        pop();

    }

}