class Fruit{
    constructor(src, canvas, x=10, y=10){
        this.x = x;
        this.y = y;
        this.canvas = canvas;
        this.name = "Orange";
        this.img = new Image();
        this.img.onload = () => {
            this.pret = true;
            this.dessineMonFruit();
            console.log("This > "+this.name, "Parent >"+parent);
        };
        this.img.src = src;
    }

    dessineMonFruit(){
        this.canvas.contexte.drawImage(this.img, this.x, this.y);
    }

    deplacement(e){
        console.log(e.keyCode);
        this.canvas.contexte.clearRect(0, 0, this.canvas.l, this.canvas.h);
        switch(e.keyCode){
            case 38:
            case 90: // Haut
                this.y -= 10;
            break;
            case 39:
            case 68: // Droit 
                this.x += 10;
            break;
            case 37:
            case 81: // Gauche
                this.x -= 10;
            break;
            case 40:
            case 83: // Bas
                this.y += 10;
            break;
        };
        this.dessineMonFruit();
    }
}