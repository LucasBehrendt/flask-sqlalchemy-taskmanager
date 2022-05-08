$(document).ready(function () {
  $('.sidenav').sidenav();
});

$("#copyright").text(new Date().getFullYear());

$(document).ready(function () {
  $('.modal').modal();
});

$(document).ready(function(){
  $('.datepicker').datepicker({
    format: "dd mmmm, yyyy",
    i18n: {done: "Select"}
  });
});

$(document).ready(function(){
  $('select').formSelect();
});