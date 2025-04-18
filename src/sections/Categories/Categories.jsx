import './Categories.scss'
import Section from "@/layouts/Section";
import CategoryCard from "@/components/CategoryCard";

const Categories = () => {

  const categoryItems = [
    {
      title: 'Actions',
      images: [
          '/src/assets/images/categories/action/1.jpg',
          '/src/assets/images/categories/action/2.jpg',
          '/src/assets/images/categories/action/3.jpg',
          '/src/assets/images/categories/action/4.jpg',

      ]
    },
    {
      title: 'Adventure',
      images: [
        '/src/assets/images/categories/action/5.jpg',
        '/src/assets/images/categories/action/6.jpg',
        '/src/assets/images/categories/action/7.jpg',
        '/src/assets/images/categories/action/8.jpg',

      ]
    },
    {
      title: 'Comedy',
      images: [
        '/src/assets/images/categories/action/9.jpg',
        '/src/assets/images/categories/action/10.jpg',
        '/src/assets/images/categories/action/11.jpg',
        '/src/assets/images/categories/action/12.jpg',

      ]
    },
    {
      title: 'Drama',
      images: [
        '/src/assets/images/categories/action/13.jpg',
        '/src/assets/images/categories/action/14.jpg',
        '/src/assets/images/categories/action/15.jpg',
        '/src/assets/images/categories/action/16.jpg',

      ]
    },
    {
      title: 'Horror',
      images: [
        '/src/assets/images/categories/action/17.jpg',
        '/src/assets/images/categories/action/18.jpg',
        '/src/assets/images/categories/action/19.jpg',
        '/src/assets/images/categories/action/20.jpg',

      ]
    },
  ]

  return (
    <Section
      title="Explore our wide variety of categories"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new "
      titleId="categories-title"
      actions={(
        <div>
          <p>BEER</p>
          <p>BEER</p>
        </div>
      )}
      isActionsHiddenOnMobile
    >
      {
        categoryItems.map((categoryItem, index) => (
          <CategoryCard
            {...categoryItem}
            key={index}
          />
      ))}
    </Section>
  )
}

export default Categories
