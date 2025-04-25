import './Collections.scss'
import Tabs from "@/components/Tabs";
import collectionGroups from "./CollectionGroups.js";
import getIdFromTitle from "@/utils/getIdFromTitle.js";
import Section from "@/layouts/Section/index.js";
import SliderNavigation from "@/components/Slider/components/SliderNavigation/index.js";
import Slider from "@/components/Slider/index.js";
import CategoryCard from "@/components/CategoryCard/index.js";
import MovieCard from "@/components/MovieCard/index.js";


const Collections = () => {

  return (
   <Tabs
    className="collections container"
    title="collections"
    isEnableOnlyInMobile
    items={collectionGroups.map((collectionGroup) =>({
      isActive: collectionGroup.isActive,
      title: collectionGroup.title,
      children: (
        <div className="collections__group">
          <p className="collections__title hidden-mobile">
            {collectionGroup.title}
          </p>
          {collectionGroup.items.map((collectionItem, index) => {
            const {
              title,
              categoryItems,
              movieItems,
              sliderParams
            } = collectionItem

            const titleFormated = `${getIdFromTitle(collectionGroup.title)}-${getIdFromTitle(title)}`
            const titleId = `${titleFormated}-title`
            const sliderNavigationId = `${titleFormated}-slider-navigation`

            return (
              <Section
                className="collections__section"
                title={title}
                titleId={titleId}
                actions={(
                  <SliderNavigation
                    id={sliderNavigationId}
                    mode="tile"
                  />
                )}
                isActionsHiddenOnMobile
                key={index}
              >
                <Slider
                  sliderParams={sliderParams}
                  navigationTargetElementId={sliderNavigationId}
                  isBeyondTheViewportOnMobileS
                >
                  {categoryItems?.map((categoryItem, index) => (
                    <CategoryCard
                      {...categoryItem}
                      key={index}
                    />
                  )) ?? movieItems?.map((movieItem, index) => (
                    <MovieCard
                      {...movieItem}
                      key={index}
                    />
                  ))}
                </Slider>
              </Section>
            )
          })}
        </div>
      )
    }))}

   />
  )
}

export default Collections
