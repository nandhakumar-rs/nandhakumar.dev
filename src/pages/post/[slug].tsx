import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import Post from "../../components/post.component";


export default function PostPage({ data, content, mdxSource }: any) {
  return (
    <div>
        <Post data={data} content={content} mdxSource={mdxSource} />
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
  return { props: { data, content, mdxSource } };
};
