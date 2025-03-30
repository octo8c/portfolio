$(document).ready(function () {
    const express = require('express');
    const file = require('fs');
    const read = fs();
    const app = express();
    app.set("view engine", "ejs");
    app.use(express.urlencoded({ extended: true }));

    const projets = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    var ind = 0;
    function addEntreProjet(projet){
        var content = "content"+ind;
        var pres = "presentation"+ind;
        $("#row-center").append(
            '<div class="col-sm-6 order-sm-1" id='+content+'>' +
                '<div class="jumbotron" id='+presentation+'>' +
                    '<a href='+projet.lien+'a>'+
                    projet.titre + '\n' +
                    projet.description +
                    'a/>' +
                '</div>'
            +'</div>'
        );
        ind++;
    }
    projets.map(projet =>{
        addEntreProjet();
        console.log("Affichage "+ind);

    });
    
});