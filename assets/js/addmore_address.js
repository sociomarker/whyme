$(function() {
  $("#addMore").click(function(e) {
    e.preventDefault();
    $("#fieldList").append("<br><br>");
    $("#fieldList").append("<h5>Address of branches<h5>");
    $("#fieldList").append("<label>Address</label>");
    $("#fieldList").append("<input type='text' class='form-control' value='Bandra West'>");
     $("#fieldList").append("<label>City</label>");
    $("#fieldList").append("<input type='text' class='form-control' value='Mumbai'>");
     $("#fieldList").append("<label>State</label>");
    $("#fieldList").append("<input type='text' class='form-control' value='Maharashtra'>");
     $("#fieldList").append("<label>PIN</label>");
    $("#fieldList").append("<input type='text' class='form-control' value='400050'>");
    
    
  });
});
