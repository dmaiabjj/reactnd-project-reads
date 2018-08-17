import React from "react"
import PropTypes from 'prop-types';

/**
* @description 
* Representa a o componente responsável pela adição/troca de um livro para uma estante
*
* @constructor
* @param {Object}   book                Livro
* @param {Array}    options             Lista de estantes para adição/troca de um livro
* @param {Function} onChangeBookShelf   Função responsável por efetuar a adição/troca do livro para uma estante
*/

const ShelfBookChanger = ({book,options,onChangeBookShelf})=>{
    return (
        <div className="book-shelf-changer">
            <select value={book.shelf || "none"} onChange={(e) => {onChangeBookShelf(book,e)}}>
                <option value="move" disabled>Move to...</option>
                {
                    options.map(option => {
                        return <option key={option.id} value={option.id}>{option.name}</option>
                    })
                }
                <option value="none">None</option>
            </select>
        </div>
    )
}

ShelfBookChanger.propTypes = {
    book: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired,
}

export default ShelfBookChanger