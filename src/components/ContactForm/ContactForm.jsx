import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ContactForm extends Component {
    static propTypes = {
        state: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        })
    };
    state = {
        name: '',
        number: '',
    }

    getName = e => {
        this.setState({ name: e.currentTarget.value });
    };
    getNumber = e => {
        this.setState({ number: e.currentTarget.value });
    };
    formSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.name, this.state.number);
        this.setState({ name: '', number: '' });

    }
    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                    onChange={this.getName}
                />
                <label htmlFor="number">Number</label>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                    onChange={this.getNumber}
                />
                <button type="submit">Add contact</button>
           </form> 
        )
    }
};

export default ContactForm;