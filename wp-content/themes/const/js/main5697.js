var ppp = 6; // Post per page
var pageNumber = 6;
function load_posts(){
    pageNumber++;
    var str = '&pageNumber=' + pageNumber + '&ppp=' + ppp + '&action=more_post_ajax';
    jQuery.ajax({
        type: "POST",
        dataType: "html",
        url: OBJ.ajaxurl,
        data: str,
        success: function(data){
            var $data = jQuery(data);
            if($data.length){
                jQuery("#ajax-posts").append($data);
                jQuery("#more_posts").attr("disabled",false);
            } else{
                jQuery("#more_posts").attr("disabled",true);
            }
        },
        error : function(jqXHR, textStatus, errorThrown) {
            $loader.html(jqXHR + " :: " + textStatus + " :: " + errorThrown);
        }
    });
    return false;
}


jQuery( document ).ready(function() {

    jQuery('.wp-block-image').each(
        function(){
            if (jQuery(this).has('figcaption').text()){
                jQuery(this).addClass('wp-block-image-full');;
            }
        });

        jQuery('blockquote').each(
            function(){
         
                    jQuery(this).addClass('wp-block-image-full');;
            
            });

// Swiper ss-BLOCK
	$(function () {
		var swiper = new Swiper('.ss-swiper', {            
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},

             pagination: {
            el: '.swiper-pagination',
            },
            slidesPerView: 1,
            spaceBetween: 0,
            // Responsive breakpoints
            breakpoints: {
                640: {
                slidesPerView: 2,
                spaceBetween: 0
                }
            }
		});
	});

    // Swiper POSTS MODULE
	$(function () {
		var swiper = new Swiper('.post-swiper', {            
             pagination: {
            el: '.swiper-pagination',
            },
            slidesPerView: 1.1,
            spaceBetween: 0,
            // Responsive breakpoints
            breakpoints: {
                640: {
                slidesPerView: 2.1,
                spaceBetween: 0
                }
            }
		});
	});

});
