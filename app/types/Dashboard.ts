export type DashboardHeaderProps = {
  avatar_url: string;
  username: string;
  buyer_rating: number;
  buyer_num_ratings: number;
  num_collection: number;
  num_wantlist: number;
  num_for_sale: number;
};

export type DashboardUserInfoProps = Pick<
  DashboardHeaderProps,
  | 'buyer_rating'
  | 'buyer_num_ratings'
  | 'num_collection'
  | 'num_wantlist'
  | 'num_for_sale'
>;
