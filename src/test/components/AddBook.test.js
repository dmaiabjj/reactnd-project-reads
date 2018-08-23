import React from 'react'
import AddBook from '../../components/AddBook'
import {Link} from "react-router-dom"
import ReactRouterEnzymeContext from 'react-router-enzyme-context'

describe('[Component] AddBook', () => {
    const context = new ReactRouterEnzymeContext();

    it('Shallow renders correctly', () => {
        expect(shallow(<AddBook />));
    });

    it('Expect to find a Link inside', () => {
        const wrapper = mount(<AddBook/>,context.get());
        expect(wrapper.find(Link)).toHaveLength(1);
    });
    
});
