export type PostFrontmatter = {
  title: string;
  date: string;
  summary: string;
  tags?: string[];
  featured?: boolean;
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
};
