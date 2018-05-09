function showSauce (someSauce, sauceUrl) {
$(document).on('click', someSauce, function saladRecipe() {
    document.getElementById('main_sect').style.display = 'none';
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('insert_here').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', sauceUrl + '?r=' + Math.random(), true);
    xhr.send();
    });
}

showSauce('#nineSaucesToMacaroni', 'recipes/nine_sauces_to_macaroni.html');