import React from 'react'

class ShelfChanger extends React.Component{

    handleSelect = (e) => {
        if (this.props.onBookChange) {
            this.props.onBookChange(e.target.value);
        }
        console.log("Changer Changing")
    }

    render() {
        return (
            <div className="book-shelf-changer">
            <select value={this.props.shelf} onChange={this.handleSelect} className="changer">
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Finished Reading</option>
              <option value="none">None</option>
            </select>
          </div>
        )
    }
}
  
export default ShelfChanger