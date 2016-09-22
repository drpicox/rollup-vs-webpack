import { nextPage, currentPage } from './barrel';

console.log('before:', currentPage);
nextPage();
console.log('after:', currentPage);