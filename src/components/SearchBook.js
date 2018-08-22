import React from "react"
import {Link} from "react-router-dom"
import BookGrid from "./BookGrid"
import LinearProgress from '@material-ui/core/LinearProgress';
import If from "../components/If"
import PropTypes from 'prop-types';
import Alert from "./Alert"

const propTypes = {
  books               : PropTypes.array.isRequired,
  options             : PropTypes.array.isRequired,
  onChangeBookShelf   : PropTypes.func.isRequired,
  onInputSearchChange : PropTypes.func.isRequired,
  query               : PropTypes.string.isRequired,
  loading             : PropTypes.bool.isRequired,
  error               : PropTypes.bool.isRequired,
  onClickAlert        : PropTypes.func.isRequired
};

/**
* @description 
* Componente que representa a página de busca
*
* @constructor
* @param {Array}    books               Lista de livros
* @param {Array}    options             Lista de estantes para adição/troca de um livro
* @param {Function} onChangeBookShelf   Função responsável por efetuar a adição/troca do livro para uma estante
* @param {Function} onInputSearchChange Função responsável por atualizar a query e fazer a busca na API
* @param {Function} onClickAlert        Função reponsável por fechar o Alert
* @param {String}   query               Termo a ser procurado na API de busca
* @param {boolean}  loading             Indica se a app está processando as informações
* @param {boolean}  error               True - Se aconteceu um erro | False - Se não houve um erro
*/

function SearchBook({books,options,onChangeBookShelf,onInputSearchChange,onClickAlert,query,loading,error}) {
  return (
     
        <div className="search-books">
            <div className="search-books-bar">
             <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={(e) => {onInputSearchChange(e)}} value={query}/>
              </div>
            </div>
            <div className="search-books-results">
            <If test={loading} component={ <LinearProgress />}>
              <BookGrid 
                books={books} 
                options={options} 
                onChangeBookShelf={onChangeBookShelf} 
              />
            </If>
            <Alert error={error} onClickAlert={onClickAlert}/>
            </div>
        </div>
    )
}

SearchBook.propTypes = propTypes;

export default SearchBook