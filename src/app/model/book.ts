/*
"id": 1,
"title": "World War 2",
"price": 23.5,
"yearPublished": "2021-03-11",
"publisher": "Sun",
"imagUrl": "https://source.unsplash.com/366x200/?nature,water",
"authorName": "HG Well",
"category": {
"id": 1,
"name": "Historical"
}
 */
export interface Book {
    id?:number;
    title?:string;
    price?:number;
  yearPublished?:Date;
  publisher:string;
  imagUrl:string;
  authorName:string;
  category?:{
    id?:number;
    name?:string;
  }
}
