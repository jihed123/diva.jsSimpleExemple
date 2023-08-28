const starttime = performance.now();

let diva = new Diva("diva-wrapper", {
	objectData: "https://www.e-rara.ch/i3f/v20/6069569/manifest",
	// "https://edsilv.github.io/test-manifests/download-service-enabled.json",
	enableGotoPage: false,
});

waitforcondition = () => {
	if (diva.getSettings().loaded) {
		const endTime = performance.now();
		const loadTime = endTime - starttime;
		console.log(`Data loaded in ${loadTime} milliseconds`);
	} else {
		setTimeout(waitforcondition, 9);
	}
};
waitforcondition();
//4640 ms
