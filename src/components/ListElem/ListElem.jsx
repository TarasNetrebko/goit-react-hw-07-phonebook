import { ContactElement, Button } from "./ListElem.styled"
import { useDispatch } from 'react-redux';
import { deleteContact } from "redux/contacts/contacts-operations";

import PropTypes from "prop-types"

export const ListElem = ({ contactId, name, number}) => {
    const dispatch = useDispatch();
    return(<ContactElement>
        <span>{name}: {number}</span>
        <Button type="button" id={name} onClick={() => dispatch(deleteContact(contactId))}>Delete</Button>
    </ContactElement>)
}

ListElem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}
