import React from "react"
import Book from "./Book"
import PropTypes from 'prop-types';

/**
* @description Representa o grid de livros
* @constructor
* @param {Object} shelf -  Representa a estante
* @param {Array} options - Opções de estantes para a troca do livro
* @param {Function} onChangeBookShelf - Função responsável por atualizar a estante de um livro
*/
const BookGrid = ({books,options, onChangeBookShelf})=> {
    return (
        <ol className="books-grid">
            {
                books.map(book => {
                    return (
                            <li key={book.id}>
                                <Book key={book.id} book={book} options={options} onChangeBookShelf={onChangeBookShelf}/>
                            </li>
                    )
                })
            }
                    
        </ol>
    )
}

BookGrid.propTypes = {
    books: PropTypes.array.isRequired,
    options: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired,
}

export default BookGrid