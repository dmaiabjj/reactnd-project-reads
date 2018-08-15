import React from "react"
import * as BooksAPI from '../BooksAPI'
import SearchBook from "../components/SearchBook"
import PropTypes from 'prop-types';
import {transformBook} from "../utils/Util"
import _ from "lodash"
import { pipe } from "../helpers/Helpers"
/**
* @description Componente statefull responsável por manter o state da página de busca
* @constructor
* @param {Function} onChangeBookShelf - Função responsável por atualizar a estante de um livro
* @param {Array} options - Opções de estantes para a troca do livro
*/
class SearchBookContainer extends React.Component {
    state = { query: "",books:[],loading : false };
    

    /**
    * @description Chama a API buscando os livros relacionado ao termo passado
    * @param   {string} query termo para efetuar a busca de livros
    * @param   {Array} books  todos os livros do usuário
    */
    searchQuery = _.debounce((query) => {
        this.setState({query,loading:true});
        BooksAPI.search(query).then((items) => {
            return Array.isArray(items) ? transformBook(items) : [];
        }).then((books) => {
            const collection   = this.props.collection();
            const intersection = _.intersectionBy(collection, books, 'id');
            books = _.unionBy(intersection,books,'id');
            this.setState({books,loading:false});
        }).catch((error) => {
            console.log("Error",error);
        });
    }, 100);


    /**
    * @description Verifica se o termo para a busca está vazio e atualiza o state
    * @param   {string} query termo para efetuar a busca de livros
    *
    * @returns {string} retorna o próprio termo
    */
    isEmpty = (query) => {
        !_.isEmpty(query) || this.setState({query,loading:false,books:[]});
        return query;
    }

    /**
    * @description Verifica se o termo para a busca não é vazio e atualiza o state
    * @param   {string} query termo para efetuar a busca de livros
    */
    hasValue = (query) => {
        _.isEmpty(query) || this.searchQuery(query);
    }


    /**
    * @description Efetua os passos a serem efetuadas antes de chamar a API de busca de livros
    * @param  {Event} event objeto do evento responsável pela atualização do termo da busca
    */
    onInputSearchChange = (event) => {
        event.preventDefault();
        const query = event.target.value;
        pipe(this.isEmpty,this.hasValue)(query);
    }
    
    render() {
        return <SearchBook {...this.state} onInputSearchChange={this.onInputSearchChange} {...this.props}/>
    }
  }

  SearchBookContainer.propTypes = {
    collection: PropTypes.func.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
}

export default SearchBookContainer