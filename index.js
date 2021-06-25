var john = {
	car: 'volvo',
	married: false,
	kids: 3,
	// occupation: teacher
}
console.log(john);

for (let elem in john) {
	if (john.indexOf(elem) !== car) {
		console.log('false')
	} else {
		console.log('true');
	}
}
