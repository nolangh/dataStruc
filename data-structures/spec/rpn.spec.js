describe('rpn', function () {
  it('should return 45 when the expression is "3 10 5 + *"', function () {
    let result = rpn('3 10 5 + *');
    expect(result).toEqual(45);
  });
  it('should return 20 when the expression is " 4 5 *"', function () {
    let result = rpn('4 5 *');
    expect(result).toEqual(20);
  });
  it('should return 40 when the expression is "10 10 10 10 + + +"', function () {
    let result = rpn('10 10 10 10 + + +');
    expect(result).toEqual(40);
  });
  it('should return 20 when the expression is "2 10 20 - *"', function () {
    let result = rpn('2 10 20 - *');
    expect(result).toEqual(20);
  });
  it('should return 0 when the expression is "2 10 20 - /"', function () {
    let result = rpn('2 10 20 - /');
    expect(result).toEqual(5);
  });
  it('should return 20 when the expression is "1 2 3 4 5 6 * * * * *"', function () {
    let result = rpn('1 2 3 4 5 6 * * * * *');
    expect(result).toEqual(720);
  });
  it('should return 0 when the expression is "10 20 30 40 100 - - - -"', function () {
    let result = rpn('10 20 30 40 100 - - - -');
    expect(result).toEqual(0);
  });
});
