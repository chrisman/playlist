var apibuddy = require('./api-buddy')
var $ = require('jquery')

$(document).ready(function(){

  var collector = []

  $('#cleartracks').click(function(){
    $('#trackbin p').remove()
    collector = []
  })

  $('#submitbin').click(function(){
    var poster = $.ajax({
      url: apibuddy['url']['post'],
      method: 'POST'
    })

    poster.done(function(res){
      console.log(res);
    })

    $('#trackbin p').remove()
    collector = []
  })

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
      $('#thumb-scroller').append('<img class="thumb" src="img/'+ myarray[i]["cover_art"] +'" id="'+ myarray[i]["id"] +'" >')
    }
  })

  $(document).on('click', '.thumb', function(){
    var myid = $(this).attr('id')
    collector.push(myid)
    $('#trackbin').append(myarray.filter(function(i){ // filter for match
        return i['id'] == myid
      }).map(function(i){ // get artist and title values
        return i['artist'] +': '+ i['title']
      }).map(function(i){ // make it a p element
        return "<p>"+ i +"</p>"
      }).join(''))
    console.log(collector);
  })
})
