describe('Stack', function () {
  let stack;

  beforeEach(function () {
    stack = new Stack();
  })

  describe('push', function () {
    it('should have the data pushed at the top of the stack', function () {
      let data = { id: 34234 };
      stack.push(data);
      expect(stack.peek()).toEqual(data);
    })
    it('should push the data even if it already exists', function () {
      let data = { id: 34234 };
      stack.push(data);
      stack.push(data);
      expect(stack.size()).toEqual(2);
    })
    it('should have a size of 1 after data is pushed', function () {
      let data = { id: 34234 };
      stack.push(data);
      expect(stack.size()).toEqual(1);
    })
  })
  describe('peek', function () {
    it('should return the data at the top of the stack', function () {
      let data = { id: 34234 };
      let otherData = { id: 43434 };
      stack.push(data);
      stack.push(otherData);
      expect(stack.peek()).toEqual(otherData);
    })
    it('should return undefined if stack is empty', function () {
      expect(stack.size()).toEqual(0);
      expect(stack.peek()).toEqual(undefined);
    })

  })
  describe('pop', function () {
    it('should pop the data from the top of the stack', function () {
      let data = { id: 34234 };
      let otherData = { id: 43434 };
      stack.push(data);
      stack.push(otherData);
      stack.pop();
      expect(stack.peek()).toEqual(data);
    })
    it('should return undefined if stack is empty', function () {
      expect(stack.size()).toEqual(0);
      expect(stack.pop()).toEqual(undefined);
    })
    it('should have a size of 0 after popping the data from the stack', function () {
      let data = { id: 34234 };
      stack.push(data);
      expect(stack.size()).toEqual(1);
      stack.pop();
      expect(stack.size()).toEqual(0);
    })

  })
  describe('size', function () {
    it('should return 3 after pushing three things into stack', function () {
      let data = { id: 34234 };
      let otherData = { id: 54554 };
      let oneMoreData = { id: 23432 };
      stack.push(data);
      stack.push(otherData);
      stack.push(oneMoreData);
      expect(stack.size()).toEqual(3);
    })
    it('should return 0 if no items in the stack', function () {
      expect(stack.size()).toEqual(0);
    })

  })
})