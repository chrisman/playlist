var apibuddy = require('../js/api-buddy')

describe('API Buddy', function(){
  it("should work", function(){
    expect(apibuddy.helloworld()).toEqual('hello world!')
  })
})
