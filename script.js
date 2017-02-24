var arr = [5,6,3,4,1,2,9,8,7,0];

// Prime in array
var firstOut = [];
function isPrime(n) {
	if (n < 2) return false;
	for (var i = 2;i<n; i++) {
		if (n % i == 0) return false;
	}

	return true;
}
for (var v = 0;v<arr.length-1;v++) {
	if(isPrime(v)) {
		firstOut.push(v);
	}
}
document.write(firstOut+"<br>");

// Max in array
var lumosMAXima = arr[0];
function lumos() {
	for (var c = 0;c<arr.length-1;c++) {
		if (lumosMAXima < arr[c]) {
			lumosMAXima = arr[c];
		}
	}
	document.write(lumosMAXima);
}
lumos();


// Я не знаю почему оно не хочет работать, даже взятку javascript'у хотел дать.
// Так-как я торопился с выполнением задачи, не смог додумать как отсортировать массив.
var key = [9,8,7,6,5,4,3,2,1,0];
var secOut = [];
for (var t = 0;t < key.length-1;t++) {
	for (var f = 0;f<key.length-1;f++) {
		if (arr[f] == key[f]) {
			secOut.push(f);
		}
	}
}