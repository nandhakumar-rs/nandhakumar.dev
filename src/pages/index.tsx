import { readdirSync, readFileSync } from "fs";
import path from "path";
import PostShort from "../components/post-short.component";
import matter from "gray-matter";

export default function HomePage(props: any) {
  const { posts } = props;

  return (
    <div>
      <div className="max-w-lg">
        {posts.map((post: any, index: any) => {
          return <PostShort key={index} data={post} />;
        })}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const files = readdirSync(path.join("src", "posts"));

  const posts = files.map((filename) => {
    const mdMetaData = readFileSync(path.join("src", "posts", filename));
    return {
      data: matter(mdMetaData).data,
      slug: filename.replace(".mdx", ""),
    };
  });
  return { props: { posts: posts } };
};


