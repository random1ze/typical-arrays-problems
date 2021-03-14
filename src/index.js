exports.min = function min(array) {
	if (Array.isArray(array) && array.length) {
		return Math.min.apply(this, array);
	}
	return 0;
};

exports.max = function max(array) {
	if (Array.isArray(array) && array.length) {
		return Math.max.apply(this, array);
	}
	return 0
};

exports.avg = function avg(array) {
	if (Array.isArray(array) && array.length) {
		let avgOfArray = 0;
		let sumOfArray = 0;
		for (let i = 0; i < array.length; i++) {
			sumOfArray += array[i];
		}
		avgOfArray = sumOfArray/array.length;
		return avgOfArray;
	}
	return 0;
};
