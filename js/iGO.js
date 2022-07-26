function goBack() {
    window.history.back();
    }
function deleteDiv(id){
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
    }

/* When the user clicks on the button,toggle between hiding and showing the dropdown content */
    function collapsable() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
     
    window.onclick = function (event) {
        if (!event.target.matches('.menu_perfil')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
               	var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
// Compra de bilhetes
 
function incrementValue(id){
    var value = parseInt(document.getElementById(id).value, 10);
    value = isNaN(value) ? 0 : value;
        if (value < 10) {
            value++;
            document.getElementById(id).value = value;
        }
}
function decrementValue(id){
    var value = parseInt(document.getElementById(id).value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 0) {
        value--;
        document.getElementById(id).value = value;
    }
}
