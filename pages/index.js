import Layout from "../components/layouts/main";
import Link from "next/link";
import postsData from "../posts";
const { posts } = postsData;

export function getStaticProps() {
  return {
    props: {
      posts: posts.map(post => ({
        ...post,
        url: `${new Date(post.date).getFullYear()}/${post.id}`,
      })),
    },
  };
}

const Home = ({ posts }) => (
  <Layout>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <span>{post.date}</span>
          <Link href={post.url}>
            <a href={post.url}>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      ul li {
        padding: 10px 15px;
      }

      ul li span {
        color: var(--meta-text-color);
        display: block;
        font-size: 13px;
      }

      ul li a {
        font-weight: 600;
        color: var(--link-color);
        text-decoration: none;
      }

      @media (any-hover: hover) {
        ul li a:hover {
          background: var(--link-hover-background-color);
        }

        ul li a:active {
          background: #ccc;
        }
      }

      @media (min-width: 500px) {
        ul {
          padding: 20px 0;
          max-width: 42rem;
          margin: auto;
        }

        ul li {
          padding-left: 0;
        }

        ul li a {
          padding: 10px 15px;
          transition: 150ms background-color ease-in;
        }

        ul li span {
          display: inline-block;
          width: 160px;
          padding-right: 10px;
          text-align: right;
          font-size: inherit;
        }
      }
    `}</style>
  </Layout>
);

export default Home;
