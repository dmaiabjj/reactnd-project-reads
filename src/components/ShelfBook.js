import React from "react"
import Book from "./Book"

const ShelfBook = ({shelf,options})=> {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        shelf.books.map(book => {
                            return  <li key={book.id}>
                                        <Book key={book.id} book={book} options={options}/>
                                    </li>
                        })
                            
                    }
                    
                </ol>
            </div>
        </div>
        
    )
}

export default ShelfBook