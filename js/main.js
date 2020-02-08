class Application {
	constructor() {
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
		this.renderer = new THREE.WebGLRenderer();

		this.initialize();
	}

	initialize() {
		document.body.appendChild( this.renderer.domElement );

		this.resize();
		window.onresize = this.resize.bind(this);

		const geometry = new THREE.BoxGeometry();
		const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		this.cube = new THREE.Mesh( geometry, material );
		this.scene.add( this.cube );

		this.camera.position.z = 5;

		console.log("[Application] Initialized");
	}

	resize() {
		const w = window.innerWidth;
		const h = window.innerHeight;
		this.camera.aspect = w / h;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(w, h);
		console.log(`[Application] Window Resized (${w}x${h}).`);

	}

	render() {
		this.renderer.render( this.scene, this.camera );
		this.cube.rotation.z += 0.01;
	}

	run() {
		const app = this;
		const renderFrame = () => {
			app.render();
			requestAnimationFrame(renderFrame);
		};
		renderFrame();
	}
}


const app = new Application();
app.run();


