import { nextPage, currentPage, pageCount, getDocumentSize } from './barrel';

if (pageCount > 10) {
	console.log('document size:', getDocumentSize());
}

console.log('before:', currentPage);
nextPage();
console.log('after:', currentPage);