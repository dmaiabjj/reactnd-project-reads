import React from "react"
import {Link} from "react-router-dom"
import BookGrid from "./BookGrid"
import LinearProgress from '@material-ui/core/LinearProgress';
import If from "../components/If"

/**
* @description Representa o grid de livros
* @constructor
* @param {Array} books -  Representa a estante
* @param {Array} options - Opções de estantes para a troca do livro
* @param {Function} onChangeBookShelf - Função responsável por atualizar a estante de um livro
* @param {Function} onInputSearchChange - Função responsável por atualizar a query no state e fazer a busca via API
* @param {String} query - Termo a ser procurado na API de busca
* @param {boolean} loading - Parâmetro que indica se a app está processando as informações
*/
const SearchBook = ({books,options,onChangeBookShelf,onInputSearchChange,query,loading}) =>
{
  return (
        <div className="search-books">
            <div className="search-books-bar">
             <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={(e) => {onInputSearchChange(e)}} value={query}/>
              </div>
            </div>
            <div className="search-books-results">
            <If test={loading} component={ <LinearProgress/>}>
              <BookGrid books={books} options={options} onChangeBookShelf={onChangeBookShelf}/>
            </If>
            </div>
        </div>
    )
}

export default SearchBook