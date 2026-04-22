import * as THREE from 'three';

const scene = new THREE.Scene();
const canvas = document.querySelector('#cube');
const camera = new THREE.PerspectiveCamera( 75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000 );
camera.position.z = 2;
const renderer = new THREE.WebGLRenderer({antialias: true, canvas});

const needResize = canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight;
if (needResize) {
	renderer.setSize( canvas.clientWidth, canvas.clientHeight, false );
}
renderer.setAnimationLoop( animate );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

function animate( time ) {
	cube.rotation.x = time / 2000;
	cube.rotation.y = time / 1000;
	renderer.render( scene, camera );
}
