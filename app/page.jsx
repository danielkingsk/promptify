import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Share & Find
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
      Promptify is an open-source AI prompting tool for modern world to
      create, share and find creative prompts
    </p>

    <Feed />
  </section>
);

export default Home;