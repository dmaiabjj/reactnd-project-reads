import React from "react"
import SearchBook from '../../components/SearchBook'
import BookGrid from '../../components/BookGrid'
import Alert   from '../../components/Alert'
import LinearProgress from '@material-ui/core/LinearProgress';
import If   from '../../components/If'
import {Link} from "react-router-dom"
import ReactRouterEnzymeContext from 'react-router-enzyme-context'

describe('[Component] SearchBook', () => {
    const props = 
    {
        books : 
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
        onInputSearchChange : jest.fn(),
        query : ""
        
    };

    const context   = new ReactRouterEnzymeContext();
    let loading     = false;
    let error       = false;
    
    it('Shallow renders correctly', () => {
        expect(shallow(<SearchBook error={error} loading={loading} {...props}></SearchBook>));
    });

    it('Expect to find Alert,AddBook and If Components nested', () => {
        const wrapper = shallow(<SearchBook error={error} loading={loading} {...props}></SearchBook>,context.get());
        expect(wrapper.containsMatchingElement(Link)).toBeTruthy();
        expect(wrapper.containsMatchingElement(BookGrid)).toBeTruthy();
        expect(wrapper.containsMatchingElement(Alert)).toBeTruthy();
        expect(wrapper.containsMatchingElement(If)).toBeTruthy();
        expect(wrapper.containsMatchingElement(SearchBook)).toBeTruthy();
        expect(wrapper.containsMatchingElement(LinearProgress)).toBeTruthy();
    });

    it('If loading is true expect to exists LinearProgress Component nested', () => {
        loading = true;
        const wrapper = mount(<SearchBook error={error} loading={loading} {...props}></SearchBook>,context.get());
        expect(wrapper.find(LinearProgress)).toHaveLength(1);
    });

    it('If loading is false expect to exists ShelfBook Components nested', () => {
        loading = false;
        const wrapper = mount(<SearchBook error={error} loading={loading} {...props}></SearchBook>,context.get());
        expect(wrapper.find(BookGrid)).toHaveLength(1);
    });

    it('Check if the onInputSearchChange is been called', () => {
        const wrapper = shallow(<SearchBook error={error} loading={loading} {...props}></SearchBook>,context.get());
        wrapper.find('input').simulate('change');
        expect(props.onInputSearchChange).toHaveBeenCalledTimes(1)
    });

});
