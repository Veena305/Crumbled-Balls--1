class Dustbin {

    constructor(x,y,width,height) {

        var options ={

            'restitution' : 0.8,
            'friction' : 1.0,
            'density' : 1.0

        }

        this.body = Bodies.rectangle(x,y,width,height.options);
        this.body = width;
        this.height = height;
        World.add(world,this.body);

    }

}