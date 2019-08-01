$(function () {
    $('.fullBackground').fullClip({
        images: ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'],
        transitionTime: 2000,
        wait: 5000
    });
});
$(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
$(".lunch").hide();
$(".supper").hide();
$(".drinks").hide();
$(".add-recipe").hide();
$(".added-recipe1").hide();
$(document).ready(function(){
    var rname, rsteps;
    rname = $('#rname').val();
    rsteps = $('#rsteps').val();
    
    $("#lunchit").click(function(event){
        $(".drinks").hide();
        $(".lunch").fadeTo('slow',1).slideDown('slow');
        $(".breakfast").hide();
        $(".supper").hide();
    });
    $("#break").click(function(event){
        $(".lunch").fadeTo('slow',0).hide();
        $(".breakfast").fadeTo('slow',1).slideDown('slow');
        $(".supper").hide();
        $(".drinks").hide();
    });
    $("#supperit").click(function(event){
        $(".breakfast").hide();
        $(".drinks").hide();
        $(".lunch").fadeTo('slow',0).hide();
        $(".supper").fadeTo('slow',1).slideDown('slow');
    });
    $("#drinkit").click(function(event){
        $(".breakfast").hide();
        $(".lunch").hide();
        $(".supper").hide();
        $(".drinks").fadeTo('slow',1).slideDown('slow');
    });
    $("#food1").click(function(){
        $("#mahamri").slideDown(1000);
    });
    $(".exit").click(function(){
        $("#mahamri").slideUp(1000);
    });
    $("#viazikarai").click(function(){
        $("#viazikarai-recipe").slideDown(1000);
    });
    $(".exit").click(function(){
        $("#viazikarai-recipe").slideUp(1000);
    });
    $("#mkatewasinia").click(function(){
        $("#mkatewasinia-recipe").slideDown(1000);
    });
    $(".exit").click(function(){
        $("#mkatewasinia-recipe").slideUp(1000);
    });
    $("#vitumbua").click(function(){
        $("#vitumbua-recipe").slideDown(1000);
    });
    $(".exit").click(function(){
        $("#vitumbua-recipe").slideUp(1000);
    });
    $('.btn-add1').click(function(){
        // $(".added-recipe1").slideDown(2000);
        $('.added-recipe1').append('<h3 class="ingredients text-center"></h3>')
        $(".add-recipe").show(1000);
    })
});
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}


