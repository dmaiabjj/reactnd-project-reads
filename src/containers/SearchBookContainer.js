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
    

    searchQuery = _.debounce((query) => {
        this.setState({query,loading:true});
        BooksAPI.search(query).then((items) => {
            const books = Array.isArray(items) ? transformBook(items) : [];
            this.setState({books,loading:false});
        }).catch((error) => {
            console.log("Error",error);
        });
    }, 300);


    isEmpty = (query) => {
        !_.isEmpty(query) || this.setState({query,loading:false,books:[]});
        return query;
    }

    hasValue = (query) => {
        _.isEmpty(query) || this.searchQuery(query)
    }


    onInputSearchChange = (event) => {
        event.preventDefault();
        const query = event.target.value;
        pipe(this.isEmpty,this.hasValue)(query)
    }
    
    render() {
        return <SearchBook {...this.state} onInputSearchChange={this.onInputSearchChange} {...this.props}/>
    }
  }

  SearchBookContainer.propTypes = {
   onChangeBookShelf: PropTypes.func.isRequired,
   options: PropTypes.array.isRequired
}

export default SearchBookContainer