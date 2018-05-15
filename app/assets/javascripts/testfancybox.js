console.log("top of testfancybox.js");

$("#save_stuff_btn").on('click', function() {
  console.log("trying to open");
  $.fancybox.open('<div class="message"><h2>Hello!</h2><p>You are awesome!</p></div>');
});


$("#test").on('click', function(e) {
  e.preventDefault()
  $.fancybox.open('<div class="message"><h2>Hello!</h2><p>You are awesome!</p></div>');
});
