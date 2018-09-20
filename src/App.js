import React from 'react';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import SearchBooks from './Search.js'
import BookShelf from './BookShelf.js'
import * as BooksAPI from './BooksAPI.js'

class BooksApp extends React.Component {
  state = {
    allBooks : []
  }

  myShelves = [
    { id: 1, key:"currentlyReading", name: 'Currently Reading' },
    { id: 2, key:"wantToRead",name: 'For Reading' },
    { id: 3, key:"read",name: 'Finished Reading' }
  ]

  componentDidMount(){
    this.getAllBooks()
  }

 /**
 * Function to load the set of books using BookAPI.js
 * @param
 */
  getAllBooks() {
    BooksAPI.getAll().then((mBooks) => {
      this.setState({ allBooks: mBooks })
    })
  }

 /**
 * Function to add a new book to the set of books.
 * @param {object} newBook -- the new book to be added
 * @param {string} targetShelf -- the name of the desination shelf
 */

  addBook(newBook, targetShelf) {
    this.setState(state => ({
      allBooks: this.state.allBooks.concat([newBook])
    }))
    this.moveBooks(newBook,targetShelf)
  }

 /**
 * Function to move a book from one shelf to another.
 * @param {object} book -- the book to be moved
 * @param {string} targetShelf -- the name of the desination shelf
 */
  moveBooks(book, targetShelf) {
    BooksAPI.update(book, targetShelf).then(()=>{
      this.getAllBooks();
    })
  }
  
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf shelf={this.myShelves} books={this.state.allBooks} onBookChange={(changedBook, targetShelf) => {
                this.moveBooks(changedBook, targetShelf) 
                console.log("at App book and shelf"+changedBook, targetShelf)
              }} />
            </div>
            <div className="open-search">
              <Link className='plus-icon'to='/search'>
                  Add Contact
              </Link>
            </div>
          </div>
        )} />
        <Route exact path='/search' render={({history}) => (
          <div className="search-books">
            <SearchBooks
              shelf={this.myShelves}
              myBooks={this.state.allBooks}
              onBookChange={(changedBook, targetShelf) => {
                this.addBook(changedBook, targetShelf)}}
              onCloseSearch={() => { history.push('/') }}
            />
          </div>
        )}/>
      </div>
    )
  }
}
export default BooksApp