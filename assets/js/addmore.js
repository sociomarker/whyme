$(function() {
  $("#addMore").click(function(e) {
    e.preventDefault();
    $("#fieldList").append("<br>");
    $("#fieldList").append("<input type='file' placeholder='Select Image' />");
    $("#fieldList").append("<p class='help-block'>Upload a picture size between 100kb - 300kb</p>");
    
  });
});
