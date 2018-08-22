import React from "react"
import BookGrid from '../../components/BookGrid'
import ShelfBook from '../../components/ShelfBook'


describe('[Component] ShelfBook', () => {
    const props = 
    {
        shelf : 
        {
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
        options :
        [
            {id:"currentlyReading",name:"Currently Reading"},
            {id:"wantToRead",name:"Want To Read"},
            {id:"read",name:"Read"}
        ],
        onChangeBookShelf : jest.fn()
        
    }
   
    it('Shallow renders correctly', () => {
        expect(shallow(<ShelfBook {...props}></ShelfBook>));
    });

    it('Mount renders correctly', () => {
        const wrapper = mount(<ShelfBook {...props}></ShelfBook>);
        expect(wrapper).toMatchSnapshot();
    });

    it('Check if shelf name is rendered', () => {
        const wrapper = shallow(<ShelfBook {...props}></ShelfBook>);
        expect(wrapper.find('.bookshelf-title').text()).toBeDefined();
        expect(wrapper.find('.bookshelf-title').text()).not.toBeNull();
        expect(wrapper.find('.bookshelf-title').text()).toEqual(props.shelf.name);
    });

    it('Expect to find BookGrid Components nested', () => {
        const wrapper = mount(<ShelfBook {...props}></ShelfBook>);
        expect(wrapper.find(BookGrid)).toHaveLength(1);
    });


});
