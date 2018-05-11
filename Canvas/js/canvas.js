class Canvas{
    constructor(l, h){
        this.l = l;
        this.h = h;
        this.dessineCanvas();
    }

    // dessiner le canvas dans le dom
    dessineCanvas(){
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.l;
        this.canvas.height = this.h;
        this.contexte = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
    }
}