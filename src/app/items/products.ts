import {Category} from "./categories";

export interface Product {
  id: number;
  name: string;
  picture: string;
  price: number;
  description: string;
  rating: number;
  reference: string;
  category: Category;
  likes:number;
}

export const products = [
  {
    id: 1,
    name: 'Phone XR',
    picture:
      'https://cdn1.it4profit.com/brd2/q:68/g:sm/plain/s3://app/public/models/MRY92RM-A/large/j/190716160018581911.jpg',
    price: 799,
    description: 'A large phone with one of the best screens',
    rating: 5,
    reference:
      'https://kaspi.kz/shop/p/apple-iphone-xr-64gb-slim-box-chernyi-100691239/?c=750000000#!/item',
    category :{name:"Casual"},
    likes:5,
  },
  {
    id: 2,
    name: 'Phone 12 Mini',
    picture:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h44/h9c/17090025816094/apple-iphone-12-mini-128gb-sinij-100657856-1-Container.png',
    price: 699,
    description: 'A great phone with one of the best cameras',
    rating: 6,
    reference:
      'https://kaspi.kz/shop/p/apple-iphone-12-mini-64gb-chernyi-100657220/?c=750000000#!/item',
    category :{name:"Casual"},
    likes:5,
  },
  {
    id: 3,
    name: 'Phone 11 Pro Max',
    picture:
      'https://onepoint.kz/uploads/products/590/apple-iphone-11-pro-max-512gb-midnight-green.jpeg',
    price: 299,
    description: 'Greater than ever',
    rating: 7,
    reference:
      'https://kaspi.kz/shop/p/apple-iphone-11-pro-64gb-seryi-1005129/?c=750000000#!/item',
    category :{name:"Pro"},
    likes:10,
  },
  {
    id: 4,
    name: 'Phone 12 Pro Max',
    picture:
      'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F228637_1.jpg&w=3840&q=85',
    price: 399,
    description: 'Number one from numbers one',
    rating: 10,
    reference:
      'https://kaspi.kz/shop/p/apple-iphone-12-pro-max-128gb-sinii-100658112/?c=750000000#!/item',
    category :{name:"Pro"},
    likes:10,
  },
  {
    id: 5,
    name: 'Phone 13 Pro Max',
    picture:
      'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F252998_1.jpg&w=3840&q=85',
    price: 499,
    description: 'Ideal.',
    rating: 10,
    reference:
      'https://kaspi.kz/shop/p/apple-iphone-13-pro-max-128gb-zelenyi-104079084/?c=750000000#!/item',
    category :{name:"Pro"},
    likes:10,
  },
  {
    id: 6,
    name: 'Phone 11 Pro',
    picture:
      'https://onepoint.kz/uploads/products/476/apple-iphone-11-pro-64gb-silver.jpeg',
    price: 299,
    description: 'Just style.',
    rating: 6.5,
    reference:
      'https://kaspi.kz/shop/p/apple-iphone-11-pro-64gb-seryi-1005129/?c=750000000#!/item',
    category :{name:"Casual"},
    likes:5,
  },
  {
    id: 7,
    name: 'Phone 12 Pro',
    picture:
      'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F228626_1.jpg&w=3840&q=85',
    price: 399,
    description: 'Just do it.',
    rating: 10,
    reference:
      'https://kaspi.kz/shop/p/apple-iphone-12-pro-128gb-seryi-100657107/?c=750000000#!/item',
    category :{name:"Casual"},
    likes:5,
  },
  {
    id: 8,
    name: 'Phone 13 Pro',
    picture:
      'https://activ.kz/shop/media/products/iphone_13_pro123456_oXbD4y9.jpg',
    price: 499,
    description: 'More than you can imagine.',
    rating: 10,
    reference:
      'https://kaspi.kz/shop/p/apple-iphone-13-pro-256gb-zelenyi-104079046/?c=750000000#!/item',
    category :{name:"Casual"},
    likes:5,
  },
  {
    id: 9,
    name: 'Phone 14 Pro Max',
    picture:
      'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F265322_1v.jpg&w=3840&q=85',
    price: 599,
    description: '...',
    rating: 10,
    reference:
      'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    category :{name:"Pro"},
    likes:10,
  },
  {
    id: 10,
    name: 'Phone 14 Pro',
    picture:
      'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F265301_1.jpg&w=3840&q=85',
    price: 499,
    description: 'Easy to take pictures',
    rating: 10,
    reference:
      'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000#!/item',
    category :{name:"Pro"},
    likes:10,
  },
  {
    id: 11,
    name: 'Airpods 1',
    picture:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1552508263186',
    price: 99,
    description: '',
    rating: 4,
    reference:
        'https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000',
    category :{name:"Headphones"},
    likes:10,
  },
  {
    id: 12,
    name: 'Airpods Pro',
    picture:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h57/h38/46659804561438/apple-airpods-pro-belyj-4804718-1-Container.png',
    price: 119,
    description: '',
    rating: 6,
    reference:
        'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000',
    category :{name:"Headphones"},
    likes:7,
  },
  {
    id: 13,
    name: 'Airpods 2',
    picture:
        'https://sanmi.kz/upload/iblock/142/2019118-106.jpg',
    price: 129,
    description: '',
    rating: 5,
    reference:
        'https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000',
    category :{name:"Headphones"},
    likes:7,
  },
  {
    id: 14,
    name: 'Airpods 3',
    picture:
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hee/hf4/46719105892382/apple-airpods-3-belyj-102667744-1.jpg',
    price: 199,
    description: '',
    rating: 10,
    reference:
        'https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000',
    category :{name:"Headphones"},
    likes:13,
  },
  {
    id: 15,
    name: 'Airpods Pro 2',
    picture:
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h39/hbd/62281477128222/apple-airpods-pro-2nd-generation-belyj-106362968-1.jpg',
    price: 299,
    description: '',
    rating: 10,
    reference:
        'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000',
    category :{name:"Headphones"},
    likes:15,
  },
  {
    id: 16,
    name: 'Ipad 2022',
    picture:
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h12/h89/64867890855966/apple-ipad-2022-10-9-wi-fi-64gb-sinii-107266637-1.jpg',
    price: 699,
    description: 'Comfortable',
    rating: 10,
    reference:
        'https://kaspi.kz/shop/p/apple-ipad-2022-10-9-wi-fi-64gb-sinii-107266637/?c=750000000',
    category :{name:"IPad"},
    likes:10,
  },
  {
    id: 17,
    name: 'Ipad Air 2022',
    picture:
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h89/he1/49580851658782/apple-ipad-air-5-2022-wi-fi-mm9c3rk-a-10-9-dujmov-8-gb-64-gb-fioletovyj-104235453-1.jpg',
    price: 799,
    description: 'Comfortable',
    rating: 10,
    reference:
        'https://kaspi.kz/shop/p/apple-ipad-air-2022-10-9-64gb-wi-fi-seryi-104235453/?c=750000000',
    category :{name:"IPad"},
    likes:10,
  },
  {
    id: 18,
    name: 'Ipad pro 2022',
    picture:
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h06/h7c/64895797788702/apple-ipad-pro-2022-11-128gb-wi-fi-seryi-107276534-1.jpg',
    price: 799,
    description: 'Comfortable',
    rating: 10,
    reference:
        'https://kaspi.kz/shop/p/apple-ipad-pro-2022-11-128gb-wi-fi-seryi-107276534/?c=750000000',
    category :{name:"IPad"},
    likes:10,
  },
  {
    id: 19,
    name: 'Ipad mini 2021',
    picture:
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hce/h4a/45595444838430/apple-ipad-mini-2021-wi-fi-64gb-seryj-102301373-1-Container.jpg',
    price: 799,
    description: 'Comfortable',
    rating: 10,
    reference:
        'https://kaspi.kz/shop/p/apple-ipad-mini-2021-8-3-64gb-wi-fi-seryi-102301373/?c=750000000',
    category :{name:"IPad"},
    likes:10,
  },
  {
    id: 20,
    name: 'Ipad mini 2021',
    picture:
        'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h80/hdb/33063474823198/apple-ipad-2020-10-2-32gb-wi-fi-myl92rk-a-seryj-100580440-1-Container.jpg',
    price: 799,
    description: 'Comfortable',
    rating: 10,
    reference:
        'https://kaspi.kz/shop/p/apple-ipad-2020-10-2-32gb-wi-fi-seryi-100580440/?c=750000000',
    category :{name:"IPad"},
    likes:10,
  },

];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
