import React from "react"
import ShelfBook from "./ShelfBook"
import AddBook from "./AddBook"

const ShelfBookGroup = ({shelfs,options})=> {
   return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {
                        shelfs.map(shelf => {
                            return <ShelfBook key={shelf.id} shelf={shelf} options={options}/>
                        })
                    }
        
                </div>
        
            </div>
            <AddBook/>
        </div>
    )
}

export default ShelfBookGroup