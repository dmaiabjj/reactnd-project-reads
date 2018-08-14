import React from "react"
import ShelfBookChanger from "./ShelfBookChanger"
import PropTypes from 'prop-types';

/**
* @description Representa um livro
* @constructor
* @param {Object} book -  Representa um livro
* @param {Array} options - Opções de estantes para a troca do livro
* @param {Function} onChangeBookShelf - Função responsável por atualizar a estante de um livro
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