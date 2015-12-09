var apibuddy = require('./api-buddy')
var $ = require('jquery')

$(document).ready(function(){

  var myarray = []

  var getter = $.ajax({
    url: apibuddy['url']['get'],
    method: 'GET',
    dataType: 'json'
  })

  getter.done(function(res){
    myarray = Array.prototype.slice.call(res["results"])
    myarray = apibuddy.shuffleArray(myarray)

    for (var i = 0; i < myarray.length; i++){
      $('#thumb-scroller').append('<img src="img/'+ myarray[i]["cover_art"] +'" >')
    }
  })
})
