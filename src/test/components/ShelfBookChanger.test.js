import React from 'react'
import ShelfBookChanger from '../../components/ShelfBookChanger'




describe('[Component] ShelfBookChanger', () => {
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
        expect(shallow(<ShelfBookChanger {...props}></ShelfBookChanger>));
    });

    it('mount renders correctly', () => {
        const wrapper = mount(<ShelfBookChanger {...props}></ShelfBookChanger>);
        expect(wrapper).toMatchSnapshot();
     });


    it('Check if the selected value is related with the book instance', () => {
        const wrapper = shallow(<ShelfBookChanger {...props}></ShelfBookChanger>);
        expect(wrapper.find('select').props().value).toEqual(props.book.shelf);
    });


    it('Check length of select options', () => {
        const wrapper = shallow(<ShelfBookChanger {...props}></ShelfBookChanger>);
        expect(wrapper.find('option')).toHaveLength(props.options.length + 2);
    });


    it('Check if the onChangeBookSelf is been called', () => {
        const wrapper = shallow(<ShelfBookChanger {...props}></ShelfBookChanger>);
        wrapper.find('select').simulate('change');
        expect(props.onChangeBookShelf).toHaveBeenCalledTimes(1)
    });
});
