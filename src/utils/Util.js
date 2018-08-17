import {pipe} from "../helpers/Helpers"

/**
 * @description 
 * Recebe uma lista de livros em um formato completo e os converte em um formato reduzido, 
 * contendo apenas as propriedades mais importantes
 * 
 * @param   {Array} books Lista de livros
 *
 * @returns {Array}       Lista de livros convertidas
 */
export function transformBook(books)
{
 return books.map((book) => {
    return {
      id      : book.id,
      title   : book.title,
      description : book.description,
      authors : book.authors ? book.authors.join(",") : "",
      image   : book.imageLinks ? book.imageLinks.smallThumbnail : "",
      shelf   : book.shelf
    };
  });
  
}

 /**
 * @description 
 * Recebe uma lista de livros, agrupando - os cada um em sua respectiva estante, gerando um objeto
 * representando a estante com seus livros e adicionando em um lista que irá ser retornada
 * 
 * @param   {Array} books   Lista de livros
 *
 * @returns {Array}         Lista contendo objetos representando uma estante com seus livros
 */
export function bindShelfs(books) {
  
  return filter(books).reduce(createInitialObj,shelfs());
/**
 * @description 
 * Definindo as estantes padrões e seus formatos iniciais
 * 
 * @returns {Array} Lista contendo objetos representando uma estante com seus livros em seu formato inicial
 */
function shelfs() {
  return [
    {id:"currentlyReading",name:"Currently Reading",books:[],order:1},
    {id:"wantToRead",name:"Want To Read",books:[],order:2},
    {id:"read",name:"Read",books:[],order:3}
  ];
}
 /**
 * @description
 * Recebe uma lista de livros e retorna apenas aqueles que estão contidos nas estantes padrões
 * 
 * @param   {Array} books  Lista de livros
 *
 * @returns {Array}        Lista de livros filtrados pelas estantes padrões
 */
function filter(books) {
  const shelf = shelfs().map(s => s.id);
  return books.filter((b) => shelf.includes(b.shelf));
}

/**
 * @description 
 * Recebe uma lista de estantes e um livro específico para ser adicionado a estante na qual ele pertence e que está
 * contida na lista
 * 
 * @param   {Array}  shelfs  Lista de estantes
 * @param   {Object} book    Livro
 *
 * @returns {Array}          Lista contendo objetos representando uma estante com seus livros
 */
  function createInitialObj(shelfs,book) {
      const find    = findShelf(book);
      const add     = addBookOnShelf(book);
      const update  = updateShelf(book,shelfs);
      
      return pipe(find,add,update)(shelfs);
  }
  /**
   * @description 
   * Recebe um livro e retorna uma função que irá receber uma lista de estantes e irá retornar a estante referente ao livro
   * passado 
   * 
   * @param   {Object} book Livro
   *
   * @returns {Function} Função que irá receber uma lista de estantes e retornar a estante filtrada pelo livro passado anteriormente
   */
  function findShelf(book) {
    return function(shelfs=[]) {
      return shelfs.find(s => s.id === book.shelf);
    };
  }
  /**
   * @description 
   * Recebe um livro e retorna uma função que irá receber uma estante na qual o livro irá ser adicionado
   * 
   * @param   {Object} book Livro
   *
   * @returns {Function} Função que irá receber uma estante e adicionar o livro passado anteriormente
   */
  function addBookOnShelf(book) {
      return function(shelf) {
        shelf.books.push(book);
        return shelf;
      };
  }
  /**
   * @description 
   * Recebe um livro e uma lista de estantes e retorna uma função que irá receber uma estante a ser atualizada na lista
   * 
   * @param   {Object} book   Livro
   * @param   {Array}  shelfs Estantes
   *
   * @returns {Function} Função que irá receber uma estante a ser atualizada na lista passada anteriormente
   */
  function updateShelf(book,shelfs) {
    return function(shelf) {
      shelf.loading = false;
      return shelfs.filter(s => s.id !== book.shelf).concat(shelf);
    };
  }
}