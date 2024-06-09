import './style.css';
import * as THREE from 'three';
import gsap from 'gsap';

// Scene
const scene = new THREE.Scene();

// Mesh
const geomtery = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 'purple'});
const mesh = new THREE.Mesh(geomtery, material);

scene.add(mesh);

// Camera
const aspect = {
	width: window.innerWidth,
	height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 3;

scene.add(camera);

// Renderer
const canvas = document.querySelector('.draw');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(aspect.width, aspect.height);

// Clock Class
const clock = new THREE.Clock();

const animate = () => {
	// GetElapsedTime
	const elapsedTime = clock.getElapsedTime();

	// Mesh Rotation Y
	mesh.rotation.y = elapsedTime * 0.25;

	// Renderer
	renderer.render(scene, camera);

	// RequestAnimationFrame
	window.requestAnimationFrame(animate);
};

// GSAP
gsap.to(mesh.position, {duration: 1, delay: 1, x: 1});
gsap.to(mesh.position, {duration: 1, delay: 2, x: -1});

animate();
