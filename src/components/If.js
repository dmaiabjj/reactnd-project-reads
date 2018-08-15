import PropTypes from 'prop-types';

/**
* @description Componente que representa a condicional IF. Se o test for true, retorna o componente passado, caso contrário retorna o children
* @constructor
* @param {boolean} test     - Teste a ser efetuado
* @param {Array} children   - Children do componente a ser mostrado caso o teste seja false
* @param {Object} component - Componente a ser mostrado caso o teste seja true
*/
const If = ({ test, children, component }) => (test ? component : children);

If.propTypes = {
    test: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired,
    component: PropTypes.object.isRequired,
}

export default If;