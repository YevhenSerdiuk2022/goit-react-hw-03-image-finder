import PropTypes from 'prop-types';
import { Li, Img } from './ImageGalleryItem.styled'


 export const ImageGalleryItem = ({item, openModal}) => {
  return (
    <Li >
      <Img
        src={item.webformatURL}
        alt={item.tags}
        onClick={() => openModal({item})}
      />
    </Li>
  );
};
   
ImageGalleryItem.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
       
  ),
  openModal: PropTypes.func.isRequired,
};