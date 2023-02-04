import GalleryPost from './gallery-post';

const Gallery = ({ postings }) => {
  return (
    <div className="gallery">
      {postings?.map((posting) => (
        <GalleryPost {...posting} />
      ))}
    </div>
  );
};

export default Gallery;
