import React, { Component } from 'react'


class Book extends Component {

	
	render() {
		const { book, updateBookShelf } = this.props;
		return (
			<div className="book">
			  <div className="book-top">
				<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 
					book.imageLinks !== undefined ? `url(${book.imageLinks.thumbnail})` : 'url("http://via.placeholder.com/150x100")' }}></div>
					<div className="book-shelf-changer">
					<select value={book.shelf} onChange={ (e) => updateBookShelf(e, book)}>
						<option value='none' disabled>Move to...</option>
						<option value='currentlyReading'>Currently Reading</option>
						<option value='wantToRead'>Want to Read</option>
						<option value='read'>Read</option>
						<option value='none'>None</option>
					</select>
					</div>
			  </div>
			  <div className="book-title">{book.title !== undefined ? book.title : `I don't know the title` }</div>
			  <div className="book-authors">{book.authors !== undefined ? book.authors[0] : '' }</div>
			</div>
		)
	}
}

export default Book