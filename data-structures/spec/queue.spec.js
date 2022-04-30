describe('Queue', function () {
    let queue;
  
    beforeEach(function () {
      queue = new Queue();
    })
  
    describe('enqueue', function () {
      it('should have the data enqueued at the front of the queue', function () {
        let data = { id: 34234 };
        queue.enqueue(data);
        expect(queue.peek()).toEqual(data);
      })
      it('should enqueue the data even if it already exists', function () {
        let data = { id: 34234 };
        queue.enqueue(data);
        queue.enqueue(data);
        expect(queue.size()).toEqual(2);
      })
      it('should have a size of 1 after data is enqueued', function () {
        let data = { id: 34234 };
        queue.enqueue(data);
        expect(queue.size()).toEqual(1);
      })
    })
    describe('peek', function () {
      it('should return the data at the front of the queue', function () {
        let data = { id: 34234 };
        let otherData = { id: 43434 };
        queue.enqueue(data);
        queue.enqueue(otherData);
        expect(queue.peek()).toEqual(data);
      })
      it('should return undefined if queue is empty', function () {
        expect(queue.size()).toEqual(0);
        expect(queue.peek()).toEqual(undefined);
      })
  
    })
    describe('dequeue', function () {
      it('should dequeue the data from the front of the queue', function () {
        let data = { id: 34234 };
        let otherData = { id: 43434 };
        queue.enqueue(data);
        queue.enqueue(otherData);
        queue.dequeue();
        expect(queue.peek()).toEqual(otherData);
      })
      it('should return undefined if queue is empty', function () {
        expect(queue.size()).toEqual(0);
        expect(queue.dequeue()).toEqual(undefined);
      })
      it('should have a size of 0 after dequeueing the data from the queue', function () {
        let data = { id: 34234 };
        queue.enqueue(data);
        expect(queue.size()).toEqual(1);
        queue.dequeue();
        expect(queue.size()).toEqual(0);
      })
  
    })
    describe('size', function () {
      it('should return 3 after enqueueing three things into queue', function () {
        let data = { id: 34234 };
        let otherData = { id: 54554 };
        let oneMoreData = { id: 23432 };
        queue.enqueue(data);
        queue.enqueue(otherData);
        queue.enqueue(oneMoreData);
        expect(queue.size()).toEqual(3);
      })
      it('should return 0 if no items in the queue', function () {
        expect(queue.size()).toEqual(0);
      })
  
    })
  })