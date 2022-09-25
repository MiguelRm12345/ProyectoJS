//escenario
let scene;

function init(){
  const scene = new THREE.Scene();
  var loader = new THREE.TextureLoader();

  loader.load("../img/pipi3.png", function(texture){
    scene.background = texture;
  });


  //camara
  const camera = new THREE.PerspectiveCamera( 75, 
  window.innerWidth / window.innerHeight, 0.1, 1000 );

  //render
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  const luz = new THREE.DirectionalLight(0xffffff, 6);
  luz.position.set(4, 8, 4);
  scene.add(luz)

  //3D

  const loader2 = new THREE.GLTFLoader();
  loader2.load("../3D1/mano/scene2.gltf", function(gltf){
    car = gltf.scene.children[0];
    car.scale.set(0.12, 0.12, 0.12);
    scene.add(gltf.scene);
    car.position.y = -15;
    car.rotation.z = 1.3;
    renderer.render(scene, camera);
  })

  const loader3 = new THREE.GLTFLoader();
  loader3.load("../3D1/soldado/soldado.gltf", function(gltf){
    car2 = gltf.scene.children[0];
    car2.scale.set(13, 13, 13);
    scene.add(gltf.scene);
    car2.position.x = -30;
    car2.position.y = -15;
    car2.rotation.z = 13;
    renderer.render(scene, camera);
  }) 

  const loader4 = new THREE.GLTFLoader();
  loader4.load("../3D1/Zorro/Pan.gltf", function(gltf){
    car3 = gltf.scene.children[0];
    car3.scale.set(13, 13, 13);
    scene.add(gltf.scene);
    car3.position.x = 30;
    car3.position.y = -20;
    car3.rotation.z = 13;
    renderer.render(scene, camera);
  }) 

  //Controles

  var control = new THREE.OrbitControls( camera, renderer.domElement );

  camera.position.z = 30

  function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

  }

animate();

}

init();
