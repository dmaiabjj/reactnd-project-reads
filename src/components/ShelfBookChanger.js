import React from "react"
import PropTypes from 'prop-types';

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