export type GetCollectionParams = {
  name: string;
  page?: number;
  per_page?: number;
  sort?: sort;
  sort_order?: sort_order;
};

export type sort_order = 'asc' | 'desc' | undefined;

export type sort =
  | 'label'
  | 'artist'
  | 'title'
  | 'catno'
  | 'format'
  | 'rating'
  | 'added'
  | 'year'
  | undefined;

export type GetCollectionValues = {
  maximum: string;
  median: string;
  minimum: string;
};
