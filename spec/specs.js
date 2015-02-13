describe("triangular", function(){
  it("returns 'equilateral' when all sides are equal", function(){
    expect(triangular(2, 2, 2)).to.equal("equilateral");
  });

  it("returns 'isoscoles' when only 2 sides are the same length ", function(){
    expect(triangular(3, 3, 5)).to.equal("isoscoles");
  });

  it("returns 'scalene' when no sides are the same length", function(){
    expect(triangular(1, 2, 3)).to.equal("scalene");
  });
});