var apibuddy = require('./api-buddy')
var $ = require('jquery')

$(document).ready(function(){

  var collector = [] // see: "$(document).on('click', '.thumb'"

  // ## button town ## //
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
      // don't delete this.
      // required logging for mod 5
      console.log(res);
    })

    // leave no trace
    $('#trackbin p').remove()
    collector = []
  })

  var myarray = [] // for ajax results

  var getter = $.ajax({
    url: apibuddy['url']['get'],
    method: 'GET',
    dataType: 'json'
  })

  getter.done(function(res){
    myarray = Array.prototype.slice.call(res["results"])
    myarray = apibuddy.shuffleArray(myarray)

    var timer = 0;

    for (var i = 0; i < myarray.length; i++){
      $('#thumb-scroller').append('<img class="thumb dim" src="img/'+ myarray[i]["cover_art"] +'" id="'+ myarray[i]["id"] +'" >')

      $('#'+ myarray[i]["id"]).delay(timer+=25).animate({'opacity': 1.0}, 500)
    }


  })

  $(document).on('click', '.thumb', function(){
    var myid = $(this).attr('id')
    collector.push(myid)

    /* HERE COMES SOME HOF */
    $('#trackbin').append(myarray.filter(function(i){ // filter for match
        return i['id'] == myid
      }).map(function(i){ // get artist and title values
        return i['artist'] +': '+ i['title']
      }).map(function(i){ // make it a p element
        return "<p>"+ i +"</p>"
      }).join(''))
  })
})
