import * as THREE from 'three';

const scene = new THREE.Scene();
const canvas = document.querySelector('#line');
const camera = new THREE.PerspectiveCamera( 45, canvas.clientWidth / canvas.clientHeight, 1, 500 );
camera.position.z = 45;

const renderer = new THREE.WebGLRenderer({antialias: true, canvas});
const needResize = canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight;
if (needResize) {
	renderer.setSize( canvas.clientWidth, canvas.clientHeight, false );
}

const points = [];
points.push(new THREE.Vector3( -20, 0, 0 ));
points.push(new THREE.Vector3( -10, 0, 0 ));
points.push(new THREE.Vector3( 0, 10, 0 ));
points.push(new THREE.Vector3( 10, 0, 0 ));
points.push(new THREE.Vector3( 20, 10, 0 ));

const material = new THREE.LineBasicMaterial({ color: 0x00ffff });
const geometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geometry, material );

scene.add( line );
renderer.render( scene, camera );
