function Firework() {

    this.hu = random(255);
    this.firework = new Particle(random(width), height, this.hu, true);
    this.hasExploded = false;
    this.sparks = [];


    this.update = function() {
        if(!this.hasExploded) {
            this.firework.applyForce(gravity);
            this.firework.update();
            
            //Explodes
            if(this.firework.vel.y >= 0) {
                this.hasExploded = true;
                this.explode();
            }
        }

        for(var i = this.sparks.length-1; i > 0; i--){
            this.sparks[i].applyForce(gravity);
            this.sparks[i].update();
            if(this.sparks[i].done()) {
                this.sparks.splice(i,1);
            }
        }
    }


    this.done = function() {
        if (this.hasExploded && this.sparks.length === 0 ){
            return true;
        } else {
            return false;
        }
    }

    this.explode = function() {
        for(var i = 0; i < 100; i++) {
            this.sparks.push(new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false));
        }
    }

    this.show = function() {
        if(!this.hasExploded){
            this.firework.show();
        }

        for(var i = this.sparks.length-1; i > 0; i--){
            this.sparks[i].show();
        }
    }
}
