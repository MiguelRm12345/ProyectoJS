//escenario
const scene=new THREE.Scene();
scene.background = new THREE.Color(0x0000000)



//camara
const camera = new THREE.PerspectiveCamera( 75, 
window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const points = [];
for ( let i = 0; i < 10; i ++ ) {
  points.push( new THREE.Vector2( Math.sin( i * 0.4 ) * 4 + 6, ( i - 4 ) * 2 ) );
}

const geometry = new THREE.LatheGeometry( points );

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load("../img/hola5.jpg");
const material =new THREE.MeshMatcapMaterial();

material.matcap = matcap;
material.flatShading = true;

const lathe = new THREE.Mesh( geometry, material );
scene.add( lathe );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xC642FA } ) );
scene.add( line );

camera.position.z = 20;


//Funcion
function animate() {
	requestAnimationFrame( animate );
  lathe.rotation.x += 0.02;
	lathe.rotation.y += 0.02;
	renderer.render( scene, camera );
	line.rotation.x += 0.02;
	line.rotation.y += 0.02;
}
animate();