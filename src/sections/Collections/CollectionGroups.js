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
        },
      },
      {
        title: 'Trending Now',
        movieItems: [
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            views: '2K'
          },
          {
            title: 'BHAI JAAN',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 57min',
            views: '1.5K'
          },
          {
            title: 'Surai pe Mangal',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '2h 10min',
            views: '1.8K'
          },
          {
            title: 'Pathan',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '2h 20min',
            views: '3K'
          },
          {
            title: 'ANT-MEN',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 42min',
            views: '5K'
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/6.jpg',
            duration: '1h 30min',
            views: '2K'
          },
          {
            title: 'BHAI JAAN',
            imgSrc: '/src/assets/images/movies/7.jpg',
            duration: '1h 57min',
            views: '1.5K'
          },
          {
            title: 'Surai pe Mangal',
            imgSrc: '/src/assets/images/movies/8.jpg',
            duration: '2h 10min',
            views: '1.8K'
          },
          {
            title: 'Pathan',
            imgSrc: '/src/assets/images/movies/9.jpg',
            duration: '2h 20min',
            views: '3K'
          },
          {
            title: 'ANT-MEN',
            imgSrc: '/src/assets/images/movies/10.jpg',
            duration: '1h 42min',
            views: '5K'
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            views: '2K'
          },
          {
            title: 'BHAI JAAN',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 57min',
            views: '1.5K'
          },
          {
            title: 'Surai pe Mangal',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '2h 10min',
            views: '1.8K'
          },
          {
            title: 'Pathan',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '2h 20min',
            views: '3K'
          },
          {
            title: 'ANT-MEN',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 42min',
            views: '5K'
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            views: '2K'
          },
          {
            title: 'BHAI JAAN',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 57min',
            views: '1.5K'
          },
          {
            title: 'Surai pe Mangal',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '2h 10min',
            views: '1.8K'
          },
          {
            title: 'Pathan',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '2h 20min',
            views: '3K'
          },
          {
            title: 'ANT-MEN',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 42min',
            views: '5K'
          },
        ],
      },
      {
        title: 'New Releases',
        movieItems: [
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/2.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/3.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/4.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/5.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/2.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/3.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/4.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/5.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/2.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/3.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/4.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/5.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/2.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/3.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/4.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/5.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },
        ],
      },
      {
        title: 'Must - Watch Movies',
        movieItems: [
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              label: '20K',
              value: '4.5'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 57min',
            rating: {
              label: '20K',
              value: '4.5'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '1h 57min',
            rating: {
              label: '20K',
              value: '4.5'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '1h 57min',
            rating: {
              label: '20K',
              value: '4.5'
            }
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 57min',
            rating: {
              label: '4.5',
              value: '20K'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/6.jpg',
            duration: '1h 57min',
            rating: {
              label: '4.5',
              value: '20K'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/7.jpg',
            duration: '1h 57min',
            rating: {
              label: '4.5',
              value: '20K'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/8.jpg',
            duration: '1h 57min',
            rating: {
              label: '4.5',
              value: '20K'
            }
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/9.jpg',
            duration: '1h 57min',
            rating: {
              label: '4.5',
              value: '20K'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/10.jpg',
            duration: '1h 57min',
            rating: {
              label: '4.5',
              value: '20K'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              label: '4.5',
              value: '20K'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 57min',
            rating: {
              label: '4.5',
              value: '20K'
            }
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '1h 57min',
            rating: {
              label: '4.5',
              value: '20K'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              label: '4.5',
              value: '20K'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/10.jpg',
            duration: '1h 57min',
            rating: {
              label: '4.5',
              value: '20K'
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/12.jpg',
            duration: '1h 57min',
            rating: {
              label: '4.5',
              value: '20K'
            }
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
