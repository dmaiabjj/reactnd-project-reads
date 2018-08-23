import React from "react"
import SearchBookContainer from '../../containers/SearchBookContainer'
import SearchBook from '../../components/SearchBook'

describe('[Component] SearchBookContainer', () => {
    const props = 
    {
        options :
        [
            {id:"currentlyReading",name:"Currently Reading"},
            {id:"wantToRead",name:"Want To Read"},
            {id:"read",name:"Read"}
        ],
        collection : jest.fn(),
        onChangeBookShelf : jest.fn(),
        onClickAlert : jest.fn(),
        onErrorOccurred : jest.fn(),
        error : false
        
    };

    
    it('Shallow renders correctly', () => {
        expect(shallow(<SearchBookContainer {...props}></SearchBookContainer>));
    });

    it('Expect to find SearchBook Component nested', () => {
        const wrapper = shallow(<SearchBookContainer {...props}></SearchBookContainer>);
        expect(wrapper.find(SearchBook)).toHaveLength(1);
    });

});
