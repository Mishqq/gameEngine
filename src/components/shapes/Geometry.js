import baseRenderObject from './baseRenderObject';

export default class Geometry extends baseRenderObject {
	constructor(){
		super();

		this._shape = [];

	}


	startShape(){
        this._shape.length = 0;

        return this;
	}

	get shape(){
		return this._shape;
	}


	get interactive(){
		return this._interactive;
	}
	set interactive( value ){
		this._interactive = value;
	}


    /**
	 * Задаёт цвет
     * @returns {*}
     */
	fillStyle( value ){
        this.shape.push({type: 'fillStyle', value: value});

		return this;
	}


	/**
	 * Задаёт цвет контура
     * @returns {*}
     */
	strokeStyle( value ){
        this.shape.push({type: 'strokeStyle', value: value});

		return this;
	}


	/**
     * Метод рисует прямоугольный залитый квадрат
     * @returns {*}
     */
	fillRect( value ){
        this.shape.push({type: 'fillRect', value: value});

        return this;
	}


    /**
	 * Метод рисует прямоугольный квадрат-рамку
     * @returns {*}
     */
	strokeRect( value ){
        this.shape.push({type: 'strokeRect', value: value});

        return this;
	}


	setRotationPoint( value ){
		this.rotationPoint = value;

		return this;
	}


	isPointInPath(x, y){
		this._checkPath = true;
		this._eventCoordinates = {x, y};
	}
}
