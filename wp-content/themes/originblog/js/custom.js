/**
 * Created by kienpt on 2/15/15.
 */
$(document).ready(function(){
    $('.tab_content:not(:first)').hide();
    $('.tabs li a').click(function(){
        $('.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.tab_content').hide();
        var activeTab = $(this).attr('href');
        $(activeTab).fadeIn();
        return false;
    });
});
