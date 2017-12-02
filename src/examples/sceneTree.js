export default {

	type: 'container',
	name: 'mainContainer',
	position: {x: 0, y: 0},
	children: [
		{
			type: 'geometry',
			name: 'square1',
			position: {x: 50, y: 50},
			fillStyle: '#7696E1',
			alpha: 0.9,
			path: [
				'drawRect', [0, 0, 100, 100]
			],
			children: [
				{
					type: 'geometry',
					name: 'square2',
					position: {x: 50, y: 50},
					fillStyle: '#A0D4E1',
					alpha: 0.9,
					path: [
						'drawRect', [0, 0, 100, 100]
					],
					children: [
						{
							type: 'geometry',
							name: 'square3',
							position: {x: 50, y: 50},
							fillStyle: '#77E1C3',
							alpha: 0.9,
							path: [
								'drawRect', [0, 0, 100, 100]
							],
						}
					]
				}
			]
		},
		{
			type: 'geometry',
			name: 'square4',
			position: {x: 200, y: 50},
			fillStyle: '#E89EC9',
			alpha: 0.9,
			path: [
				'drawRect', [0, 0, 100, 100]
			],
			children: [
				{
					type: 'geometry',
					name: 'square5',
					position: {x: 50, y: 50},
					fillStyle: '#E88C94',
					alpha: 0.9,
					path: [
						'drawRect', [0, 0, 100, 100]
					],
					children: [
						{
							type: 'geometry',
							name: 'square6',
							position: {x: 50, y: 50},
							fillStyle: '#E8B092',
							alpha: 0.9,
							path: [
								'drawRect', [0, 0, 100, 100]
							]
						}
					]
				}
			]
		}
	]

}
