const SearchBar = ({ type }) => {
  return (
    <input className="searchbar" type="text" placeholder={`search ${type}`} />
  );
};

export default SearchBar;
