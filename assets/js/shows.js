$.getJSON(
    "https://www.randy-gentry.com/forevermayfall-shows-json/shows.json",
    function(data) {
        
      console.log(data)

      var showInfo = $("#shows")

      var i = 0;

      for (i=0; i<data.shows.length; i++) {
        var date = $('<td>').text(data.shows[i].date);
        var venue = $('<td>').text(data.shows[i].venue);
        var location = $('<td>').text(data.shows[i].location);
        var href = '<a href="' + (data.shows[i].url) + '">'+ 'Link' + '</a>'
        var url = $('<td>').html(href);
        var row = $('<tr>');
        // var link = $('<a>');

        // <a href="https://www.w3schools.com">Visit W3Schools</a>

        // link.append(url);
        row.append(date, venue, location, url);
        showInfo.append(row);

        // console.log("track= " + data.tracks[0].track );

      };
      
    }
);