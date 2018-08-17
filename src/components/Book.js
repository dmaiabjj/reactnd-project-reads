import React from "react"
import ShelfBookChanger from "./ShelfBookChanger"
import PropTypes from 'prop-types';

/**
* @description 
* Componente que representa a unidade de um livro
*
* @constructor
* @param {Object} book                  Objeto que representa um livro
* @param {Array} options                Lista de estantes para adição/troca de um livro
* @param {Function} onChangeBookShelf   Função responsável por efetuar a adição/troca do livro para uma estante
*/
const Book = ({book,options, onChangeBookShelf}) => {
    const dStyle = {
        width: 128,
        height: 174,
        backgroundImage: `url(${book.image})`
    }

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={dStyle}></div>
                <ShelfBookChanger book={book} options={options} onChangeBookShelf={onChangeBookShelf}/>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired,
}


export default Book