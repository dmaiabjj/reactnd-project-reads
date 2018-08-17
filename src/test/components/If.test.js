import React from 'react'
import If from '../../components/If'



describe('[Component] If', () => {
    const test      = false;
    const children  = <div>Children</div>
    const component = <div>Component</div>
    
    it('shallow renders correctly', () => {
        expect(shallow(<If test={test} children={children} component={component}/>))
    })

    it('returns children if test is false', () => {
        const wrapper = shallow(<If test={test} children={children} component={component}/>);
        expect(wrapper).toBe(children);
    })
})
