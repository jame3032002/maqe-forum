export interface PostI {
  id: number;
  author_id: number;
  title: string;
  body: string;
  image_url: string;
  created_at: Date;
  author?: AuthorI;
}

export interface AuthorI {
  id: number;
  name: string;
  role: string;
  place: string;
  avatar_url: string;
}

export interface newAuthorsFormatI {
  [id: number]: AuthorI;
}
