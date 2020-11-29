import barberPath from '../Images/barber.png'
import nailsPath from '../Images/nails.png'
import lashBrowPath from '../Images/lash&brow.png'
import solarPath from '../Images/solar.png'
import epilPath from '../Images/epil.png'

const pricingData = [
  {
    name: 'Парикмахерский зал',
    pictureAlt: 'barber',
    src: barberPath,
    services: [
      {
        name: 'Услуга 1',
        price: '00 руб',
      },
      {
        name: 'Услуга 2',
        price: '00 руб',
      },
      {
        name: 'Услуга 3',
        price: '00 руб',
      },
      {
        name: 'Услуга 4',
        price: '00 руб',
      },
    ],
  },
  {
    name: 'Ногтевой сервис',
    pictureAlt: 'nails',
    src: nailsPath,
    services: [
      {
        name: 'Услуга 5',
        price: '00 руб',
      },
      {
        name: 'Услуга 6',
        price: '00 руб',
      },
      {
        name: 'Услуга 7',
        price: '00 руб',
      },
      {
        name: 'Услуга 8',
        price: '00 руб',
      },
    ],
  },
  {
    name: 'Lash & Brow',
    pictureAlt: 'lash & brow',
    src: lashBrowPath,
    services: [
      {
        name: 'Услуга 9',
        price: '00 руб',
      },
      {
        name: 'Услуга 10',
        price: '00 руб',
      },
      {
        name: 'Услуга 11',
        price: '00 руб',
      },
      {
        name: 'Услуга 12',
        price: '00 руб',
      },
    ],
  },
  {
    name: 'Солярий',
    pictureAlt: 'solar',
    src: solarPath,
    services: [
      {
        name: 'Услуга 13',
        price: '00 руб',
      },
      {
        name: 'Услуга 14',
        price: '00 руб',
      },
      {
        name: 'Услуга 15',
        price: '00 руб',
      },
      {
        name: 'Услуга 16',
        price: '00 руб',
      },
    ],
  },
  {
    name: 'Эпиляция',
    pictureAlt: 'epilation',
    src: epilPath,
    services: [
      {
        name: 'Услуга 17',
        price: '00 руб',
      },
      {
        name: 'Услуга 18',
        price: '00 руб',
      },
      {
        name: 'Услуга 19',
        price: '00 руб',
      },
      {
        name: 'Услуга 20',
        price: '00 руб',
      },
    ],
  },
]

export default pricingData;