function showRecipe (someDish, url) {
    document.getElementById(someDish).addEventListener('click', recipe);

function recipe() {
    document.getElementById('main_sect').style.display = 'none';
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('insert_here').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', url + '?r=' + Math.random(), true);
    xhr.send();
    }
}

showRecipe('meatCrown', 'recipes/meat_crown.html');
showRecipe('ukrainianSausage', 'recipes/ukrainian_sausage.html');
showRecipe('chickenBrest', 'recipes/chicken_brest.html');
