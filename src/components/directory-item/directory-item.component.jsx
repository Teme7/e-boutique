import { DirectoryItemContainer, DirectoryBody, BackgroundImage } from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <DirectoryBody className='directory-body'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
