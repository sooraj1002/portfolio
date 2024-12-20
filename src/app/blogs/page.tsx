import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Blogs() {
  // Fetch the list of markdown files
  const blogsDirectory = path.join(process.cwd(), "blogs");
  const filenames = fs.readdirSync(blogsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(blogsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    // Generate a short preview of the blog content
    const preview = content.slice(0, 150) + "...";

    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      date: data.date,
      preview,
    };
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      <ul>
        {posts.map(({ slug, title, date, preview }) => (
          <li key={slug} className="mb-6">
            <Link href={`/blogs/${slug}`} className="block">
              <h2 className="text-xl font-semibold text-blue-500 hover:underline">
                {title}
              </h2>
            </Link>
            <p className="text-gray-500 text-sm mb-2">{date}</p>
            <p className="text-gray-400">{preview}</p>
            <Link
              href={`/blogs/${slug}`}
              className="text-blue-400 hover:underline text-sm"
            >
              Read more
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
