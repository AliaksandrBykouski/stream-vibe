import './MovieCard.scss'
import {Image} from "minista";
import Badge from "@/components/Badge/index.js";
import RatingView from "@/components/RatingView/index.js";

const MovieCard = (props) => {
  const {
    title,
    imgSrc,
    duration,
    views,
    rating,
    released,
    href = '/movie',
  } = props

  return (
    <a
      className='movie-card'
      href={href}
      title={title}
    >
      <h3 className="visually-hidden">{title}</h3>
      <Image
        src={imgSrc}
        className='movie-card__image'
      />
      <div className="movie-card__body">
        {duration && (
          <Badge
            iconName='clock'
            iconAriaLabel='Duration'
            hasFillIcon
          >
            {duration}
          </Badge>
        )}

        {rating && (
          <Badge className='movie-card__rating-badge'>
            <RatingView {...rating} />
          </Badge>
        )}

        {views && (
            <Badge
                iconName='eye'
                iconAriaLabel='Views'
                hasFillIcon
            >
              {views}
            </Badge>
        )}

        {released && (
            <Badge
              className='movie-card__realeased-badge'
            >
              Released at <time className='movie-card__realeased-badge-label' dateTime={released.dateTime}>{released.label}</time>
            </Badge>
        )}
      </div>

    </a>
  )
}

export default MovieCard
