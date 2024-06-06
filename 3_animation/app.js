import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.165.0/three.module.js';

// 1. Scene
const scene = new THREE.Scene();

// 2. Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 'purple'});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 3. Camera
const aspect = {
	width: window.innerWidth,
	height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 3;
scene.add(camera);

// 4. Renderer
const canvas = document.querySelector('#canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(aspect.width, aspect.height);

// 5. Clock
const clock = new THREE.Clock();

// 6. Animation
const animate = () => {
	const elapsedTime = clock.getElapsedTime();
	mesh.rotation.x = elapsedTime * Math.PI * 2;
	renderer.render(scene, camera);
	window.requestAnimationFrame(animate);
};
animate();
