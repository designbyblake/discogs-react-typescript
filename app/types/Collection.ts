export interface Collection {
  pagination: Pagination;
  releases: Release[];
}
export interface Pagination {
  page: number;
  pages: number;
  per_page: number;
  items: number;
  urls: Urls;
}

export interface Urls {
  first: string;
  prev: string;
  last: string;
  next: string;
}

export interface Release {
  id: number;
  instance_id: number;
  date_added: Date;
  rating: number;
  basic_information: BasicInformation;
}

export interface BasicInformation {
  id: number;
  master_id: number;
  master_url: null | string;
  resource_url: string;
  thumb: string;
  cover_image: string;
  title: string;
  year: number;
  formats: Format[];
  labels: Label[];
  artists: Artist[];
  genres: string[];
  styles: string[];
}

export interface Artist {
  name: string;
  anv: string;
  join: Join;
  role: string;
  tracks: string;
  id: number;
  resource_url: string;
}

export enum Join {
  Empty = '',
  Join = '&',
  Purple = ': '
}

export interface Format {
  name: string;
  qty: string;
  descriptions: string[];
  text?: string;
}

export interface Label {
  name: string;
  catno: string;
  entity_type: string;
  entity_type_name: string;
  id: number;
  resource_url: string;
}
