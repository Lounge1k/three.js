let rating;

//get this value from html
//<------NUMBER-------->
let numberFromBlock = '8.5';
//<------NUMBER-------->

//Scene
let scene = new THREE.Scene();

//Camera
let camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, .1, 1000);
camera.position.set(0,0,30);
camera.up = new THREE.Vector3(0,0,-2);
camera.lookAt(new THREE.Vector3(0,0,-2));

//Render
let renderer = new THREE.WebGLRenderer({alpha: true});

//render transparent scene
renderer.setClearColor( 0x000000, 0 );

//apply renderer to html
//PLACE NAME OF A BLOCK HERE
//<-------------------------->
document.querySelector("#canvas").appendChild( renderer.domElement );
//<-------------------------->


//Used material
let material = new THREE.MeshPhongMaterial( { color: 0xff1488  } );


//Light
let light = new THREE.DirectionalLight( 0xffffff, 1 );
light.position.set( -5, 5, 10 );

//Loading font and rendering scene
let height = 3,
    size = 15,
    curveSegments = 12,
    font = undefined;

let loader = new THREE.FontLoader();
loader.load( './src/font.json', function ( font ) {
    let geo_font = new THREE.TextGeometry( numberFromBlock, {
        font: font,
        size: size,
        height: height,
        curveSegments:curveSegments,
        weight: "normal"
    } );
    geo_font.center();
    rating = new THREE.Mesh( geo_font, material );
    rating.scale.x = 0.7;
    scene.lookAt(camera.position);
    scene.add( camera );
    scene.add( light );
    scene.add( rating );

    animate();
} );

//Rotate animation
const animate = function () {
    requestAnimationFrame( animate );
    rating.rotation.y += 0.03;
    renderer.render( scene, camera );
};