interface Project {
  title: string;
  shortDescription: string;
  longDescription?: string;
  technologies: { name: string; icon: string }[];
  metadata: string[];
  bannar: string;
  tags?: string[];
  titleEn?: string;
  shortDescriptionEn?: string;
  longDescriptionEn?: string;
  metadataEn?: string[];
  tagsEn?: string[];
  linkName?: string;
  compact?: boolean;
  url?: string;
  imagesUrl?: { name: string; nameEn?: string; url: string }[];
  videosUrls?: { name: string; nameEn?: string; url: string }[];
}
