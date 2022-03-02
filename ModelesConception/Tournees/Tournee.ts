export class Tournee{
    signal:CustomEvent;

    constructor(){

    }

    setSignal(){
        this.signal = new CustomEvent('CHANGE_TOURNEE', {detail:{lattitude:0.34994399, longitude:1.940093994994}});
    }

}