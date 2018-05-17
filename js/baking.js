function showBaking (someBaking, bakingUrl) {
$(document).on('click', someBaking, function bakingRecipe() {
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
showBaking('#CakeParisBrest', 'recipes/cake_paris_brest.html');
showBaking('#magnificentPaska', 'recipes/magnificent_paska.html');
showBaking('#cheeseCakeTiropita', 'recipes/cheese_cake_tiropita.html');
showBaking('#chocolateTubes', 'recipes/chocolate_tubes.html');
showBaking('#cocoaMirrorGlaze', 'recipes/cocoa_mirror_glaze.html');

