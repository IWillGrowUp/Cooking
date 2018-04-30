function showSalad (someSalad, saladUrl) {
$(document).on( 'click', someSalad, function saladRecipe() {
    document.getElementById('main_sect').style.display = 'none';
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('insert_here').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', saladUrl + '?r=' + Math.random(), true);
    xhr.send();
    });
}

showSalad('#saladWithChickenHearts', 'recipes/salad_with_chicken_hearts.html');