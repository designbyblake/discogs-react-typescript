export interface DiscogsRelease {
  title: string;
  id: number;
  artists: DiscogsArtist[];
  data_quality: string;
  thumb: string;
  community: DiscogsCommunity;
  companies: DiscogsCompany[];
  country: string;
  date_added: string;
  date_changed: string;
  estimated_weight: number;
  extraartists: DiscogsExtraArtist[];
  format_quantity: number;
  formats: DiscogsFormat[];
  genres: string[];
  identifiers: DiscogsIdentifier[];
  images: DiscogsImage[];
  labels: DiscogsLabel[];
  lowest_price: number;
  master_id: number;
  master_url: string;
  notes: string;
  num_for_sale: number;
  released: string;
  released_formatted: string;
  resource_url: string;
  series: any[]; // No example data, so left as any[]
  status: string;
  styles: string[];
  tracklist: DiscogsTrack[];
  uri: string;
  videos: DiscogsVideo[];
  year: number;
}

export interface DiscogsArtist {
  anv: string;
  id: number;
  join: string;
  name: string;
  resource_url: string;
  thumbnail_url?: string;
  role: string;
  tracks: string;
}

export interface DiscogsCommunity {
  contributors: DiscogsContributor[];
  data_quality: string;
  have: number;
  rating: {
    average: number;
    count: number;
  };
  status: string;
  submitter: DiscogsContributor;
  want: number;
}

export interface DiscogsContributor {
  resource_url: string;
  username: string;
}

export interface DiscogsCompany {
  catno: string;
  entity_type: string;
  entity_type_name: string;
  id: number;
  name: string;
  resource_url: string;
}

export interface DiscogsExtraArtist {
  anv: string;
  id: number;
  join: string;
  name: string;
  resource_url: string;
  role: string;
  tracks: string;
}

export interface DiscogsFormat {
  descriptions: string[];
  name: string;
  qty: string;
}

export interface DiscogsIdentifier {
  type: string;
  value: string;
}

export interface DiscogsImage {
  height: number;
  resource_url: string;
  type: string;
  uri: string;
  uri150: string;
  width: number;
}

export interface DiscogsLabel {
  catno: string;
  entity_type: string;
  id: number;
  name: string;
  resource_url: string;
}

export interface DiscogsTrack {
  duration: string;
  position: string;
  title: string;
  type_: string;
}

export interface DiscogsVideo {
  description: string;
  duration: number;
  embed: boolean;
  title: string;
  uri: string;
}
