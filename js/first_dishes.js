function showFirstDish (someFirstDish, firstDishUrl) {
$(document).on('click', someFirstDish, function firstDishRecipe() {
    document.getElementById('main_sect').style.display = 'none';
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('insert_here').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', firstDishUrl + '?r=' + Math.random(), true);
    xhr.send();
    });
}

showFirstDish('#chickenSoupTomYam', 'recipes/chicken_soup_tom_yam.html');
