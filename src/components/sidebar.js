const Sidebar = ({ type }) => {
  return (
    <div className="sideBar">
      <div>{type}</div>
      <div>
        <input type="button" value="all" />
        <input type="button" value="owner" />
        <input type="button" value="dealer" />
      </div>

      <input
        className="checkbox-filter"
        type="checkbox"
        name="checkbox-1"
        id="checkbox-1"
      />
      <label for="checkbox-1">search titles only</label>
      <input
        className="checkbox-filter"
        type="checkbox"
        name="checkbox-2"
        id="checkbox-2"
      />
      <label for="checkbox-2">has image</label>
      <input
        className="checkbox-filter"
        type="checkbox"
        name="checkbox-3"
        id="checkbox-3"
      />
      <label for="checkbox-3">posted today</label>
      <input
        className="checkbox-filter"
        type="checkbox"
        name="checkbox-4"
        id="checkbox-4"
      />
      <label for="checkbox-4">bundle duplicates</label>
      <input
        className="checkbox-filter"
        type="checkbox"
        name="checkbox-5"
        id="checkbox-5"
      />
      <label for="checkbox-5">include nearby areas</label>
    </div>
  );
};

export default Sidebar;
