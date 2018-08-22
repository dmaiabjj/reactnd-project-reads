import React from "react"
import Book from "./Book"
import PropTypes from 'prop-types';


const propTypes = {
    books               : PropTypes.array.isRequired,
    options             : PropTypes.array.isRequired,
    onChangeBookShelf   : PropTypes.func.isRequired
};

/**
* @description 
* Componente que representa a coleção de livros
*
* @constructor
* @param {Array} books                  Lista de livros
* @param {Array} options                Lista de estantes para adição/troca de um livro
* @param {boolean}  error               True - Se aconteceu um erro | False - Se não houve um erro
* @param {Function} onChangeBookShelf   Função responsável por efetuar a adição/troca do livro para uma estante
*/
function BookGrid({books,options, onChangeBookShelf}) {
    return (
        <div>
            <ol className="books-grid">
                {
                    books.map(book => {
                        return (
                                <li key={book.id}>
                                    <Book 
                                        key={book.id} 
                                        book={book} 
                                        options={options} 
                                        onChangeBookShelf={onChangeBookShelf}
                                    />
                                </li>
                        );
                    })
                }
                        
            </ol>
        </div>
    )
}

BookGrid.propTypes = propTypes;

export default BookGrid