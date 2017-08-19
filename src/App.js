import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'


class BooksApp extends React.Component {
	
	state = {
		books: [],
		queriedBooks: []
	}

	getAllBooks = () => {
		BooksAPI.getAll().then((books) => {
			this.setState({books})
		});    
	}

	updateBookShelf = (e, book) => { 
		BooksAPI.update(book, e.currentTarget.value).then((book) => {
			this.getAllBooks();
		})
	}

	search = (query, resultsRequired) => {
		if (query === '') {
			this.setState( {queriedBooks: []})
		} else {
			BooksAPI.search(query, resultsRequired).then((queriedBooks) => {
				this.setState({ queriedBooks });  
			});
		}
	}

	componentDidMount = () => {
		this.getAllBooks();
	}

	render() {
		const { books, queriedBooks } = this.state;
		return (
			<div className="app">
				<Route exact path="/search" render={() => (
					<SearchBooks 
						search={this.search}
						queriedBooks={queriedBooks}
						books={ books }
						updateBookShelf={this.updateBookShelf}
					/>
				)}/>
				<Route exact path="/" render={() => (
					<BookShelf
						books={books}
						updateBookShelf={this.updateBookShelf} 
					/>
				)}/>
			</div>
		)
	}
}

export default BooksApp
