import React from 'react'
import If from '../../components/If'


describe('[Component] If', () => {
    const children  = <div>Children</div>
    const component = <div>Component</div>
    
    it('Shallow renders correctly', () => {
        expect(shallow(<If test={true} component={component}> {children}</If>));
    });

    it('Mount renders correctly', () => {
        const wrapper = mount(<If test={true} component={component}> {children}</If>);
        expect(wrapper).toMatchSnapshot();
    });

    it('Returns component if test is true', () => {
       const wrapper = mount(<If test={true} component={component}> {children}</If>);
       expect(wrapper.find('div').text()).toEqual("Component")
    });

    it('Returns component if test is false', () => {
        const wrapper = mount(<If test={false} component={component}> {children}</If>);
        expect(wrapper.find('div').text()).toEqual("Children")
     });
    
});
