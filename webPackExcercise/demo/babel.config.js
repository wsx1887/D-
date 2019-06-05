module.exports = function (api) {
	api.cache(true);

	const presets = [
		[
			"@babel/env", {
				targets: {
					edge: "17",
					firefox: "60",
					chrome: "67",
					safari: "11.1",
					ie: "9"
				},
				useBuiltIns: "usage"
			}
		]
	];
	const plugins = [
		[
			"@babel/plugin-transform-runtime", {
				"absoluteRuntime": false,
				"corejs": false,
				"helpers": true,
				"regenerator": true,
				"useESModules": false
			}
		]
	];

	return {
		presets,
		plugins
	};
}
