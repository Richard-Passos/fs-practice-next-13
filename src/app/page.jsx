import { Feed } from "@/components";
import { getData } from "@/utils";

const Home = async () => {
  const posts = await getData("https://promptopia-1.vercel.app/api/prompt");

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>

      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      <Feed posts={posts} />
    </section>
  );
};

export default Home;
