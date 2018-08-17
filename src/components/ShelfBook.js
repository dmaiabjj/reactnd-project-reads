import React from "react"
import BookGrid from "./BookGrid"
import PropTypes from 'prop-types';


/**
* @description 
* Representa a unidade Estante
*
* @constructor
* @param {Object}   shelf               Estante
* @param {Array}    options             Lista de estantes para adição/troca de um livro
* @param {Function} onChangeBookShelf   Função responsável por efetuar a adição/troca do livro para uma estante
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