function init(){
    var onClick = document.getElementById("submit_button"); /*the submit button*/

    var alertInfo = document.getElementById("phone_number"); /**/

    var email = document.getElementById("email");/**/

    /*var name = document.getElementById("name");*/ /*<---- Should I make one for name?*/

    onClick.addEventListener("click", function() {
        alert ("Farewell, they are coming quicker than you think... " + alertInfo.value); /**/
    });
}
window.addEventListener('load', init);
