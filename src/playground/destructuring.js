//Object destructuring

const book = {
    title:'Ego is the Enemy',
    author:'Ryan Holiday',
    publisher:{
        name:'Penguin'
    }
};


const {title,author} = book;
const {name:publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);


//Array destructuring

const item = ['Coffee (hot)','$2.00','$2.50','$2.75'];

const [itemName,, mediumPrice, largePrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);