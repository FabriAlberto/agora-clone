export interface NYTArticle {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  multimedia: Multimedia[];
}

export interface Multimedia {
  url: string;
  type: string;
  subtype: string;
  caption: string;
}
export interface ResponseNytApi{
  num_results: number;
  results: NYTArticle[]
  section:string
}