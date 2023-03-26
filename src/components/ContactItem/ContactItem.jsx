import { ContactLi } from './ContactItem.styled';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDelete }) => (
    <ContactLi>
        <span>{name}</span>:
        <span>{number}</span>
        <button type='button' onClick={() => {onDelete(id)}}>DELETE</button>
    </ContactLi>
);

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired, 
    onDelete: PropTypes.func.isRequired,
}
export default ContactItem;