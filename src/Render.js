import Geometry from './shapes/Geometry';
import Container from './shapes/Container';
import EventEmitter from "./utils/EventEmitter";

export default class Render extends EventEmitter {
	constructor(ctx){
		super();

		this.ctx = ctx;

		this._renderingScene = undefined;
	}


	get eventPos(){
		return this._eventPos;
	}
	set eventPos( value ){
		this._eventPos = value;
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
		this._eventedObjects = [];

		this.renderObject( scene );

		if(this._eventedObjects.length) this.emit('click', {data: this._eventedObjects});
		this._eventedObjects.length = 0;
		this.eventPos = null;

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
		let {ctx} = this;

		if( rObj instanceof Geometry ){

			this.renderGeometry( rObj );

		}

		rObj.children.forEach( child => {
			this.renderObject( child );
		});

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

		if(this.eventPos && ctx.isPointInPath( this.eventPos.x, this.eventPos.y )){
			this._eventedObjects.push( rGeometry );
		}

		ctx.restore();
	};
}
