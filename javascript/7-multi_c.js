const { argv } = require("process");

if (argv.length == 3) {

	//console.log(argv[2]);

	for (let i = 0; i < argv[2]; i++) {
		console.log("C is fun");
	}
	// while (i < argv[2]) {
	// 	console.log("C is fun");
	// 	i++;
	// }

} else {
	console.log("Missing number of occurrences");
}
