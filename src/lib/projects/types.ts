export type ProjectFrontmatter = {
  title: string;
  summary: string;
  stack?: string[];
  links?: {
    repo?: string;
    live?: string;
  };
  highlights?: string[];
};

export type Project = {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
};
