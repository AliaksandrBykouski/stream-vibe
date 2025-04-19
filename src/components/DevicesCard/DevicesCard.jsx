import './DevicesCard.scss'
import classNames from 'classnames'

const DevicesCard = (props) => {
  const {
    title,
    description,
    imgSrc,
  } = props

  return (
    <div className= 'devices-card'>
      <header className="devices-card__header">
        <div className="devices-card__image-wrapper">
          <img
            src={imgSrc}
            className="devices-card__image"
            width={40}
            height={40}
            alt=""
            loading="lazy"
          />
        </div>
        <h3 className="devices-card__title h4">{title}</h3>
      </header>
      <div className="devices-card__description">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default DevicesCard
