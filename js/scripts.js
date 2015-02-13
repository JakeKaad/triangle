var triangular = function(sideA, sideB, sideC){
	if ( isATriangle(sideA, sideB, sideC) ){
		if(allSidesEqual(sideA, sideB, sideC)){
			return "equilateral";
		} else if(twoSidesEqual(sideA, sideB, sideC)) {
			return "isoscoles";
		} else if(noSidesEqual(sideA, sideB, sideC)) {
			return "scalene";
		}
	} else {
		return "not a triangle"
	}
};

var isATriangle = function(sideA, sideB, sideC) {
	return ((sideA + sideB) > sideC) && ((sideA + sideC) > sideB) & ((sideB + sideC) > sideC);
};

var allSidesEqual = function(sideA, sideB, sideC) {
	return ((sideA === sideB) && (sideA === sideC));
};

var twoSidesEqual = function(sideA, sideB, sideC) {
	return ((sideA === sideB && sideA !== sideC) || 
					(sideA === sideC && sideA !== sideB) || 
					(sideB === sideC && sideB !== sideA));
};

var noSidesEqual = function(sideA, sideB, sideC) {
	return (sideA !== sideB && sideA !== sideC && sideB !== sideC);
};