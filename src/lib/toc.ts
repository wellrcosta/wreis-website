export type TocItem = {
  depth: 2 | 3;
  text: string;
  id: string;
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function extractTocFromMdx(source: string): TocItem[] {
  const lines = source.split(/\r?\n/);
  const toc: TocItem[] = [];

  for (const line of lines) {
    const m = /^(#{2,3})\s+(.*)$/.exec(line.trim());
    if (!m) continue;
    const depth = m[1].length as 2 | 3;
    const text = m[2].trim();
    if (!text) continue;

    toc.push({
      depth,
      text,
      id: slugify(text),
    });
  }

  return toc;
}
