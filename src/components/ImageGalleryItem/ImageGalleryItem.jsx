import {Li, Img} from './ImageGalleryItem.styled'


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
   