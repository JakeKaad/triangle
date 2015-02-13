var triangular = function(sideA, sideB, sideC){
	if ( isATriangle(sideA, sideB, sideC) ){
		if(allSidesEqual(sideA, sideB, sideC)){
			return "an equilateral triangle";
		} else if(twoSidesEqual(sideA, sideB, sideC)) {
			return "an isoscoles triangle";
		} else if(noSidesEqual(sideA, sideB, sideC)) {
			return "a scalene triangle";
		}
	} else {
		return "a triangle"
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


// Start jQuery functions for index.html:

$(document).ready(function(){
	$("#triangle").submit(function(event){
		resetResults();

		var sideA = parseInt($("#sideA").val());
		var sideB = parseInt($("#sideB").val());
		var sideC = parseInt($("#sideC").val());
		var results = triangular(sideA, sideB, sideC);

		$("#triangle_type").text(results);
		if(results === "a triangle"){
			$("#dont").text(" don't");
		};

		revealResults();
		
		event.preventDefault();
	});
});

// jQuery functions 

var resetResults = function(){
	$(".results").hide();
	$("#dont").text("");
	$("#triangle_type").text("");
};

var revealResults = function(){
	$(".results").toggle(function(){
		$(this).fadeIn("fast");
	});
};








