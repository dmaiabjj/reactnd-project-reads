import React from "react"
import BookGrid from '../../components/BookGrid'
import Book from '../../components/Book'


describe('[Component] BookGrid', () => {
    const props = {
        books : [{
                    id          : "1",
                    title       : "Title",
                    description : "Description",
                    authors     : "Author",
                    image       : "Image",
                    shelf       : "read"
                },
                {
                    id          : "2",
                    title       : "Title 2",
                    description : "Description 2",
                    authors     : "Author 2",
                    image       : "Image 2",
                    shelf       : "read"
                },
                {
                    id          : "3",
                    title       : "Title 3",
                    description : "Description 3",
                    authors     : "Author 3",
                    image       : "Image 3",
                    shelf       : "read"
                }
        ],
        options :
        [
            {id:"currentlyReading",name:"Currently Reading"},
            {id:"wantToRead",name:"Want To Read"},
            {id:"read",name:"Read"}
        ],
        onChangeBookShelf : jest.fn()
        
    }
   
    it('Shallow renders correctly', () => {
        expect(shallow(<BookGrid {...props}></BookGrid>));
    });

    it('Mount renders correctly', () => {
        const wrapper = mount(<BookGrid {...props}></BookGrid>);
        expect(wrapper).toMatchSnapshot();
    });

    it('Expect to find Book Components nested', () => {
        const wrapper = mount(<BookGrid {...props}></BookGrid>);
        expect(wrapper.find(Book)).toHaveLength(props.books.length);
    });


});
