// ------------Adding books--------------
var addBook = document.forms['add-books'];
addBook.addEventListener('submit', function(book) {
    book.preventDefault();
    const value = addBook.querySelector('input[type="text"]').value;
    addBook.querySelector('input[type="text"]').value = "";


    if (value !== "") {
        //----Add elements----
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteBook = document.createElement('span');


        //----giving the elements text content
        bookName.textContent = value;
        deleteBook.textContent = 'delete';

        //----assigning classes to the span tags
        bookName.classList.add('name');
        deleteBook.classList.add('delete');

        //----appending elements
        li.appendChild(bookName);
        li.appendChild(deleteBook);
        list.appendChild(li);


        // ---------Working with the local storage---
        var bookmark = {
                books: value
            }
            //Test if bookmarks is null
        if (localStorage.getItem('bookmarks') === null) {
            //Init array
            var bookmarks = [];
            //add to array
            bookmarks.push(bookmark);
            //set to localStorage
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

        } else {
            // get bookmarks from localstorage
            var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
            //add bookmark to array
            bookmarks.push(bookmark);
            //re-set back to localstorage
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

        }

    }
});


//-------------------deleting books----------------
var list = document.querySelector('#book-list ul');
list.addEventListener('click', function(e) {
    e.preventDefault();
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);

    }
});


// ----------Hiding books-------------
var hideBook = document.querySelector('#hide');
hideBook.addEventListener('change', function(e) {
    e.preventDefault();
    if (e.target.checked) {
        list.style.display = 'none';
    } else {
        list.style.display = 'initial';
    }
});