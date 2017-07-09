$(document).ready(function(){
    $.ajax({
            url: 'http://pokeapi.co/api/v2/pokemon',
            type: 'GET',
            datatype: 'JSON',
            data:{'limit':'20'
            }
        })

        .done(function(response){
            console.log(response);
        })

        .fail(function(error){
            console.log("error");
        })

        $.get("https://pokeapi.co/api/v2/pokedex/1/", function(poke) {
        console.log(poke);
        
        poke.pokemon_entries.forEach(function(el, i){
            
            var contador = i + 1;
            $("#elementos").append("<div id='elementos'><a href='#'  + contador + "'><img src='http://pokeapi.co/media/img/" + contador + ".png'>" + "</a></div>")
