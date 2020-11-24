class Division {

    constructor(x,height){

        var options = {
        
            isStatic:true,

        }

        this.body = Bodies.rectangle(x,650,10,300,options);
        this.width = 10;
        this.height = 350;
        World.add(world,this.body);
    }

    display() {

        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,650,10,300);

    }

}