let scene, camera, renderer, cube;

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  // Init BoxGeometry object (rectangular cuboid)
  const geometry = new THREE.BoxGeometry(2, 2, 2);

  const texture = new THREE.TextureLoader().load("textures/crate.gif");
  const material = new THREE.MeshBasicMaterial({ map: texture });
  // Create material with color
  //const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

  // Create mesh with geo and material
  cube = new THREE.Mesh(geometry, material);
  // Add to scene
  scene.add(cube);

  camera.position.z = 5;
}

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  // Reset size
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

init();
animate();
