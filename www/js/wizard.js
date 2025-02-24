var can_revert_wizard = false;

function openStep(evt, stepname) {
    var i, stepcontent, steplinks;
    if (evt.currentTarget.className.indexOf("wizard_done") > -1 && !can_revert_wizard)
        return;

    stepcontent = document.getElementsByClassName("stepcontent");
    for(var sc of stepcontent){
        sc.style.display = "none";
    }
    /* REPLACED
    for (i = 0; i < stepcontent.length; i++) {
        stepcontent[i].style.display = "none";
    }*/

    steplinks = document.getElementsByClassName("steplinks");
    for (var sl of steplinks) {
        steplinks[i].classList.remove("active");// = steplinks[i].className.replace(" active", "");
    }
    /* REPLACED
    for (i = 0; i < steplinks.length; i++) {
        steplinks[i].className = steplinks[i].className.replace(" active", "");
    }*/
    document.getElementById(stepname).style.display = "block";
    evt.currentTarget.className += " active";
}