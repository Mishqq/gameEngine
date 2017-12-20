import Container from '../components/shapes/Container';
import Geometry from '../components/shapes/Geometry';

class Graph{
	constructor({pointCount, pointLinkCount, radius, range, brace}){

		this._path = new Container();

		this.init({pointCount, pointLinkCount, radius, range, brace})

	}


	static getRandomArbitrary = (min, max) =>
		Math.round( Math.random() * (max - min) + min );

	static getDistance = (pos1, pos2) =>
		Math.round( Math.sqrt( Math.pow(pos2.x - pos1.x, 2) + Math.pow(pos2.y - pos1.y, 2) ));

	static getNewPos = range => {
		let x = Graph.getRandomArbitrary(range[0], range[2]);
		let y = Graph.getRandomArbitrary(range[1], range[3]);
		return {x, y}
	};

	static checkInRadius = (arr, pos, brace) => {
		let result = false;
		arr.forEach( point => {
			if(Graph.getDistance(point, pos) < brace) result = true;
		});
		return result;
	};

	static createLine = (pos1, pos2) => {
		let line = new Geometry();
		line.alpha = 0.2;
		line.beginPath()
			.strokeStyle('#1CA0FF')
			.lineWidth(3)
			.lineCap('round')
			.lineJoin('round')
			.moveTo(pos1.x, pos1.y)
			.lineTo(pos2.x, pos2.y)
			.stroke()
			.closePath();

		return line;
	};

	static createMap = ({pointCount, range, brace}) => {

		let pointCenters = [];

		for(let i=0; i<pointCount; i+=1){

			let newPos = Graph.getNewPos( range );
			while( Graph.checkInRadius(pointCenters, newPos, brace) ){
				newPos = Graph.getNewPos( range );
			}
			pointCenters.push( newPos );

		}

		return pointCenters;
	};

	static createPoints = ( map, radius ) => {
		let points = [];

		for(let i=0; i<map.length; i+=1){
			let center = map[i];
			let point = new Geometry();

			point.fillStyle('#5B58FF');
			point.position = {x: center.x, y: center.y};
			point.beginPath().arc(0, 0, radius, 0, Math.PI * 2, true).fill().closePath();
			points.push( point );
		}

		return points;
	};

	static createLines = ( map, pointLinkCount ) => {
		let lines = [];

		for(let i=0; i<map.length; i+=1){
			let point = map[i];

			point.neib = [];
			map.forEach( item => point.neib.push( {obj: item, dist: Graph.getDistance(point, item)} ));
			point.neib.sort( (a, b) => a.dist - b.dist );
			point.neib.splice(0, 1);
			point.neib.length = pointLinkCount;

			point.neib.forEach( n => lines.push( Graph.createLine(point, n.obj)));
		}

		return lines;
	};

	shake = event => {
		let dx = 0, count = 0, marker = 'right', defX = event.targetObject.x, animate = true;

		let shakeAnimate = () => {

			if(dx < 10 && count < 5 && marker === 'right'){
				event.targetObject.x += 1;
				dx +=1;
				marker = dx === 10 ? 'left' : 'right';
				if(marker === 'left') count += 1;
			} else if(dx > -10 && count < 5 && marker === 'left') {
				event.targetObject.x -= 1;
				dx -=1;
				marker = dx === -10 ? 'right' : 'left';
				if(marker === 'right') count += 1;
			} else if( count === 5 ){
				event.targetObject.x = defX;
				dx = 0;
				animate = false;
			}

			this._lnContainer.removeChildren();
			this._lnContainer.addChildren( Graph.createLines( this._ptsContainer.children, this._initSettings.pointLinkCount ) );

			if(animate) requestAnimationFrame( shakeAnimate );
		};

		shakeAnimate();
	};

	get path(){
		return this._path;
	}


	init(settings){
		let {pointCount, pointLinkCount, range, radius, brace} = settings;
		this._initSettings = settings;

		let map = Graph.createMap({pointCount, range, radius, brace});
		this._pointsMap = map;

		this._ptsContainer = new Container();
		this._ptsContainer.addChildren( Graph.createPoints( map, radius ) );

		this._ptsContainer.children.forEach( point => point.on('click', this.shake));

		this._lnContainer = new Container();
		this._lnContainer.addChildren( Graph.createLines( map, pointLinkCount ) );

		this._path.addChildren( [this._lnContainer, this._ptsContainer] );
	}
}

export default Graph;
