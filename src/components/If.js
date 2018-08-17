import PropTypes from 'prop-types';
/**
* @description 
* Componente que representacional da condicional IF.
* Se o test for true, retorna o componente passado, caso contrário retorna o children
* @constructor
*
* @constructor
* @param {boolean} test      Resultado do test
* @param {Array} children    Children do componente 
* @param {Object} component  Componente 
*/

const If = ({ test, children, component }) => (test ? component : children);

If.propTypes = {
    test: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired,
    component: PropTypes.any.isRequired,
}

export default If;