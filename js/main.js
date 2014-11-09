var camera;
var scene;
var renderer;

 
init();
animate();
 
function init() {
 
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000);
 
    
    /* -------- LUZ ------------- */
    var sol = new THREE.DirectionalLight( 0xffffff , 1.5);
    sol.position.set( -10, 5, 0 ).normalize();
    scene.add(sol);
 
    /* ---------- GEOMETRIA --------------*/
    var geoTierra = new THREE.SphereGeometry( 10, 64, 64);
    var txTierra = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/earth.jpg') } );
 
    meshTierra = new THREE.Mesh( geoTierra, txTierra );
    meshTierra.position.z = -50;
    scene.add( meshTierra );
 
    
    /* ------ RENDER --------- */
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
 
    window.addEventListener( 'resize', onWindowResize, false );
 
    render();
}
 
function animate() {

    meshTierra.rotation.y += .01;
 
    render();
    requestAnimationFrame( animate );
}
 
function render() {
    renderer.render( scene, camera );
}
 
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    render();
}