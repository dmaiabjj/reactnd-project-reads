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

   /**
   * @description 
   * Efetua uma chamada pra API retornando os livros contidos nas estantes padrões e adiciona no estado da aplicação
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
   * @description 
   * Efetua uma varredura nas estantes contidas no estado da aplicação e retorna a lista contendo todos os livros
   *
   * @returns {Array} Lista de livros
   */
  getBooks = () => {
    return _.flatMap(this.state.shelfs.map(s => s.books));
  }

  /**
  * @description 
  * Recebe uma lista de livros, agrupando - os cada um em sua respectiva estante, gerando um objeto
  * representando a estante e seus livros, adicionando em um lista que irá ser retornada
  * 
  * @param   {Array} books   Lista de livros
  *
  * @returns {Array}         Lista contendo objetos representando uma estante com seus livros
  */
  bind = (books) => {
    return bindShelfs(books);
  }

  /**
   * @description 
   * Recebe um livro e retorna uma função que irá receber uma lista de livros
   * 
   * @param   {Object} book   Livro
   *
   * @returns {Function} Função que irá receber uma lista de livros e irá atualizar o livro passado anteriormente dentro dessa lista
   */
  filterBook = (book) => {
    return function(books) {
      return books.filter(b => b.id !== book.id).concat(book);
    };
  }

  /**
  * @description
  * Recebe uma lista de estantes e atualiza o estado da aplicação 
  * 
  * @param   {Array}  shelfs Estantes
  */
  end = (shelfs) => {
    this.setState({shelfs,loading:false});
  }
  
  /**
     * @description 
     * Recebe um livro e o evento que representa a mudança do livro de estante e executa a troca para a nova estante
     * chamando a API e também atualizando o estado da aplicação
     * 
     * @param   {Object} book Livro
     * @param   {Event} event Evento 
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
