function showAppetizers (someAppetizers, appetizersUrl) {
$(document).on( 'click', someAppetizers, function appetizersRecipe() {
    document.getElementById('main_sect').style.display = 'none';
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('insert_here').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', appetizersUrl + '?r=' + Math.random(), true);
    xhr.send();
    });
}

showAppetizers('#spinachAndArtichoke', 'recipes/spinach_and_artichoke.html');
showAppetizers('#brokoliWithGurlicSouce', 'recipes/brokoli_with_gurlic_souce.html');
showAppetizers('#nestsWithMincedMeatWithChease', 'recipes/nests_with_minced_meat_with_chease.html');
showAppetizers('#homePaste', 'recipes/home_paste.html');
showAppetizers('#pickledCheese', 'recipes/pickled_cheese.html');
