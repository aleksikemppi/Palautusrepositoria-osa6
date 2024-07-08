import { filterAnecdote } from "../reducers/filterReducer";
import { useDispatch, useSelector } from "react-redux";

const SearchFilter = ({ updateQuery }) => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    updateQuery(e.target.value);
    dispatch(filterAnecdote(e.target.value));
  };

  const inputStyle = {
    marginBottom: 10,
  };

  return (
    <div style={inputStyle}>
      filter <input onChange={handleInputChange} />
      {/* {filterValue} */}
    </div>
  );
};

export default SearchFilter;
