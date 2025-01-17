import './index.css'

const ImageCard = props => {
  const {imageDetails, isImagesMatched} = props
  const {thumbnailUrl, id} = imageDetails
  const onclickedThumbnailImage = () => {
    console.log(id)
    isImagesMatched(id)
  }
  return (
    <li className="thumbnail-iamge-list-container">
      <button
        type="button"
        onClick={onclickedThumbnailImage}
        className="thumbnail-button"
      >
        <img src={thumbnailUrl} className="thumbnail-image" alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageCard
