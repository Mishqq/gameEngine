import Geometry from './shapes/Geometry';
import Container from './shapes/Container';

export default class Render {
	constructor(ctx){
		this.ctx = ctx;

		this._renderingScene = undefined;
	}


	/**
	 *
	 * @param scene
	 */
	start = scene => {
		this._renderingScene = scene;

		this.rendering = true;

		this.animation();
	};


	/**
	 *
	 * @param scene
	 */
	setRenderingScene( scene ){
		this._renderingScene = scene;
	}


	/**
	 *
	 * @returns {undefined|*}
	 */
	getRenderingScene(){
		return this._renderingScene;
	}


	/**
	 *
	 */
	stop = () => {
		this.rendering = false;
	};


	/**
	 *
	 * @param scene
	 */
	renderScene = scene => {

		this.renderObject( scene );

	};


	/**
	 *
	 */
	animation = () => {
		this.ctx.clearRect(0, 0, 500, 500);

		this.renderScene( this._renderingScene );

 	    if(this.rendering) this.timeoutId = requestAnimationFrame( () => this.animation() );
	};


	/**
	 * Функция рендера, которая определяет какой метод рендера вызывать
	 * @param rObj
	 */
	renderObject = rObj => {

		if( rObj instanceof Geometry ){

			this.renderGeometry( rObj );

		}

		rObj.children.forEach( child => this.renderObject( child ) );

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

		rGeometry.shape.forEach( ctxCommand => {
			let {pathCommand, args, type} = ctxCommand;

			switch( type ) {
				case ('function'):
					ctx[ pathCommand ].apply(ctx, args);
					break;
				case ('setter'):
					ctx[ pathCommand ] = args[0];
					break;
				default:
			}
		});

		if(rGeometry._checkPath){
			let result = ctx.isPointInPath( rGeometry._eventCoordinates.x, rGeometry._eventCoordinates.y );
			if(result) rGeometry.emit('click', {});
			rGeometry._checkPath = false;
		}

		ctx.restore();

	};
}
