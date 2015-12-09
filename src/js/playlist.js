var apibuddy = require('./api-buddy')
var $ = require('jquery')

$(document).ready(function(){

  var myarray = []

  var getter = $.ajax({
    url: apibuddy['url']['get'],
    method: 'GET',
    dataType: 'json'
  })

  var poster = $.ajax({
    url: apibuddy['url']['post'],
    method: 'POST'
  })

  getter.done(function(res){
    myarray = Array.prototype.slice.call(res["results"])
    myarray = apibuddy.shuffleArray(myarray)

    for (var i = 0; i < myarray.length; i++){
      $('#thumb-scroller').append('<img src="img/'+ myarray[i]["cover_art"] +'" id="'+ myarray[i]["id"] +'" >')
    }
  })

  poster.done(function(res){
    console.log(res);
  })

})
