var hideWelcome = function() {
    $("#welcomeScreen").addClass("hidden");
}




$(function() {
    $("#continueGame").on("click", function(event) {
        hideWelcome();
        $("#userInfo").removeClass("hidden");
        $("#userInfo").addClass("fadeInUp animated")
    });
});