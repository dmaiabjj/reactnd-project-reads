import React from "react"
import * as BooksAPI from './BooksAPI'
import "./App.css"
import { Route } from "react-router-dom"
import ShelfBookGroup from "./components/ShelfBookGroup"
import SearchBookContainer from "./containers/SearchBookContainer"
import _ from "lodash"
import {transformBook,bindShelfs} from "./utils/Util"
import {pipe} from "./helpers/Helpers"

class BooksApp extends React.Component {
  
 state = {
    shelfs  : [],
    options : [],
    loading : true
  };

  /* Life Cycle Events*/ 
  componentDidMount() {
    this.bindApiShelfBooks();
  }

  /* Life Cycle Events*/ 

  /* Methods to bind Shelf*/ 
  
  /**
   * @description Faz a chamada pra API retornando todos livros do usuário
   * e retorna o objeto que representa as estantes
   *
   * @returns {Object} que representa as estantes com seus respectivos livros
   */
  bindApiShelfBooks = () => {
   return BooksAPI.getAll().then(transformBook).then(bindShelfs).then((shelfs) => {
   const options = shelfs.map((s) => {
      return {
        id: s.id,
        name: s.name
      }
    });

    this.setState({shelfs,options,loading:false})
   });
  }

  /**
   * @description Retorna todos os livros das estantes do usuário
   *
   * @returns {Array} lista livros
   */
  getBooks = () => {
    return _.flatMap(this.state.shelfs.map(s => s.books));
  }

  /**
   * @description Gera um array de objetos que representa a estante com seus respectivos livros
   * @param   {Array} books todos os livros do usuário
   * @returns {Array} lista das estantes do usuário com seus livros
   */
  bind = (books) => {
    return bindShelfs(books);
  }

  /**
   * @description Clojure que retorna a lista de livros com o livro atualizado anteriormente setado
   * @param   {Object} book Livro a ser atualizado na lista de livros
   * @returns {Function} Função que recebe uma lista de livros e atualiza com o livro pré-setado
   */
  filterBook = (book) => {
    return function(books) {
      return books.filter(b => b.id !== book.id).concat(book);
    };
  }

  /**
   * @description Atualiza o state com as estantes do usuário 
   * @param   {Object} lista das estantes do usuário com seus livros
   */
  end = (shelfs) => {
    this.setState({shelfs,loading:false});
  }
  
  /**
     * @description Atualiza a estante de um livro específico e gera novamente o objeto que representa todas as estantes e atualiza o State
     * @param   {Object} book objeto que representa um livro a ser atualizado
     * @param   {Event} event objeto do evento responsável pela atualização da estante do livro em questão
  */
  onChangeBookShelf = (book,event) => {
      event.preventDefault();
      this.setState({loading:true});
      const shelf = event.target.value;
      BooksAPI.update(book,shelf).then(() => {
        book.shelf   = shelf;
        const filter = this.filterBook(book)
        pipe(filter,this.bind,this.end)(this.getBooks())
      })
      
  }
  

  /* Methods to bind Shelf*/ 

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => 
          <ShelfBookGroup shelfs={this.state.shelfs} options={this.state.options} loading={this.state.loading} onChangeBookShelf={this.onChangeBookShelf} />
        }
        />
        <Route exact path="/add" render={() => 
          <SearchBookContainer collection={this.getBooks} onChangeBookShelf={this.onChangeBookShelf} options={this.state.options}/>
        }
        />
        </div>
    )
  }
}

export default BooksApp
