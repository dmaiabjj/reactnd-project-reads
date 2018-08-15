import {pipe} from "../helpers/Helpers"

  /**
   * @description Pega os livros no formato padrão da API e converte para um formato mais sucinto, 
   * contendo apenas as propriedades que serão utilizadas
   * @param   {Array} books  todos os livros da estante
   *
   * @returns {Array} de livros no formato novo
   */
  export function transformBook(books)
  {
   return books.map((book) => {
      return {
        id      : book.id,
        title   : book.title,
        description : book.description,
        authors : book.authors ? book.authors.join(",") : "",
        image   : book.imageLinks.smallThumbnail,
        shelf   : book.shelf
      };
    });
    
  }

   /**
   * @description Pega os livros do usuário já convertidos no formato da app 
   * e retorna o objeto que representa as estantes
   * @param   {Array} books  todos os livros da estante do usuário
   *
   * @returns {Object} que representa as estantes com seus respectivos livros
   */
  export function bindShelfs(books) {
    
    return filter(books).reduce(createInitialObj,shelfs());

  /**
   * @description Definindo as estantes padrões que serão mostradas sempre
   * 
   * @returns {Array} de objetos shelf, contendo as definições padrões da estante
   */
  function shelfs() {
    return [
      {id:"currentlyReading",name:"Currently Reading",books:[],order:1},
      {id:"wantToRead",name:"Want To Read",books:[],order:2},
      {id:"read",name:"Read",books:[],order:3}
    ];
  }


   /**
   * Pega os livros do usuário e retorna somente os livros que se encontram nas estantes que default
   * @param   {Array} books  todos os livros da estante do usuário
   *
   * @returns {Array} retorna os livros filtrados
   */
    function filter(books) {
      const shelf = shelfs().map(s => s.id);
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