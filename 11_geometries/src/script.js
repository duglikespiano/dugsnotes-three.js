import './style.css';
import * as THREE from 'three';
import { MapControls, OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//Scene
const scene = new THREE.Scene();

//Resizing
window.addEventListener('resize', () => {
	//Update Size
	aspect.width = window.innerWidth;
	aspect.height = window.innerHeight;

	//New Aspect Ratio
	camera.aspect = aspect.width / aspect.height;
	camera.updateProjectionMatrix();

	//New RendererSize
	renderer.setSize(aspect.width, aspect.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//Mesh
const geometry = new THREE.PlaneGeometry(1, 1, 1);
// const geometry = new THREE.BufferGeometry();
// const verticesArray = new Float32Array([0, 0, 0, 0, 1, 0, 1, 0, 0]);
// const positionsAttribute = new THREE.BufferAttribute(verticesArray, 3);
// geometry.setAttribute('position', positionsAttribute);

const material = new THREE.MeshBasicMaterial({ color: 'purple', wireframe: true });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Camera
const aspect = {
	width: window.innerWidth,
	height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.set(2, 2, 2);
camera.lookAt(mesh.position);
scene.add(camera);

//Renderer
const canvas = document.querySelector('.draw');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);

//OrbitControls
const orbitControls = new OrbitControls(camera, canvas);
orbitControls.enableDamping = true;

//Clock Class
const clock = new THREE.Clock();

const animate = () => {
	//GetElapsedTime
	const elapsedTime = clock.getElapsedTime();

	//Update Controls
	orbitControls.update();

	//Renderer
	renderer.render(scene, camera);

	//RequestAnimationFrame
	window.requestAnimationFrame(animate);
};
animate();
