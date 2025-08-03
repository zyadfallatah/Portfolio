interface Project {
  title: string;
  shortDescription: string;
  longDescription?: string;
  technologies: { name: string; icon: string }[];
  metadata: string[];
  bannar: string;
  tags?: string[];
  linkName?: string;
  content?: string;
  url?: string;
  imagesUrl?: { name: string; url: string }[];
  videosUrls?: { name: string; url: string }[];
}
