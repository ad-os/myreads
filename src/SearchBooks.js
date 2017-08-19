import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBooks extends Component {

	state = {
		query: ''
	}

	updateQuery = (query) => {
		const { search } = this.props;
		this.setState({ 
			query: query.trim() 
		}, () => {
			search(query);
		});
	}

	clearQuery = () => {
		this.setState({
			query: ''
		})
	}

	render() {
		const { query } = this.state;
		const { queriedBooks, books, updateBookShelf } = this.props;
		for (const queriedBook of queriedBooks) {
			queriedBook.shelf = 'none';
			for (const book of books) {
				if (queriedBook.id === book.id) {
					queriedBook.shelf = book.shelf;
				}
			}
		}
		return (
		  <div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
					<input 
						type="text" 
						placeholder="Search by title or author"
						value={query}
						onChange={(e) => this.updateQuery(e.target.value) }
					/>
				  </div>
				</div>
				<div className="search-books-results">
				  <ol className="books-grid">
					{queriedBooks.map((book) => (
						<li key={book.id}>
							<Book 
								book={book}
								updateBookShelf={updateBookShelf} 
							/>
						</li>
					))}
					</ol>
				</div>
			</div>
		)
	}
}

export default SearchBooks