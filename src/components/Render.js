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


	renderObject = rObj => {

		if( rObj instanceof Geometry ){

			this.renderGeometry( rObj );

		}

	};


	renderGeometry = rGeometry => {

		let {ctx} = this;

		ctx.save();

        ctx.fillStyle = rGeometry.fillRect[4] || rGeometry.fillStyle;
        ctx.globalAlpha = rGeometry.alpha;
        ctx.translate(rGeometry.x, rGeometry.y);
        if(rGeometry.rotate) ctx.rotate((Math.PI/180) * rGeometry.rotate);
        ctx.fillRect( -rGeometry.x/2, -rGeometry.y/2, rGeometry.fillRect[2], rGeometry.fillRect[3] );
        ctx.fillStyle = rGeometry.strokeRect[4] || rGeometry.fillStyle;
        ctx.strokeRect( -rGeometry.x/2, -rGeometry.y/2, rGeometry.strokeRect[2], rGeometry.strokeRect[3] );

		// ctx.fillStyle = rGeometry.fill;
		// ctx.globalAlpha = 0.5;
		// ctx.translate(rGeometry.x, rGeometry.y);
		// ctx.rotate((Math.PI/180) * rGeometry.angle);
		// ctx.scale(rGeometry.scale, rGeometry.scale);
		// ctx.fillRect(-rGeometry.w/2, -rGeometry.h/2, rGeometry.w, rGeometry.h);
        //
		// // border
		// ctx.fillStyle = rGeometry.border;
		// ctx.strokeRect(-rGeometry.w/2, -rGeometry.h/2, rGeometry.w, rGeometry.h);
        //
		// rGeometry.angle += rGeometry.angleSpeed;
        //
		// if(rGeometry.scale >= 2) rGeometry.scaleSpeed = -rGeometry.scaleSpeed;
		// if(rGeometry.scale <= 0.5) rGeometry.scaleSpeed = Math.abs(rGeometry.scaleSpeed);
		// rGeometry.scale += rGeometry.scaleSpeed;

		ctx.restore();

	}
}
