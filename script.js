$(document).ready(function () {
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            console.log("AFFICHAGE")
            // Traitez vos données ici
        });
    function addEntreProjet(projet) {
        var content = "content" + ind;
        var pres = "presentation" + ind;
        $("#row-center").append(
            '<div class="col-sm-6 order-sm-1" id=' + content + '>' +
            '<div class="jumbotron" id=' + presentation + '>' +
            '<a href=' + projet.lien + 'a>' +
            projet.titre + '\n' +
            projet.description +
            'a/>' +
            '</div>'
            + '</div>'
        );
        ind++;
    }
    /*projets.map(projet =>{
        addEntreProjet();
        console.log("Affichage "+ind);

    });*/

});