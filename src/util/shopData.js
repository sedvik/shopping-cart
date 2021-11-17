import bloom from '../images/bloom-doily.jpeg'
import moonpetal from '../images/moonpetal-doily.jpg'
import normandyLace from '../images/normandy-lace-doily.jpg'
import paperHeart from '../images/paper-heart-doily.jpg'
import pinkPineapple from '../images/pink-pineapple-doily.jpg'
import royalLace from '../images/royal-lace-doily.png'
import teaParty from '../images/tea-party-doily.jpg'
import tulip from '../images/tulip-doily.jpg'

const shopEntries = [
  {
    id: 0,
    title: 'Bloom',
    src: bloom,
    alt: 'Bloom Doily',
    price: 20
  },
  {
    id: 1,
    title: 'Moonpetal',
    src: moonpetal,
    alt: 'Moonpetal Doily',
    price: 30
  },
  {
    id: 2,
    title: 'Normandy Lace',
    src: normandyLace,
    alt: 'Normandy Lace Doily',
    price: 8
  },
  {
    id: 3,
    title: 'Paper Heart',
    src: paperHeart,
    alt: 'Paper Heart Doily',
    price: 5
  },
  {
    id: 4,
    title: 'Pink Pineapple',
    src: pinkPineapple,
    alt: 'Pink Pineapple Doily',
    price: 14
  },
  {
    id: 5,
    title: 'Royal Lace',
    src: royalLace,
    alt: 'Royal Lace Doily',
    price: 40
  },
  {
    id: 6,
    title: 'Tea Party',
    src: teaParty,
    alt: 'Tea Party Doily',
    price: 4
  },
  {
    id: 7,
    title: 'Tulip',
    src: tulip,
    alt: 'Tulip Doily',
    price: 12
  }
]

const cartEntries = [
  {
    id: 0,
    title: 'Bloom',
    src: bloom,
    alt: 'Bloom Doily',
    price: 20,
    qty: 1
  },
  {
    id: 1,
    title: 'Moonpetal',
    src: moonpetal,
    alt: 'Moonpetal Doily',
    price: 30,
    qty: 2
  }
]

export { shopEntries, cartEntries }
