import React from 'react'
import Book from './Book.js'

// Component to create book shelves

class BookShelf extends React.Component{

    render() {
        return (
        <div className="AA">
            {this.props.shelf.map((shelf) => (
                    < div key={shelf.id} className='bookshelf' >
                        <h2 className="bookshelf-title">{shelf.name}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.props.books.filter(book => book.shelf === shelf.key)
                                    .map(book => (
                                        <Book key={book.id}
                                        book={book}
                                        onBookChange={(targetShelf) => {
                                            this.props.onBookChange(book, targetShelf);
                                        }}>
                                    </Book>))
                                }
                            </ol>
                        </div>
                    </div>
                ))}
        </div>
        )
    }
}
  
export default BookShelf