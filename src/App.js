import React from "react"
import * as BooksAPI from './BooksAPI'
import "./App.css"
import { Route } from "react-router-dom"
import ShelfBookGroup from "./components/ShelfBookGroup"
import SearchBookContainer from "./containers/SearchBookContainer"
import _ from "lodash"
import {pipe} from "./helpers/Helpers"
import {transformBook} from "./utils/Util"

class BooksApp extends React.Component {
  /**
   * @description Definindo as estantes padrões que serão mostradas sempre
   * 
   * @returns {Array} de objetos shelf, contendo as definições padrões da estante
   */
  shelfs = () => {
    return [
      {id:"currentlyReading",name:"Currently Reading",books:[],order:1},
      {id:"wantToRead",name:"Want To Read",books:[],order:2},
      {id:"read",name:"Read",books:[],order:3}
    ];
  }

  state = {
    shelfs  : this.shelfs(),
    options : this.shelfs().map((s) => {
      return {
        id: s.id,
        name: s.name
      }
    },),
    loading : true
  };

  
  
  /* Life Cycle Events*/ 
  async componentDidMount() {
    const shelfs  = await this.bindApiShelfBooks();
    this.setState({shelfs,loading:false});
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
   return BooksAPI.getAll().then(transformBook).then(this.bindShelfs);
  }
  

  /**
   * @description Pega os livros do usuário já convertidos no formato da app 
   * e retorna o objeto que representa as estantes
   * @param   {Array} books  todos os livros da estante do usuário
   *
   * @returns {Object} que representa as estantes com seus respectivos livros
   */
  bindShelfs = (books) => {
    const self = this;

    return filter(books).reduce(createInitialObj,this.shelfs());

   /**
   * Pega os livros do usuário e retorna somente os livros que se encontram nas estantes que default
   * @param   {Array} books  todos os livros da estante do usuário
   *
   * @returns {Array} retorna os livros filtrados
   */
    function filter(books) {
      const shelf = self.shelfs().map(s => s.id);
      return books.filter((b) => shelf.includes(b.shelf));
    }


  /**
   * @description Cria o objeto padrão da app, que representa as estantes com seus livros
   * @param   {Object} shelfs objeto que representa as estantes
   * @param   {Array} books  todos os livros do usuário
   *
   * @returns {Object} que representa as estantes com seus respectivos livros
   */
    function createInitialObj(shelfs,book) {
        const find    = findShelf(book);
        const add     = addBookOnShelf(book);
        const update  = updateShelf(book,shelfs);
        
        return pipe(find,add,update)(shelfs);
    }

    /**
     * @description Clojure que retorna uma função que retorna a estante onde o livro passado se encontra
     * @param   {Object} book objeto que representa um livro em específico
     *
     * @returns {Function} que recebe as estantes e retorna a estante especifica do livro passado anteriormente
     */
    function findShelf(book) {
      return function(shelfs=[]) {
        return shelfs.find(s => s.id === book.shelf);
      };
    }

    /**
     * @description Clojure que retorna uma função que adiciona o livro em sua estante
     * @param   {Object} book objeto que representa um livro em específico
     *
     * @returns {Function} recebe a estante responsável pelo livro passado anteriormente e o adiciona
     */
    function addBookOnShelf(book) {
        return function(shelf) {
          shelf.books.push(book);
          return shelf;
        };
    }

    /**
     * @description Clojure que retorna uma função que adiciona o livro em sua estante
     * @param   {Object} book objeto que representa um livro em específico
     * @param   {Object} shelfs objeto que representa as estantes
     *
     * @returns {Function} recebe a estante e atualiza a lista de livros com o livro passado anteriormente atualizado
     */
    function updateShelf(book,shelfs) {
      return function(shelf) {
        shelf.loading = false;
        return shelfs.filter(s => s.id !== book.shelf).concat(shelf);
      };
    }

  }


  /**
     * @description Atualiza a estante de um livro específico e gera novamente o objeto que representa todas as estantes e atualiza o State
     * @param   {Object} book objeto que representa um livro a ser atualizado
     * @param   {Event} event objeto do evento responsável pela atualização da estante do livro em questão
  */
  onChangeBookShelf = (book,event) =>{
     event.preventDefault();
      this.setState({loading:true});
      const shelf = event.target.value;
      BooksAPI.update(book,shelf).then(() => {
        book.shelf   = shelf;
        const books  =  _.flatMap(this.state.shelfs.map(s => s.books)).filter(b => b.id !== book.id).concat(book);
        const shelfs = this.bindShelfs(books);
        this.setState({shelfs,loading:false});
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
          <SearchBookContainer onChangeBookShelf={this.onChangeBookShelf} options={this.state.options}/>
        }
        />
        </div>
    )
  }
}

export default BooksApp
