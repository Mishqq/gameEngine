import baseRenderObject from './baseRenderObject';

const context2DcommandTypes = {
	beginPath: 'function',
	moveTo: 'function',
	lineTo: 'function',
	arc: 'function',
	arcTo: 'function',
	quadraticCurveTo: 'function',
	bezierCurveTo: 'function',
	rect: 'function',
	fill: 'function',
	stroke: 'function',
	closePath: 'function',
	fillStyle: 'setter',
	strokeStyle: 'setter',
};

export default class Geometry extends baseRenderObject {
	constructor(){
		super();

		this._shape = [];

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


	beginPath = () => {
		this._shape.push({pathCommand: 'beginPath', type: context2DcommandTypes['beginPath']});
		return this;
	};

	moveTo = (...args) => {
		this._shape.push({pathCommand: 'moveTo', args, type: context2DcommandTypes['moveTo']});
		return this;
	};

	lineTo = (...args) => {
		this._shape.push({pathCommand: 'lineTo', args, type: context2DcommandTypes['lineTo']});
		return this;
	};

	arc = (...args) => {
		this._shape.push({pathCommand: 'arc', args, type: context2DcommandTypes['arc']});
		return this;
	};

	arcTo = (...args) => {
		this._shape.push({pathCommand: 'arcTo', args, type: context2DcommandTypes['arcTo']});
		return this;
	};

	quadraticCurveTo = (...args) => {
		this._shape.push({pathCommand: 'quadraticCurveTo', args, type: context2DcommandTypes['quadraticCurveTo']});
		return this;
	};

	bezierCurveTo = (...args) => {
		this._shape.push({pathCommand: 'bezierCurveTo', args, type: context2DcommandTypes['bezierCurveTo']});
		return this;
	};

	rect = (...args) => {
		this._shape.push({pathCommand: 'rect', args, type: context2DcommandTypes['rect']});
		return this;
	};

	fill = () => {
		this._shape.push({pathCommand: 'fill', type: context2DcommandTypes['fill']});
		return this;
	};

	fillStyle = (...args) => {
		this._shape.push({pathCommand: 'fillStyle', args, type: context2DcommandTypes['fillStyle']});
		return this;
	};

	strokeStyle = (...args) => {
		this._shape.push({pathCommand: 'strokeStyle', args, type: context2DcommandTypes['strokeStyle']});
		return this;
	};

	stroke = () => {
		this._shape.push({pathCommand: 'stroke', type: context2DcommandTypes['stroke']});
		return this;
	};

	closePath = () => {
		this._shape.push({pathCommand: 'closePath', type: context2DcommandTypes['closePath']});
		return this;
	};



	drawRect = (...args) => {
		this.beginPath();
		this.rect.apply(this, args);
		this.fill();
		this.closePath();
	};


	isPointInPath(x, y){
		this._checkPath = true;
		this._eventCoordinates = {x, y};
	};

	setRotationPoint( value ){
		this.rotationPoint = value;

		return this;
	}









	// /**
	//  * Задаёт цвет
     // * @returns {*}
     // */
	// fillStyle( value ){
     //    this.shape.push({type: 'fillStyle', value: value});
	//
	// 	return this;
	// }
	//
	//
	// /**
	//  * Задаёт цвет контура
     // * @returns {*}
     // */
	// strokeStyle( value ){
     //    this.shape.push({type: 'strokeStyle', value: value});
	//
	// 	return this;
	// }
	//
	//
	// /**
     // * Метод рисует прямоугольный залитый квадрат
     // * @returns {*}
     // */
	// fillRect( value ){
     //    this.shape.push({type: 'fillRect', value: value});
	//
     //    return this;
	// }
	//
	//
	// /**
	//  * Метод рисует прямоугольный квадрат-рамку
     // * @returns {*}
     // */
	// strokeRect( value ){
     //    this.shape.push({type: 'strokeRect', value: value});
	//
     //    return this;
	// }
	//
	//
	// setRotationPoint( value ){
	// 	this.rotationPoint = value;
	//
	// 	return this;
	// }
	//
	//
	// isPointInPath(x, y){
	// 	this._checkPath = true;
	// 	this._eventCoordinates = {x, y};
	// }
}
