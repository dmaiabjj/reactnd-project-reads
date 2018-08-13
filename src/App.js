import React from "react"
import * as BooksAPI from './BooksAPI'
import "./App.css"
import { Route } from "react-router-dom"
import ShelfBookGroup from "./components/ShelfBookGroup"
import SearchBook from "./components/SearchBook"
import _ from "lodash"

class BooksApp extends React.Component {
  constructor()
  {
    super();
    const shelfs  = this.bindShelfBooks(BooksAPI.books)
    const options = shelfs.map(shelf => ({
      id:shelf.id,
      name:shelf.name
    }))
    this.state = {
      shelfs,
      options
    }
  }

  bindShelfBooks(books)
  {
      const shelfs = books.reduce((shelfs,book)=>{
    
      let shelf = shelfs.find(s => s.id === book.shelf)
      shelf     = shelf || { id:book.shelf, name : _.startCase(book.shelf), books : []}
      

      shelf.books.push({
        id      : book.id,
        title   : book.title,
        description : book.description,
        authors : book.authors.join(", "),
        image   : book.imageLinks.smallThumbnail,
        shelf   : book.shelf
      })

      return shelfs.filter(s => s.id !== book.shelf).concat(shelf)

    },[])

    return shelfs;
     
  }


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => 
          <ShelfBookGroup {...this.state}/>
        }
        />
        <Route exact path="/add" render={() => (
          <SearchBook/>
        )}
        />
        </div>
    )
  }
}

export default BooksApp
