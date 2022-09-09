import { LabelFilter, Input } from '../PhonebookForm/PhonebookForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter/selector';
import { changeFilter } from 'redux/filter/actions';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter)
  const onChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value))
  } 
  return <LabelFilter>
    Find contacts by name
    <Input type="text" value={filter} onChange={onChangeFilter} />
  </LabelFilter>
}
