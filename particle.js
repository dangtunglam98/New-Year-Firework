function Particle(x,y, hu, exploded) {

    this.pos = createVector(x,y);
    this.lifespan = 255;
    this.hu = hu;
    if(exploded){
        this.vel = createVector(0,random(-10, -18));
    } else {
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(1,6))
    }
    this.acc = createVector(0,0);

    this.applyForce = function(force) {
        this.acc.add(force);
    }

    this.update = function() {
        if(!exploded) {
            this.vel.mult(0.9);
            this.lifespan-= 4;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0,0);
    }

    this.done = function() {
        if (this.lifespan < 0) {
          return true;
        } else {
          return false;
        }
    }

    this.show = function() {

        if(!this.exploded){
            strokeWeight(3);
            stroke(hu, 255, 255, this.lifespan);

        } else {
            strokeWeight(4);
            stroke(hu, 255, 255);
        }


        point(this.pos.x, this.pos.y);
    }


}