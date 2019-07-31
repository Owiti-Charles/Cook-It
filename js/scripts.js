

$(function () {
    $('.fullBackground').fullClip({
        images: ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'],
        transitionTime: 2000,
        wait: 5000
    });
});
// new WOW().init();


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