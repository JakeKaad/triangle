
var triangular = function(sideA, sideB, sideC){
	if ( isATriangle(sideA, sideB, sideC) ){
		return triangleType(sideA, sideB, sideC);
	} else {
		// this is actually when it isn't a triangle, the string is work well with existing markup
		return "a triangle"
	}
};

// All triangle verification methods were refactored out of triangular using green specs. 

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

var triangleType = function(sideA, sideB, sideC) {
	if(allSidesEqual(sideA, sideB, sideC)){
			return "an equilateral triangle";
		} else if(twoSidesEqual(sideA, sideB, sideC)) {
			return "an isoscoles triangle";
		} else if(noSidesEqual(sideA, sideB, sideC)) {
			return "a scalene triangle";
		}
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
		} else {
			var triangleHtml = createTriangleHtml(sideA, sideB, sideC)
			$("#triangle_polygon").append(triangleHtml);
		}

		revealResults();
		
		event.preventDefault();
	});
});

// jQuery functions 

var resetResults = function(){
	$(".results").hide();
	$("#dont").text("");
	$("#triangle_type").text("");
	$(".triangle_bit").remove();
};

var createTriangleHtml = function(a, b, c) {
	var pointA = (a).toString() + ", " + (0).toString() + " "
	var pointB = (b * 20).toString() + ", " + (0) + " ";
	var pointC = (c * 10).toString() + ", " + (c * 10) + " ";
	return "<svg height='2000' width='2000' class='triangle_bit'><polygon points='" + pointA + pointB + pointC + "' style='fill:lime;stroke:purple;stroke-width:1' /></svg>";
}


var revealResults = function(){
	$(".results").toggle(function(){
		$(this).fadeIn("fast");
	});
};








