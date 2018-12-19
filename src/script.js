var text = "aems",
    height = 1,
    size = 10,
    curveSegments = 12,
    font = undefined;
var cube;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 90, window.innerWidth/window.innerHeight,.1, 1000);

var renderer = new THREE.WebGLRenderer();
document.getElementById("canvas").appendChild( renderer.domElement );
var material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );

camera.position.z = 30;

var animate = function () {
    requestAnimationFrame( animate );
    cube.rotation.y += 0.05;

    renderer.render( scene, camera );
};

var loader = new THREE.FontLoader();

loader.load( './font.js', function ( font ) {
    console.log(font);
    var geo_font = new THREE.TextGeometry( '8.5', {
        font: font,
        size: size,
        height: height,
        curveSegments:curveSegments,
        weight: "normal"
    } );
    geo_font.center();
    cube = new THREE.Mesh( geo_font, material );
    scene.lookAt(camera.position);
    scene.add( cube );
    console.log(cube);

    animate();
} );