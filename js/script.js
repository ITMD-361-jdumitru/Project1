function init(){
    var button = document.getElementById("submit_button"); /*the submit button*/

    var name = document.getElementById("name"); /**/

    var email = document.getElementById("email");/**/

    /*var name = document.getElementById("name");*/ /*<---- Should I make one for name?*/
    /*Halloween message */
    button.addEventListener("click", function() {
        alert ("Farewell, they are coming quicker than you think... ");
    });
}
window.addEventListener('load', init);
