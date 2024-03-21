import { featuredItems } from './data.js';

console.log(featuredItems);

const container = document.getElementById('productsContainer');
const template = document.getElementById('productTemplate');

featuredItems.forEach(item => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.product-image').setAttribute('src', item.image);
    clone.querySelector('.subject').textContent = item.subject;
    clone.querySelector('.desc').textContent = item.desc;
    clone.querySelector('.price').textContent = item.price;
    container.appendChild(clone);
});