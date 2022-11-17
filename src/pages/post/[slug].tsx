import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import Post from "../../components/post.component";
import readingTime from "reading-time";

export default function PostPage({ data, content, mdxSource, readingTime }: any) {
  return (
    <div>
        <Post data={data} content={content} mdxSource={mdxSource} readingTime={readingTime} />
    </div>
  );
}

export const getStaticPaths = async () => {
  const files = readdirSync(path.join("src", "posts"));
  const paths = files.map((filename) => {
    return { params: { slug: filename.replace(".mdx", "") } };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params: { slug } }: any) => {
  const matterData = readFileSync(path.join("src", "posts", `${slug}.mdx`));
  const { data, content } = matter(matterData);
  const mdxSource = await serialize(content);
  return { props: { data, content, mdxSource, readingTime: readingTime(content).text } };
};
