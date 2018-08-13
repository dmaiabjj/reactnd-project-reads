import React from "react"
import ShelfBookChanger from "./ShelfBookChanger"

const Book = ({book,options}) => {
    const dStyle = {
        width: 128,
        height: 174,
        backgroundImage: `url(${book.image})`
    }

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={dStyle}></div>
                <ShelfBookChanger shelf={book.shelf} options={options} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    )
}


export default Book