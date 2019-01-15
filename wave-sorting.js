// Using the JavaScript language, have the function WaveSorting(arr) take the array of positive integers stored in arr and return the string true if the numbers can be arranged in a wave pattern: a1 > a2 < a3 > a4 < a5 > ...

// Input: [0, 1, 2, 4, 1, 1, 1]

// Output:"false"




function testWave(arr) {
	
	for (var i = 0; i < arr.length; i += 1 ) {
		var even = i % 2 === 0;

		if (arr[i + 1] && even) {
			console.log('hi')
			if (arr[i + 1] >= arr[i]) {
				return false;
			}
		}

		else if (arr[i + 1] && !even) {
			console.log('hello')
			if (arr[i + 1] <= arr[i]) {
				return false;
			}
		}
	}
	return true;
}
console.log(testWave([0, 1, 2, 4, 1, 1, 1]));
console.log(testWave([2, 0, 4, 1, 4, 1]));
