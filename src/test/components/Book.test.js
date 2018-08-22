import React from 'react'
import Book from '../../components/Book'
import ShelfBookChanger from '../../components/ShelfBookChanger'



describe('[Component] Book', () => {
    const props = {
        book : {
            id          : "1",
            title       : "Title",
            description : "Description",
            authors     : "Author",
            image       : "Image",
            shelf       : "read"
        },
        options :
        [
            {id:"currentlyReading",name:"Currently Reading"},
            {id:"wantToRead",name:"Want To Read"},
            {id:"read",name:"Read"}
        ],
        onChangeBookShelf : jest.fn()
        
    }
   
    it('Shallow renders correctly', () => {
        expect(shallow(<Book {...props}></Book>));
    });

    it('Mount renders correctly', () => {
        const wrapper = mount(<Book {...props}></Book>);
        expect(wrapper).toMatchSnapshot();
    });

    it('Expect to find a ShelfBookChanger inside', () => {
        const wrapper = mount(<Book {...props}></Book>);
        expect(wrapper.find(ShelfBookChanger)).toHaveLength(1);
    });

    it('Check if book title is rendered', () => {
        const wrapper = shallow(<Book {...props}></Book>);
        expect(wrapper.find('.book-title').text()).toBeDefined();
        expect(wrapper.find('.book-title').text()).not.toBeNull();
        expect(wrapper.find('.book-title').text()).toEqual(props.book.title);
    });

    it('Check if book authors is rendered', () => {
        const wrapper = shallow(<Book {...props}></Book>)

        expect(wrapper.find('.book-authors').text()).toBeDefined();
        expect(wrapper.find('.book-authors').text()).not.toBeNull();
        expect(wrapper.find('.book-authors').text()).toEqual(props.book.authors);
    });


});
