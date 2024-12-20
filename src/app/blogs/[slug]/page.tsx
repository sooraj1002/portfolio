import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // Fetch and parse the markdown file
  const blogsDirectory = path.join(process.cwd(), "blogs");
  const filePath = path.join(blogsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  // Convert markdown to HTML
  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-500 mb-6">{data.date}</p>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
