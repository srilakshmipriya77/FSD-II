let bookTitle: string = "the Wings of Fire";
let releaseYear: number = 1999;
let isAvailable: boolean = true;

function getBookInfo(title: string, year: number, available: boolean): string {
    return `Title: ${title}\nRelease Year: ${year}\nAvailable: ${available}`;
}

let arrayOfBooks: string[] = [ "the Alchemist", "the Great Gatsby"];

const bookInfo: string = getBookInfo(bookTitle, releaseYear, isAvailable);
console.log(bookInfo);
console.log(`Is "${bookTitle}" available? ${isAvailable ? "Yes" : "No"}`);
console.log("Other Books:", arrayOfBooks.join(", "));
