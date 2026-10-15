// Book Inventory : Create a book object and print a cusstom reading status message using its title,author,and isRead boolean properties.


let book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    isRead: true
};

if (book.isRead) {
    console.log(`I have already read "${book.title}" by ${book.author}.`);
} else {
    console.log(`I still need to read "${book.title}" by ${book.author}.`);
}