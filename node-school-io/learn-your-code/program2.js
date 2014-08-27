var commandline = process.argv;
var suma = 0;

for (var i = 2; i < commandline.length; i++) {
	suma += Number(commandline[i]);
};

console.log(suma);