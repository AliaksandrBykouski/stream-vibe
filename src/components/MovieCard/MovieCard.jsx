import './MovieCard.scss'
import classNames from 'classnames'
import {Image} from "minista";
import Badge from "@/components/Badge/index.js";

const MovieCard = (props) => {
  const {
    title,
    imgSrc,
    duration,
    views,
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
        {views && (
            <Badge
                iconName='eye'
                iconAriaLabel='Views'
                hasFillIcon
            >
              {views}
            </Badge>
        )}
      </div>

    </a>
  )
}

export default MovieCard
