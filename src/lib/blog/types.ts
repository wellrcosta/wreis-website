export type PostFrontmatter = {
  title: string;
  date: string;
  summary: string;
  tags?: string[];
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
};
