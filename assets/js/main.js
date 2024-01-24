$(document).ready(function () {
    $(".wish-icon").click(function () {
        let attr = $(this).find('.fa-heart').attr('data-prefix')
        if(attr=='far'){
            $(this).find('.fa-heart').attr('data-prefix','fas') 
        }else{
            $(this).find('.fa-heart').attr('data-prefix', 'far') 
        }
        
    });
}); 
