import { booksData } from './data.js';

const booksContainer = document.getElementById('books-container');

booksData.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');

    const imageElement = document.createElement('img');
    imageElement.src = book.image;
    imageElement.alt = book.title;
    bookElement.appendChild(imageElement);

    const titleElement = document.createElement('h2');
    titleElement.textContent = book.title;
    bookElement.appendChild(titleElement);

    const authorElement = document.createElement('p');
    authorElement.textContent = `Author: ${book.author}`;
    bookElement.appendChild(authorElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = book.description;
    bookElement.appendChild(descriptionElement);

    booksContainer.appendChild(bookElement);
});