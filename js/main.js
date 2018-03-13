$(".hamburger").click(function() {
    $(this).toggleClass("is-active");
    $(".mobile-menu").toggle();
});
$(".mobile-dropdown").click(function() {
    $(".mobile-dropdown-content").toggleClass("is-active");
    $(".mobile-dropdown-content").toggle();
});