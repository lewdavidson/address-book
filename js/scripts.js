$(document).ready (function() {

  var userCount = 0;
  $("#new-contact").submit(function(event){
    event.preventDefault();
    var userID = userCount
    var name = $("#name").val();
    var address = $("#address").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    userCount++;

    //add contact name
    $("#contact-name").append("<li id=\"" + userID + "\">" + name + "</li>");
    $("#" + userID).click(function() {
      $("#card" + userID).toggle(".hide");
    })

    //and contact info div   <li id="UserCount">john</li>
    $("#contact-info").append('<div id="card' + userID +'" class="card bg-secondary hide"><p class="name-display">Name: ' + name + '</p><p class="address-display">Address: ' + address + '</p><p class="phone-display"> Phone: ' + phone + '</p><p class="email-display">Email: ' + email + '</p></div>');
    });

// handle clicks on contact names


});
