import React from "react"
import Book from "./Book"
import PropTypes from 'prop-types';

/**
* @description 
* Componente que representa a coleção de livros
*
* @constructor
* @param {Array} books                  Lista de livros
* @param {Array} options                Lista de estantes para adição/troca de um livro
* @param {Function} onChangeBookShelf   Função responsável por efetuar a adição/troca do livro para uma estante
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