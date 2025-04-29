import './MovieDetails.scss'
import classNames from 'classnames'
import SliderNavigation from "@/components/Slider/components/SliderNavigation/index.js";
import Slider from "@/components/Slider/index.js";
import PersonCard from "@/components/PersonCard/index.js";
import Button from "@/components/Button/index.js";
import ReviewCard from "@/components/ReviewCard/index.js";
import Icon from "@/components/Icon/index.js";
import Tags from "@/components/Tags/index.js";
import Ratings from "@/components/Ratings/index.js";

const MovieDetails = (props) => {
  const titleId = 'movie-details-title'
  const castSliderNavigationId = 'movie-card-slider-navigation'

  const castItems = [
    {
      imgSrc:'src/assets/images/people/cast.jpg',
      imgAlt:'Jožin z Bažin'
    },
    {
      imgSrc:'src/assets/images/people/cast.jpg',
      imgAlt:'Jožin z Bažin'
    },
    {
      imgSrc:'src/assets/images/people/cast.jpg',
      imgAlt:'Jožin z Bažin'
    },
    {
      imgSrc:'src/assets/images/people/cast.jpg',
      imgAlt:'Jožin z Bažin'
    },
    {
      imgSrc:'src/assets/images/people/cast.jpg',
      imgAlt:'Jožin z Bažin'
    },
    {
      imgSrc:'src/assets/images/people/cast.jpg',
      imgAlt:'Jožin z Bažin'
    },
    {
      imgSrc:'src/assets/images/people/cast.jpg',
      imgAlt:'Jožin z Bažin'
    },
    {
      imgSrc:'src/assets/images/people/cast.jpg',
      imgAlt:'Jožin z Bažin'
    },
    {
      imgSrc:'src/assets/images/people/cast.jpg',
      imgAlt:'Jožin z Bažin'
    },
    {
      imgSrc:'src/assets/images/people/cast.jpg',
      imgAlt:'Jožin z Bažin'
    },
    {
      imgSrc:'src/assets/images/people/cast.jpg',
      imgAlt:'Jožin z Bažin'
    },
  ]

  const reviewItems = [
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description:'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description:'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description:'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description:'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description:'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description:'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description:'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description:'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5
    },
  ]

  return (
    <section
      className="movie-details container"
      aria-labelledby={titleId}
    >
      <h2 className="visually-hidden" id={titleId}>
        Movie Details Information
      </h2>

      <div className="movie-details__main">
        <div className='movie-details__panel movie-details__panel--description'>
          <div className='movie-details__group'>
            <h3 className="movie-details__title">Description</h3>
            <div className="movie-details__description">
              <p>A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.</p>
            </div>
          </div>
        </div>
        <div className='movie-details__panel'>
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">Cast</h3>
            <SliderNavigation
              id={castSliderNavigationId}
              hasPagination={false}
              mode="rounded"
              buttonMode="black-08"
            />
          </header>
          <Slider
            navigationTargetElementId={castSliderNavigationId}
            hasScrollbarOnMobile={false}
            sliderParams={{
              slidesPerView: 'auto',
              spaceBetween: 10,
              breakpoints: {
                1024: {
                  slidesPerView: 'auto',
                  spaceBetween: 20,
                  allowTouchMove: false
                }
              }
            }}
          >
            {castItems.map((castItem, index) => (
              <PersonCard  {...castItem} key={index} />
            ))}
          </Slider>
        </div>
        <div className='movie-details__panel movie-details__panel--large-gap-y'>
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">Reviews</h3>
            <Button
              mode="black-08"
              iconName="plus"
              label="Add Your Review"
              href="/"
            />
          </header>
          <Slider
            navigationMode="rounded"
            isNavigationHiddenOnMobile = {false}
            hasScrollbarOnMobile={false}
            sliderParams={{
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 16,
              breakpoints: {
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                1024: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 20,
                  allowTouchMove: false
                }
              }
            }}
          >
            {reviewItems.map((reviewItem, index) => (
              <ReviewCard {...reviewItem} key={index} />
            ))}
          </Slider>
        </div>
      </div>
      <aside className="movie-details__info">
        <div className='movie-details__panel'>
          <div className="movie-details__groups">
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="kalendar" />
                <span>Released Year</span>
              </h3>
              <div className="movie-details__description">
                <time className='h6' dateTime='2022'>2022</time>
              </div>
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="translate" />
                <span>Available Languages</span>
              </h3>
                <Tags
                  items={['English', 'Hindi', 'Tamil', 'Telugu', 'Kannada']}
                />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="star" />
                <span>Ratings</span>
              </h3>
                <Ratings items={[
                  {title: 'IMDB', ratingValue: 4.5},
                  {title: 'Streamvibe', ratingValue: 4}
                ]}
                />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="genres" />
                <span>Genres</span>
              </h3>
              <Tags
                items={['Action', 'Adventure']}
              />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">Director</h3>
              <PersonCard
                name="Rishab Shetty"
                subtitle="From India"
                imgSrc="/src/assets/images/people/director.jpg"
              />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">Music</h3>
              <PersonCard
                  name="B. Ajaneesh Loknath"
                  subtitle="From India"
                  imgSrc="/src/assets/images/people/music.jpg"
              />
            </div>
          </div>
        </div>
      </aside>
    </section>

  )
}

export default MovieDetails
