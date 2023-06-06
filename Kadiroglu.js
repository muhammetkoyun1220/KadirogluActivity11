$(document).ready(function() {
    $("#nav_list a").click(function(e) {
        e.preventDefault(); 

        var title = $(this).attr("title");
        var jsonFile = "json_files/"+title+".json";

       
        $.getJSON(jsonFile, function(data) {
            var speakers = data.speakers;
            for (var i = 0; i < speakers.length; i++) {
                if (i==0) {
                    var speaker = speakers[i];
                    
                    $("main h1").text(speaker.title);
                    $("main img").attr("src", speaker.image);
                    $("main h2").html(speaker.month + "<br>" + speaker.speaker);
                    $("main p").text(speaker.text);
                    break;
                }
            }
        });
    });
});
