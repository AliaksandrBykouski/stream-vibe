import categoryItems from "@/sections/Categories/categoryItems.js";

const collectionGroups = [
  {
    isActive: true,
    title: 'Movies',
    items: [
      {
        title: 'Our Genres',
        categoryItems,
      },
      {
        title: 'Popular Top 10 In Genres',
        categoryItems: [
          {
            title: 'Actions',
            badge: 'Top 10 in',
            images: [
                '/src/assets/images/categories/action/1.jpg',
                '/src/assets/images/categories/action/2.jpg',
                '/src/assets/images/categories/action/3.jpg',
                '/src/assets/images/categories/action/4.jpg',
              ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/5.jpg',
              '/src/assets/images/categories/action/6.jpg',
              '/src/assets/images/categories/action/7.jpg',
              '/src/assets/images/categories/action/8.jpg',

            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/9.jpg',
              '/src/assets/images/categories/action/10.jpg',
              '/src/assets/images/categories/action/11.jpg',
              '/src/assets/images/categories/action/12.jpg',

            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/13.jpg',
              '/src/assets/images/categories/action/14.jpg',
              '/src/assets/images/categories/action/15.jpg',
              '/src/assets/images/categories/action/16.jpg',

            ]
          },
          {
            title: 'Actions',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/5.jpg',
              '/src/assets/images/categories/action/6.jpg',
              '/src/assets/images/categories/action/7.jpg',
              '/src/assets/images/categories/action/8.jpg',

            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/9.jpg',
              '/src/assets/images/categories/action/10.jpg',
              '/src/assets/images/categories/action/11.jpg',
              '/src/assets/images/categories/action/12.jpg',

            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/13.jpg',
              '/src/assets/images/categories/action/14.jpg',
              '/src/assets/images/categories/action/15.jpg',
              '/src/assets/images/categories/action/16.jpg',

            ]
          },
          {
            title: 'Actions',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/5.jpg',
              '/src/assets/images/categories/action/6.jpg',
              '/src/assets/images/categories/action/7.jpg',
              '/src/assets/images/categories/action/8.jpg',

            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/9.jpg',
              '/src/assets/images/categories/action/10.jpg',
              '/src/assets/images/categories/action/11.jpg',
              '/src/assets/images/categories/action/12.jpg',

            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/13.jpg',
              '/src/assets/images/categories/action/14.jpg',
              '/src/assets/images/categories/action/15.jpg',
              '/src/assets/images/categories/action/16.jpg',

            ]
          },
          {
            title: 'Actions',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/5.jpg',
              '/src/assets/images/categories/action/6.jpg',
              '/src/assets/images/categories/action/7.jpg',
              '/src/assets/images/categories/action/8.jpg',

            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/9.jpg',
              '/src/assets/images/categories/action/10.jpg',
              '/src/assets/images/categories/action/11.jpg',
              '/src/assets/images/categories/action/12.jpg',

            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/13.jpg',
              '/src/assets/images/categories/action/14.jpg',
              '/src/assets/images/categories/action/15.jpg',
              '/src/assets/images/categories/action/16.jpg',

            ]
          },
        ],
        sliderParams: {
          slidesPerView: 1.6,
          slidesPerGroup: 1,
          spaceBetween: 20,
          allowTouchMove: true,
          breakpoints: {
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 30,
              allowTouchMove: false,
            }
          }
        }
      },
    ],
  }
]

export default collectionGroups
