function showBaking (someBaking, bakingUrl) {
$(document).on( 'click', someBaking, function bakingRecipe() {
    document.getElementById('main_sect').style.display = 'none';
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('insert_here').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', bakingUrl + '?r=' + Math.random(), true);
    xhr.send();
    });
}

showBaking('#chocolateCakeWithKuraga', 'recipes/chocolate_cake_with_kuraga.html');
