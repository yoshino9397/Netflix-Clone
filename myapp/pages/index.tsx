import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511]  lg:h-[140vh]">
        <Head>
          <title>HOME</title>
        </Head>
        <Header />
        <main>
          <Banner />
          <section>
            {/* Banner */}
            {/* Banner */}
            {/* Banner */}
            {/* Banner */}
            {/* Banner */}
            {/* Banner */}
          </section>
        </main>
        {/* modal */}
      </div>
    </>
  );
};

export default Home;
