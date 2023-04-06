$("#submit_btn").click(function () {
  var name = $("#name").val();
  if (name === "") {
    document.getElementById("name").scrollIntoView();
    document.getElementById("name_error").style.display = "block";
    document.getElementById("name").focus();
  } else {
    document.getElementById("name_error").style.display = "none";
  }

  var email = $("#email").val();
  if (email === "") {
    document.getElementById("email").scrollIntoView();
    document.getElementById("email_error").style.display = "block";
    document.getElementById("email").focus();
  } else {
    document.getElementById("email_error").style.display = "none";
  }
  var mobile = $("#mobile").val();
  if (mobile === "") {
    document.getElementById("mobile").scrollIntoView();
    document.getElementById("mobile_error").style.display = "block";
    document.getElementById("mobile").focus();
  } else {
    document.getElementById("mobile_error").style.display = "none";
  }
  var address = $("#address").val();
  if (address === "") {
    document.getElementById("address").scrollIntoView();
    document.getElementById("address_error").style.display = "block";
    document.getElementById("address").focus();
  } else {
    document.getElementById("address_error").style.display = "none";
  }

  //  var termsValue = $('#terms').prop('checked');
  /* if ($('#terms').prop('checked')) {
             alert ($('#terms').prop('checked'));
         } else {
             alert ($('#terms').prop('checked'));
         } */

  if (name != "" && email != "" && mobile != "" && address != "") {
    window.location.href = "../OTP_page/index.html";
    // $("#main_div_apply").css("opacity", 0.8);
    // $("#register").hide();
    // $("#register_loading").show();
  } else {
    //alert("Please Enter All Details");
  }
});
