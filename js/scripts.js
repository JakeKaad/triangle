
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
	var pointA = (20).toString() + ", " + (0).toString() + " "
	var pointB = (a + 20).toString() + ", " + (0) + " ";
	var cPoints = intersection(0, 0, c, a, 0, b)
	var pointC = (cPoints[0]).toString() + ", " + (cPoints[2]) + " ";
	return "<svg height='2000' width='2000' class='triangle_bit'><polygon points='" + pointA + pointB + pointC + "' style='fill:lime;stroke:purple;stroke-width:1'/></svg>";
}


var revealResults = function(){
	$(".results").toggle(function(){
		$(this).fadeIn("fast");
	});
};


function intersection(x0, y0, r0, x1, y1, r1) {
    var a, dx, dy, d, h, rx, ry;
    var x2, y2;

    /* dx and dy are the vertical and horizontal distances between
     * the circle centers.
     */
    dx = x1 - x0;
    dy = y1 - y0;

    /* Determine the straight-line distance between the centers. */
    d = Math.sqrt((dy*dy) + (dx*dx));

    /* Check for solvability. */
    if (d > (r0 + r1)) {
        /* no solution. circles do not intersect. */
        return false;
    }
    if (d < Math.abs(r0 - r1)) {
        /* no solution. one circle is contained in the other */
        return false;
    }

    /* 'point 2' is the point where the line through the circle
     * intersection points crosses the line between the circle
     * centers.
     */

    /* Determine the distance from point 0 to point 2. */
    a = ((r0*r0) - (r1*r1) + (d*d)) / (2.0 * d) ;

    /* Determine the coordinates of point 2. */
    x2 = x0 + (dx * a/d);
    y2 = y0 + (dy * a/d);

    /* Determine the distance from point 2 to either of the
     * intersection points.
     */
    h = Math.sqrt((r0*r0) - (a*a));

    /* Now determine the offsets of the intersection points from
     * point 2.
     */
    rx = -dy * (h/d);
    ry = dx * (h/d);

    /* Determine the absolute intersection points. */
    var xi = x2 + rx;
    var xi_prime = x2 - rx;
    var yi = y2 + ry;
    var yi_prime = y2 - ry;

    return [xi, xi_prime, yi, yi_prime];
};
