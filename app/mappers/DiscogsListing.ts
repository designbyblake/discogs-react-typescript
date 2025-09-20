import type { Release } from '~/types/Collection';

export type DiscogsListingResponse = {
  title: string;
  artist: string;
  instance_id: number;
  release_id: number;
  cover_image: string;
  thumb: string;
  format: string;
};

export class DiscogsListingMapper {
  static mapToReleaseList(releases: Release[]): DiscogsListingResponse[] {
    const list = releases.map((release) => {
      const { title, artists, cover_image, thumb, formats } =
        release.basic_information;
      const { name } = formats[0];
      const description = formats
        .flatMap((format) => format.descriptions)
        .join(', ');
      const format = description ? `${name}, ${description}` : name;
      return {
        title,
        artist: artists[0].name,
        instance_id: release.instance_id,
        release_id: release.id,
        cover_image,
        thumb,
        format
      };
    });

    return list;
  }
}
