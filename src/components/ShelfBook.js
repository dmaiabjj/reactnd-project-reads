import React from "react"
import BookGrid from "./BookGrid"
import PropTypes from 'prop-types';

/**
* @description Representa uma Estante
* @constructor
* @param {Object} shelf -  Representa a estante
* @param {Array} options - Opções de estantes para a troca do livro
* @param {Function} onChangeBookShelf - Função responsável por atualizar a estante de um livro
*/
const ShelfBook = ({shelf,options, onChangeBookShelf})=> {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
            <BookGrid books={shelf.books} options={options} onChangeBookShelf={onChangeBookShelf}/>
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