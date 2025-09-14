interface Project {
  title: string;
  shortDescription: string;
  longDescription?: string;
  technologies: { name: string; icon: string }[];
  metadata: { value: string }[];
  bannar: string;
  tags?: { value: string }[];
  linkName?: string;
  url?: string;
  imagesUrl?: { name: string; url: string }[];
  videosUrls?: { name: string; url: string }[];
}
