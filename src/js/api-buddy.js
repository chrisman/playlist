var $ = require('jquery')

module.exports = {
  url: {
    get: 'https://lit-fortress-6467.herokuapp.com/object',
    post: 'https://lit-fortress-6467.herokuapp.com/post'
  },
  shuffleArray: function(a) {
    var m = a.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = a[m];
      a[m] = a[i];
      a[i] = t;
    }
    return a;
  }
}
