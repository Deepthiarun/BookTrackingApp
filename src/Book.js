import React from 'react'
import ShelfChanger from './Changer.js'

// Component to create individual books 

class Book extends React.Component {

    render() {

        let bookThumbnail = this.props.book.imageLinks ?
            this.props.book.imageLinks.thumbnail : ""

        return (
            < div className='book' >
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${bookThumbnail}")` }}></div>
                    <ShelfChanger shelf={this.props.book.shelf} onBookChange={(target) => {
                        this.props.onBookChange(target)
                    }} />
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div >
        )
    }
}
 
export default Book