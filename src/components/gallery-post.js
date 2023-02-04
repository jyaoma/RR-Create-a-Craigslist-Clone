const GalleryPost = ({ title, description, price, imageURL }) => {
  return (
    <div className="posting">
      <div>{price}</div>
      <img src={imageURL} alt={description} />
      <div>{title}</div>
    </div>
  );
};

export default GalleryPost;
