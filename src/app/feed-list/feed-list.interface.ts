export interface DescriptionInterface {
  mainTitle:string,
  description:string,
  img:string,
}

export interface FeedListInterface {
  isOpen:boolean,
  id:string,
  name:string,
  Location:string,
  data:string,
  description:DescriptionInterface,
}
