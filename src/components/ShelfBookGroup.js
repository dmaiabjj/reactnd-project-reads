import React from "react"
import ShelfBook from "./ShelfBook"
import AddBook from "./AddBook"
import _ from "lodash"
const ShelfBookGroup = ({shelfs,options,onChangeBookShelf})=> {
   return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {
                        _.orderBy(shelfs, ['order']).map(shelf => {
                            return <ShelfBook key={shelf.id} shelf={shelf} options={options} onChangeBookShelf={onChangeBookShelf}/>
                        })
                    }
        
                </div>
        
            </div>
            <AddBook/>
        </div>
    )
}

export default ShelfBookGroup