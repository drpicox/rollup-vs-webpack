export const pageCount = 4;
export var currentPage = 0;

export function getDocumentSize() {
	return pageCount * 80 * 60;
}

export function nextPage() {
	currentPage++;
}

export function prevPage() {
	currentPage--;
}