import {DescriptionInterface, FeedListInterface} from "./feed-list.interface";

export const FEED_VIEW:DescriptionInterface[] = [
  {mainTitle: 'Hi all', description: 'This is my description',img: 'https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2020/05/Tel-Aviv-4-scaled-e1589807189455.jpg?resize=1024%2C608&ssl=1',},
  {mainTitle: 'Hi all', description: 'This is my description',img:'https://i1.wp.com/handluggageonly.co.uk/wp-content/uploads/2015/05/Hand-Luggage-Only-7.jpg?w=1600&ssl=1',},
  {mainTitle: 'Hi all', description: 'This is my description', img:'https://www.fantastic-removals.co.uk/blog/wp-content/uploads/2021/08/brasov-romania.jpg',},
  {mainTitle: 'Hi all', description: 'This is my description for my travel', img:'https://www.state.gov/wp-content/uploads/2018/11/Italy-2109x1406.jpg',},
]


export const FEED_LIST:FeedListInterface[]= [
  { isOpen:false,
    id: '234234rf32',
    name:'Tal',
    Location:'Israel',
    data:'17-4-2022',
    description:FEED_VIEW[0],
  },
  { isOpen:false,
    id: '234234rswd',
    name:'Tali',
    Location:'Greece',
    data:'12-9-2022',
    description:FEED_VIEW[1],
  },
  { isOpen:false,
    id: '234234qidh7',
    name:'Vlad',
    Location:'Romania',
    data:'1-2-2022',
    description:FEED_VIEW[2],
  },
  { isOpen:false,
    id: '2342qsudhouh2',
    name:'Sharon',
    Location:'Italy',
    data:'5-3-2022',
    description:FEED_VIEW[3],
  }
]

