import React from "react"
import ShelfBook from "./ShelfBook"
import AddBook from "./AddBook"
import _ from "lodash"
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import If from "./If"


/**
* @description 
* Representa a lista de Estantes que compreende a página inicial da Aplicação
* @constructor
* @param {Array}    shelfs              Lista de estantes
* @param {Array}    options             Lista de estantes para adição/troca de um livro
* @param {Function} onChangeBookShelf   Função responsável por efetuar a adição/troca do livro para uma estante
* @param {boolean}  loading             Indica se a app está processando as informações
*/

const ShelfBookGroup = ({shelfs,options,onChangeBookShelf,loading})=> {
   return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <If test={loading} component={ <LinearProgress/>}>
                    {
                        _.orderBy(shelfs, ['order']).map(shelf => {
                            return <ShelfBook key={shelf.id} shelf={shelf} options={options} onChangeBookShelf={onChangeBookShelf}/>
                        })
                    }
                    </If>
                </div>
            </div>
            <AddBook/>
        </div>
    )
}

ShelfBookGroup.propTypes = {
    shelfs: PropTypes.array.isRequired,
    options: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default ShelfBookGroup