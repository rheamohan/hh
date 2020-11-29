class Ball {
    constructor(){
        var options ={
            'isStatic' : false,
            'restitution' :0.3,
            'friction' : 0.5,
            'density' : 1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);

        World.add(world, this.body);
    }

    display(){
    var pos = this.body.position
    rectMode(CENTER);
    rect(pos.x, pos.y, width, height);
    }
    
};