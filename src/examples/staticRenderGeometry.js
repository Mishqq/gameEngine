import Geometry from '../components/shapes/Geometry';

let squares = [];
let colors = ['#7696E1', '#A0D4E1', '#77E1C3', '#E8B092', '#E88C94', '#E89EC9'];

for( let i=0; i<6; i+=1 ){
	let _sq = new Geometry();

	_sq.id = i;
	_sq.fillStyle( colors[i] );
	_sq.position = {x: 50 + 50*i, y: 50 + 50*(i%3)};
	_sq.alpha = 0.9;
	_sq.drawRect( 0, 0, 100, 100 );

	squares.push( _sq );
}

squares[0].addChild( squares[1].addChild( squares[2] ) );
squares[3].addChild( squares[4].addChild( squares[5] ) );

let g1 = squares[0],
	g2 = squares[3];

squares[0].interactive = true;
squares[2].interactive = true;
squares[4].interactive = true;
squares[5].interactive = true;

squares[0].on('click', event => console.log('⇒ event', event));
squares[2].on('click', event => console.log('⇒ event', event));

export {g1, g2};
