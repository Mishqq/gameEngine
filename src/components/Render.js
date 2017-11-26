import Geometry from './rObjects/Geometry';

export default class Render{
	constructor(ctx){
		this.ctx = ctx;

        this.rObjects = [];
	}

	start = () => {
		this.process = true;

		this.animation();
	};


	stop = () => {
		this.process = false;
	};


	renderObjects = objectsArr => {
        this.rObjects = objectsArr;
	};


	animation = () => {
		this.ctx.clearRect(0, 0, 500, 500);
		this.rObjects.forEach( obj => {

			this.renderObject( obj );

		});

 	    this.timeoutId = requestAnimationFrame( () => this.animation() );
	};


	/**
	 * Функция рендера, которая определяет какой метод рендера вызывать
	 * @param rObj
	 */
	renderObject = rObj => {

		if( rObj instanceof Geometry ){

			this.renderGeometry( rObj );

		}

	};


	/**
	 * Рендер свойст базового объекта. В этом методе холст не очищается
	 * @param baseObject
	 */
	renderBaseObject = baseObject => {
		let {ctx} = this;

		if(baseObject.rotate) ctx.rotate((Math.PI/180) * baseObject.rotate);
		if(baseObject.alpha) ctx.globalAlpha = baseObject.alpha;

	};


	/**
	 * Рендер геометрии
	 * @param rGeometry
	 */
	renderGeometry = rGeometry => {
		let {ctx} = this;

		ctx.save();

		if( rGeometry.rotationPoint ) {
			ctx.translate(rGeometry.rotationPoint.x, rGeometry.rotationPoint.y)
		} else if( rGeometry.position ) {
			ctx.translate(rGeometry.x, rGeometry.y);
		} else {
			rGeometry.position = {x: 0, y: 0};
			ctx.translate(0, 0)
		}

		this.renderBaseObject( rGeometry );

		rGeometry.shape.forEach( item => {

			if(item.type === 'fillStyle') ctx[ item.type ] = item.value;

			if(item.type === 'strokeStyle') ctx[ item.type ] = item.value;

			if(item.type === 'fillRect') ctx[ item.type ](
				rGeometry.rotationPoint ? rGeometry.x - rGeometry.rotationPoint.x : 0,
				rGeometry.rotationPoint ? rGeometry.y - rGeometry.rotationPoint.y : 0,
				item.value[2], item.value[3] );

			if(item.type === 'strokeRect') ctx[ item.type ](
				rGeometry.rotationPoint ? rGeometry.x - rGeometry.rotationPoint.x : 0,
				rGeometry.rotationPoint ? rGeometry.y - rGeometry.rotationPoint.y : 0,
				item.value[2], item.value[3] );

		});

		ctx.restore();

	}
}
