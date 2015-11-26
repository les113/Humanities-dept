/**
 * @equalheight.js
 */
(function () {
  "use strict";

    //Set columns in a row to the height of the largest to avoid strange wrapping issues
    function equalHeight(group) {
		var tallest = 0;
		group.each(function() {
			var thisHeight = jQuery(this).height();
			if(thisHeight > tallest) {
				tallest = thisHeight;
			}
		});
		group.height(tallest);
    }

   jQuery(document).ready(function($) {
     equalHeight($(".iwanttoWrap"));
   });
})();

