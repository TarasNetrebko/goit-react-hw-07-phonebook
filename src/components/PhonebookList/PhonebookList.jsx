import { List, Li } from './PhonebookList.styled';
import { ListElem } from '../ListElem/ListElem';
import PropTypes from 'prop-types';

export const PhonebookList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ name, id, number }) => (
        <Li key={id}>
          <ListElem contactId={id} name={name} number={number}/>
        </Li>
      ))}
    </List>
  );
};

PhonebookList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
    )
};
