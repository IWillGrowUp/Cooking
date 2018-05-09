function showDesert (someDesert, desertUrl) {
$(document).on('click', someDesert, function desertRecipe() {
    document.getElementById('main_sect').style.display = 'none';
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('insert_here').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', desertUrl + '?r=' + Math.random(), true);
    xhr.send();
    });
}

showDesert('#appleJam', 'recipes/apple_jam.html');
showDesert('#zalcburgNokerln', 'recipes/zalcburg_nokerln.html');