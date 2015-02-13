var triangular = function(sideA, sideB, sideC){
	if(sideA === sideB && sideA === sideC){
		return "equilateral";
	} else if((sideA === sideB && sideA !== sideC) || (sideA === sideC && sideA !== sideB) || (sideB === sideC && sideB !== sideA) ) {
		return "isoscoles";
	} else if(sideA !== sideB && sideA !== sideC && sideB !== sideC){
		return "scalene";
	}
};