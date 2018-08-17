import React from "react"
import If from "../../components/If"

describe("[Component] If",() => {
    const test      = false;
    const children  = () => <p>Children</p>;
    const component = () => <p>Component</p>;

    it("returns children if test is false", () => {
        const wrapper = shallow(
            <If test={test} component={component}>
                {children}
            </If>
        );
        expect(wrapper).toBe(children);

    })
})