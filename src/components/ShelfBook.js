import React from "react"
import Book from "./Book"
import PropTypes from 'prop-types';

const ShelfBook = ({shelf,options, onChangeBookShelf})=> {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {
                    shelf.books.map(book => {
                            return (
                                <li key={book.id}>
                                    <Book key={book.id} book={book} options={options} onChangeBookShelf={onChangeBookShelf}/>
                                </li>
                            )
                        })
                }
                    
                </ol>
            </div>
        </div>
        
    )
}

ShelfBook.propTypes = {
    shelf: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired,
}

export default ShelfBook