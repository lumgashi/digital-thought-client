export default interface ArticleModel {
  id: number;
  title: string;
  datePosted: string | Date;
  author: string;
  topic: string;
}
