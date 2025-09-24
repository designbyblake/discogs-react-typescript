import type {
  DiscogsRelease,
  DiscogsArtist,
  DiscogsLabel,
  DiscogsTrack
} from '~/types/Release';

export class DiscogsReleaseMapper {
  static mapToDiscogsRelease(release: DiscogsRelease): DiscogsReleaseResponse {
    return {
      title: release.title,
      year: release.year,
      artists: release.artists,
      labels: release.labels,
      country: release.country,
      notes: release.notes,
      formats: release.formats.map((format) => {
        const description = format.descriptions.join(', ');
        return description ? `${format.name}, ${description}` : format.name;
      }),
      genres: release.genres,
      styles: release.styles,
      tracklist: release.tracklist,
      images: release.images.map((image) => image.uri)
    };
  }
}

export type DiscogsReleaseResponse = {
  title: string;
  year: number;
  artists: DiscogsArtist[];
  labels: DiscogsLabel[];
  country: string;
  notes: string;
  formats: string[];
  genres: string[];
  styles: string[];
  tracklist: DiscogsTrack[];
  images: string[];
};
