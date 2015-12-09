var apibuddy = require('../js/api-buddy')

describe('API Buddy', function(){
  it("should work", function(){
    expect(apibuddy.helloworld()).toEqual('hello world!')
  })
})

describe('loadResults', function(){
  it('should perform an ajax get request, and fill this.results with an array of results', function(){
    expect(typeof apibuddy.loadResults()).toEqual(typeof [])
  })
})
