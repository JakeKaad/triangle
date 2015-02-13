describe("triangular", function(){
  it("returns 'an equilateral triangle' when all sides are equal", function(){
    expect(triangular(2, 2, 2)).to.equal("an equilateral triangle");
  });

  it("returns 'an isoscoles triangle' when only 2 sides are the same length ", function(){
    expect(triangular(3, 3, 5)).to.equal("an isoscoles triangle");
  });

  it("returns 'a scalene triangle' when no sides are the same length", function(){
    expect(triangular(2, 3, 4)).to.equal("a scalene triangle");
  });

  it("returns 'a triangle' if the provided lengths cannot make a triangle", function(){
    expect(triangular(2, 2, 8)).to.equal("a triangle");
  });
});

describe("createTriangleHtml", function(){
  it("returns the correct svg and polygon tags scaled to the lengths of the sides users inputted", function(){
    expect(createTriangleHtml(2, 3, 4)).to.equal('<svg height=\'2000\' width=\'2000\' class=\'triangle_bit\'><polygon points=\'2, 0 60, 0 40, 40 \' style=\'fill:lime;stroke:purple;stroke-width:1\' /></svg>')
  });
});