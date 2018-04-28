function showAnotherPage (pageClass, url, pageClassNumber) {
    document.getElementsByClassName(pageClass)[pageClassNumber].addEventListener('click', page);

function page() {
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

showAnotherPage('nav-link', 'fish.html', 1);
showAnotherPage('nav-link', 'vegetables.html', 2);
showAnotherPage('nav-link', 'first_dishes.html', 3);
showAnotherPage('nav-link', 'deserts.html', 4);
showAnotherPage('nav-link', 'baking.html', 5);
showAnotherPage('nav-link', 'salads.html', 6);
showAnotherPage('nav-link', 'appetizers.html', 7);
showAnotherPage('nav-link', 'souces.html', 8);


