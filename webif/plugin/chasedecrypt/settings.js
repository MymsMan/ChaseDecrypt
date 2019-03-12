$(function() {

// cloned from channeldel package - mymsman 150331

$('#back').button({
      icons : {
         primary : "ui-icon-arrowreturnthick-1-w"
      }
   }).on('click', function() {
      window.location = '/settings/settings.jim'
   });


$('.move').button().click(function(e) {
   e.preventDefault();

   $('#chanlist' + ' option:selected').each(function() {
      var box = $('#exclist');
      box.val(box.val() + $.trim($(this).val()) + '\n');
      $(this).remove();
   });
});

$('#excsave').ajaxForm({
   target: '#saveresults',
   success: function() {
      $('#saveresults')
         .css('font-style', 'italic')
         .show('slow')
         .delay(2000)
         .fadeOut('slow');
   }
});

$('#save').button();


});
