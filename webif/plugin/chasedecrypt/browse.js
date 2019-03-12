
//plugins.menu.chasedecrypt = function(file) {
// window.location = '/plugin/chasedecrypt/web/?file=' + file;
//

plugins.dmenu.chasedecrypt = function(dir, iconset, results, el) {
   flagdir(dir, 'chasedecrypt', iconset, results, el);
};

//plugins.dmenu.editchasedecrypt = function(dir, iconset, results, el) {
//   var edir = encodeURIComponent(dir);
//   cf = dir + '/.chasedecrypt';
//   curloc = window.location;
//   $(results).slideDown().load('/plugin/chasedecrypt/editprep.jim',
//                              {file: cf}, function() {
//     window.location = '/edit/edit.jim' +
//       '?file=' + encodeURIComponent(cf) +
//       '&backdesc=Back to media browser' +
//       '&backlink=' + encodeURIComponent(curloc);
//   }).delay(300).slideUp();
//};


plugins.dmenu_prepare.chasedecrypt = function(el, menu) {
   fixdmenu(el, menu, 'chasedecrypt', '#chasedecrypt', 'ChaseDecrypt', 0);
};

//plugins.dmenu_prepare.editchasedecrypt = function(el, menu) {
//   if ($(el).attr('chasedecrypt') == '1') {
//
//         $(menu).enableContextMenuItems('#editchasedecrypt');
//         //$(menu).showContextMenuItems('#editchasedecrypt');
//   }  else {
//         $(menu).disableContextMenuItems('#editchasedecrypt');
//         //$(menu).hideContextMenuItems('#editchasedecrypt');
//   }
//};



