$(document).ready(function(){
  var lang= "en"; //option for later: adding multiple language support
  $("#search").click(function(){
    // Get search input
    var searchTerm=$("#searchTerm").val();
    // search url API
    var url= "https://" + lang + ".wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search=" + searchTerm;

    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType:"json",
      success: function(data){
        /*Title = data[1][i]
          Description = data[2][i]
          Url link = data[3][i]*/
        $("#output").html("");
        for (var i=-0;i<data[1].length;i++){
 //         $("#output").append('<div class="searchResult"><h1><a href= '+data[3][i]+'>'+data[1][i]+'</a></h1><p>'+data[2][i]+'</p></div>');
         $("#output").append('<table cellspacing="0" cellpadding="0" style="margin:0 0 1em; width:100% background:white;"><tr><td style="width:50%; vertical-align:top; border:1px solid #abd5f5; background:#f1f5fc;"><div style="border-bottom:1px solid #abd5f5; background:#d0e5f5; padding:0.2em 0.5em; font-size:110%; font-weight:bold;"><a style="color:black" href='+data[3][i]+'>'+data[1][i]+'</a></div><div style="border-bottom:1px solid #abd5f5; padding:0.4em 1em 1em;"><p>'+data[2][i]+'<br /></p></div>');
        }
        $("#searchTerm").val("");
      },
      error: function(errorMessage){
        alert("Error");
      }
    });
  });
      $("#searchTerm").keypress(function(e){
      if(e.which==13){
        $("#search").click();
      }
    });
});
