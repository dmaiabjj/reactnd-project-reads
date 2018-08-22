import React from "react"
import ShelfBookGroup from '../../components/ShelfBookGroup'
import ShelfBook from '../../components/ShelfBook'
import AddBook   from '../../components/AddBook'
import Alert   from '../../components/Alert'
import LinearProgress from '@material-ui/core/LinearProgress';
import If   from '../../components/If'
import ReactRouterEnzymeContext from 'react-router-enzyme-context'

describe('[Component] ShelfBookGroup', () => {
    const props = 
    {
        shelfs : 
        [
            {
                id : "currentlyReading",
                name: "Currently Reading",
                books:
                [
                    {
                        id          : "1",
                        title       : "Title",
                        description : "Description",
                        authors     : "Author",
                        image       : "Image",
                        shelf       : "currentlyReading"
                    },
                    {
                        id          : "2",
                        title       : "Title 2",
                        description : "Description 2",
                        authors     : "Author 2",
                        image       : "Image 2",
                        shelf       : "currentlyReading"
                    },
                    {
                        id          : "3",
                        title       : "Title 3",
                        description : "Description 3",
                        authors     : "Author 3",
                        image       : "Image 3",
                        shelf       : "currentlyReading"
                    }
                ]
            },
            {
                id : "wantToRead",
                name: "Want To Read",
                books:
                [
                    {
                        id          : "1",
                        title       : "Title",
                        description : "Description",
                        authors     : "Author",
                        image       : "Image",
                        shelf       : "wantToRead"
                    },
                    {
                        id          : "2",
                        title       : "Title 2",
                        description : "Description 2",
                        authors     : "Author 2",
                        image       : "Image 2",
                        shelf       : "wantToRead"
                    },
                    {
                        id          : "3",
                        title       : "Title 3",
                        description : "Description 3",
                        authors     : "Author 3",
                        image       : "Image 3",
                        shelf       : "wantToRead"
                    }
                ]
            },
        ],
        options :
        [
            {id:"currentlyReading",name:"Currently Reading"},
            {id:"wantToRead",name:"Want To Read"},
            {id:"read",name:"Read"}
        ],
        onChangeBookShelf : jest.fn(),
        onClickAlert : jest.fn(),
        loading: false,
        error:false
        
    }
    
    it('Shallow renders correctly', () => {
        expect(shallow(<ShelfBookGroup {...props}></ShelfBookGroup>));
    });



});
