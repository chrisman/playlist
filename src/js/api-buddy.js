var $ = require('jquery')

module.exports = {
  helloworld: function(){
    return 'hello world!'
  },
  url: {
    get: 'https://lit-fortress-6467.herokuapp.com/object',
    post: 'https://lit-fortress-6467.herokuapp.com/post'
  }
}
