const getTheTitles = function(books) {
    new_books =[]
    for (let i=0; i < books.length; i++){
        new_books.push(books[i]["title"])
    }
    return new_books
    }



console.log(getTheTitles(books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]))
// Do not edit below this line
module.exports = getTheTitles;
