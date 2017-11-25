import Square from './rObjects/Square';

export default class Render{
	constructor(ctx){
		this.ctx = ctx;
	}

	start = rObjects => {
		this.process = true;
		this.rObjects = rObjects;

		this.animation();
	};


	stop = () => {
		this.process = false;
	};


	animation = () => {
		this.ctx.clearRect(0, 0, 500, 500);
		this.rObjects.forEach( obj => {

			this.renderObject( obj );

		});

 	    this.timeoutId = requestAnimationFrame( () => this.animation() );
	};


	renderObject = rObj => {

		if( rObj instanceof Square ){

			this.renderSquare( rObj );

		}

	};


	renderSquare = rSquare => {

		let {ctx} = this;

		ctx.save();

		ctx.fillStyle = rSquare.fill;
		ctx.globalAlpha = 0.5;
		ctx.translate(rSquare.x, rSquare.y);
		ctx.rotate((Math.PI/180) * rSquare.angle);
		ctx.scale(rSquare.scale, rSquare.scale);
		ctx.fillRect(-rSquare.w/2, -rSquare.h/2, rSquare.w, rSquare.h);

		// border
		ctx.fillStyle = rSquare.border;
		ctx.strokeRect(-rSquare.w/2, -rSquare.h/2, rSquare.w, rSquare.h);

		rSquare.angle += rSquare.angleSpeed;

		if(rSquare.scale >= 2) rSquare.scaleSpeed = -rSquare.scaleSpeed;
		if(rSquare.scale <= 0.5) rSquare.scaleSpeed = Math.abs(rSquare.scaleSpeed);
		rSquare.scale += rSquare.scaleSpeed;

		ctx.restore();

	}
}
