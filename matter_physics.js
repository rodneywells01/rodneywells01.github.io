$(document).ready(function() {
	// // Matter.js module aliases
	// var Engine = Matter.Engine,
	//     World = Matter.World,
	//     Bodies = Matter.Bodies;

	// //  I want floating objects. 
	// World.gravity.y = 0;


	// // create a Matter.js engine
	// var engine = Engine.create(document.body);

	// // create two boxes and a ground
	// var boxA = Bodies.rectangle(400, 200, 80, 80);
	// var boxB = Bodies.rectangle(450, 50, 80, 80);
	// var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

	// // add all of the bodies to the world
	// World.add(engine.world, [boxA, boxB, ground]);

	// // run the engine
	// Engine.run(engine);

	   
//     var _isBrowser = typeof window !== 'undefined' && window.location,
//     Matter = _isBrowser ? window.Matter : require('../../build/matter-dev.js');

// var Example = {};
// Matter.Example = Example;
// var canvas = $(Matter.Render.canvas);
// canvas.css("width", "100%");
// canvas.css("height", "100%");


// (function() {

//     var World = Matter.World,
//         Bodies = Matter.Bodies, 
//         Engine = Matter.Engine, 
//         canvas = $("#skillcanvas");   
        
//     var engine = Engine.create(document.body),
//         world = engine.world;
//     	world.gravity.y = .1;
    
//     World.add(world, [
//         Bodies.rectangle(200, 100, 80, 60, {isStatic: true }),
//         Bodies.rectangle(400, 100, 60, 60),
//         Bodies.rectangle(600, 100, 60, 60),
//         Bodies.rectangle(400, 610, 810, 60, { isStatic: true }) // Ground
//     ]);

//     var renderOptions = engine.render.options;
//     renderOptions.showAngleIndicator = false;
//     renderOptions.showVelocity = true;    

//     	Engine.run(engine);

    
// })();

// Matter.js module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Common = Matter.Common,
    Constraint = Matter.Constraint,
    Composites = Matter.Composites,
    MouseConstraint = Matter.MouseConstraint,
    canvas = document.getElementById('skillcanvas');

var width = 700,
	height = 500;

canvas.width = width;
canvas.height = height;

// create a Matter.js engine
var engine = Engine.create({
  render: {
  	// element: document.body,
  	canvas: canvas,
    options: {
      wireframes: false,
      showAngleIndicator: false,
      width: width,
      height: height
    }
  }
});

// gravity init
engine.world.gravity.x = 0;
engine.world.gravity.y = 1;

//add a mouse-controlled constraint
// var mouseConstraint = MouseConstraint.create(engine);
// World.add(engine.world, mouseConstraint);

// create a load of circle bodies
// var stack = Composites.stack(250, 5, 12, 20, 0, 0, function(x, y, column, row) {
//   return Bodies.circle(x, y, Common.random(5, 15), { friction: .001, restitution: .1, density: 5.5 });
// });

var xScale = .2;
var yScale = .2;
var circles = [
	Bodies.circle(100, 100, 50, { render: { sprite: { texture: 'skills/gears.png', xScale: xScale, yScale: yScale }}}),
	Bodies.circle(100, 200, 50, { render: { sprite: { texture: 'skills/gears.png', xScale: xScale, yScale: yScale }}}),
	Bodies.circle(100, 300, 50, { render: { sprite: { texture: 'skills/gears.png', xScale: xScale, yScale: yScale }}}),
	Bodies.circle(100, 400, 50, { render: { sprite: { texture: 'skills/gears.png', xScale: xScale, yScale: yScale }}}),
	Bodies.circle(100, 500, 50, { render: { sprite: { texture: 'skills/gears.png', xScale: xScale, yScale: yScale }}}),
	Bodies.circle(100, 600, 50, { render: { sprite: { texture: 'skills/gears.png', xScale: xScale, yScale: yScale }}}),
];

// add boundaries
var offset = 5;
World.add(engine.world, [
  Bodies.rectangle(width / 2, -offset, 800 + 2 * offset, 50, { isStatic: true }),
  Bodies.rectangle(width / 2, 500 + offset, 800 + 2 * offset, 50, { isStatic: true }),
  Bodies.rectangle(width, 300, 50, 600 + 2 * offset, { isStatic: true }),
  Bodies.rectangle(0, 300, 50, 600 + 2 * offset, { isStatic: true })
]);


// World.add(engine.world, [
//   Bodies.rectangle(400, -offset, 800 + 2 * offset, 50, { isStatic: true }),
//   Bodies.rectangle(400, 500 + offset, 800 + 2 * offset, 50, { isStatic: true }),
//   Bodies.rectangle(800 + offset, 300, 50, 600 + 2 * offset, { isStatic: true }),
//   Bodies.rectangle(-offset, 300, 50, 600 + 2 * offset, { isStatic: true })
// ]);

// add all of the bodies to the world
World.add(engine.world, circles);

// run the engine
Engine.run(engine);
});