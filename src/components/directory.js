const Directory = () => {
  return (
    <div className="directory">
      <div>
        <input type="button" value="gallery" />
      </div>
      <div>
        <input type="button" value="<<" disabled />
        <input type="button" value="< prev" disabled />
        <input
          type="text"
          value="1 - 120 / 3000"
          disabled
          style={{ textAlign: 'center' }}
        />
        <input type="button" value="next >" />
      </div>
    </div>
  );
};

export default Directory;
