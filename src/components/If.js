import PropTypes from 'prop-types';

const If = ({ test, children, component }) => (test ? component : children);

If.propTypes = {
    test: PropTypes.bool.isRequired,
    children: PropTypes.array.isRequired,
    component: PropTypes.object.isRequired,
}

export default If;