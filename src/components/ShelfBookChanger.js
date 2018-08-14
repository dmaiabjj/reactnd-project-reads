import React from "react"
import PropTypes from 'prop-types';


/**
* @description Componente que demonstra as estantes atuais para a troca do livro
* @constructor
* @param {Object} book -  Representa um livro
* @param {Array} options - Opções de estantes para a troca do livro
* @param {Function} onChangeBookShelf - Função responsável por atualizar a estante de um livro
*/
const ShelfBookChanger = ({book,options,onChangeBookShelf})=>{
    return (
        <div className="book-shelf-changer">
            <select value={book.shelf} onChange={(e) => {onChangeBookShelf(book,e)}}>
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