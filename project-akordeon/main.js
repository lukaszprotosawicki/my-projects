const items = document.getElementsByClassName('item')

function toggleClass(index) {
    for(let i = 0; i<items.length; i++) {
        items[i].classList.remove('active');
    }
    items[index].classList.toggle('active') 
    
}
