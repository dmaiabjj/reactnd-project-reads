import React from "react"
import {Link} from "react-router-dom"

function AddBook() {
    return (
        <div className="open-search">
            <Link to="/add">Add a book</Link>
        </div>
    )
}

export default AddBook