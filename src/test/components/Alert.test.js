import React from 'react'
import Alert from '../../components/Alert'

describe('[Component] Alert', () => {
    const props = {
        error : false,
        onClickAlert : jest.fn()
    }
    
    it('Shallow renders correctly', () => {
        expect(shallow(<Alert {...props}></Alert>));
    });

    it('mount renders correctly', () => {
        const wrapper = mount(<Alert {...props}></Alert>);
        expect(wrapper).toMatchSnapshot();
    });

    

});
