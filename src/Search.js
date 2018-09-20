import React from 'react'
import Book from './Book.js'
import * as BooksAPI from './BooksAPI.js'
//import sortBy from 'sort-by'

class SearchBooks extends React.Component {

    state = {
        query : '',
        booksFound: []
    }
    
/**
 * Function to update query string in state.
 * @param {string} query -- the new string
 */
    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }

 /**
 * Function to clear query string.
 * 
 */
    clearQuery = () => {
    this.setState({query: ''})
    }
 
/**
 * Function to search a book using Book API based in the query string.
 * @param {string} query -- the string to search
 */    
    searchBooks(query) {
        if (query) {
            BooksAPI.search(query).then((matchingBooks) => {
                if (!matchingBooks.error) {
                    this.setState({ booksFound: matchingBooks })      
                }
            })
        }
    }

    /**
     * Function to handle changs in the serch box.
     * @param {string} query -- the new string
     */
    handleSearch(query) {
        this.updateQuery(query)
        this.searchBooks(query)
    }

    /**
     * Function to hadle the back navigation from serach page.
     * either by the back button of the page or the broswer back button
     * @param {event} e -- 
     */
    handleClose = (e) => {
        e.preventDefault()
        this.props.onCloseSearch()
    }
    
    render() {
        return (
            <div>
                <div className="search-books-bar">
                    <a className="close-search" onClick={this.handleClose}>Close</a>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                                placeholder="Search by title or author" 
                                value={this.state.query}
                                onChange={(event) => this.handleSearch(event.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.query !== "" && (
                            this.state.booksFound.map((searchedBook) => {
                            searchedBook.shelf = "move"
                            this.props.myBooks.map(myBook => {
                                if (searchedBook.title === myBook.title ) {
                                    searchedBook.shelf = myBook.shelf
                                } 
                                return(null)
                            })
                            return (
                               <Book key={searchedBook.id}
                                    book={searchedBook}
                                    onBookChange={(targetShelf) => {
                                        this.props.onBookChange(searchedBook, targetShelf);
                                    }}>
                                </Book>
                            )})
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks