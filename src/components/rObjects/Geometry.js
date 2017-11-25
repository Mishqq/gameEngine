import baseRenderObject from './baseRenderObject';

export default class Geometry extends baseRenderObject{
	constructor(){
		super();

	}


	get fillStyle(){
        return this._fillStyle;
	}
	set fillStyle( value ){
		this._fillStyle = value;
	}


	get fillRect(){
        return this._fillRect;
	}
	set fillRect( value ){
		this._fillRect = value;
	}


	get strokeRect(){
        return this._strokeRect;
	}
	set strokeRect( value ){
		this._strokeRect = value;
	}

}
