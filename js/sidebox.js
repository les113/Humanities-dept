/**
 * @sidebox.js
 * function to hide sidebox links on policy and guidance page 
**/


jQuery(document).ready(function() {
     
          jQuery('.sidebox').click(function() {
              
            jQuery(this).toggleClass('sidebox-hide');
            jQuery('.col-lg-8').toggleClass('col-lg-8-Expanded');                        
          }); 
 
});
