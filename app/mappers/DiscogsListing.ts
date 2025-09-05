import type { Release } from '~/types/Collection';

export type DiscogsListingResponse = {
  title: string;
  artist: string;
  instance_id: number;
  cover_image: string;
  thumb: string;
};

export class DiscogsListingMapper {
  static mapToReleaseList(releases: Release[]): DiscogsListingResponse[] {
    const list = releases.map((release) => {
      const { title, artists, cover_image, thumb } = release.basic_information;
      return {
        title,
        artist: artists[0].name,
        instance_id: release.instance_id,
        cover_image,
        thumb
      };
    });

    return list;
  }
}
