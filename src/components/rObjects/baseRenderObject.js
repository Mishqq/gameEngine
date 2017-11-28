export default class baseRenderObject {
    constructor(){
        this.rotate = 0;

        this.children = [];
    }


    addChild = (object, position) => {
        object.parent = this;

	    position ? this.children.splice( position, 0, object ) : this.children.push( object );
    };

    removeChild = object => {
      this.children = this.children.filter( child => object !== child );
    };


    get x(){
        return this._x;
    }
    set x( value ){
        this._x = value;
    }


    get y(){
        return this._y;
    }
    set y( value ){
        this._y = value;
    }


    get position(){
        return {x: this._x, y: this._y}
    }
    set position( pos ){
        this._x = pos.x;
        this._y = pos.y;
    }


    get anchor(){
        return this._anchor;
    }
    set anchor( value ){
        this._anchor = value;
    }


    get rotate(){
        return +this._rotate.toFixed(4);
    }
    set rotate( value ){
        this._rotate = value;
    }


    get scale(){
        return this._scale;
    }
    set scale( value ){
        this._scale = value;
    }


    get alpha(){
        return this._alpha;
    }
    set alpha( value ){
        this._alpha = value;
    }
}
