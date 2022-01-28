import Head from "next/head";
import axios from "../axios";

import Footer from "../components/Footer";
import Header from "../components/Header";
import MovieRow from "../components/MovieRow";

import {
  getTrending,
  getComedy,
  getAdventure,
  getAction,
  getAnimation,
  getHorror,
  getMusic,
  getRomance,
  getScienceFiction,
  getThriller,
} from "../utils/api";

export const getStaticProps = async () => {
  const { data: trending } = await axios.get(getTrending);
  const { data: comedy } = await axios.get(getComedy);
  const { data: adventure } = await axios.get(getAdventure);
  const { data: action } = await axios.get(getAction);
  const { data: horror } = await axios.get(getHorror);
  const { data: fiction } = await axios.get(getScienceFiction);
  const { data: anime } = await axios.get(getAnimation);
  const { data: music } = await axios.get(getMusic);
  const { data: romance } = await axios.get(getRomance);

  const { data: thriller } = await axios.get(getThriller);
  const rand = Math.floor(Math.random() * (thriller?.results?.length || 1));

  return {
    props: {
      trending: trending?.results || [],
      comedy: comedy?.results || [],
      adventure: adventure?.results || [],
      action: action?.results || [],
      horror: horror?.results || [],
      fiction: fiction?.results || [],
      anime: anime?.results || [],
      music: music?.results || [],
      romance: romance?.results || [],
      thriller: thriller?.results[rand] || {},
    },
    revalidate: 3600,
  };
};

export default function Home({
  trending,
  comedy,
  adventure,
  action,
  horror,
  fiction,
  anime,
  music,
  romance,
  thriller,
}) {
  return (
    <>
      <Head>
        <title>NetFlix Clone</title>
        <meta name="description" content="netflix clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Header movie={thriller} />

        <main className="container">
          <MovieRow movies={trending} type="Trending Movies" />
          <MovieRow movies={adventure} type="Adventure Movies" />
          <MovieRow movies={action} type="Action Movies" />
          <MovieRow movies={comedy} type="comedy Movies" />
          <MovieRow movies={anime} type="Animation Movies" />
          <MovieRow movies={horror} type="Horror Movies" />
          <MovieRow movies={music} type="Music Movies" />
          <MovieRow movies={romance} type="Romance Movies" />
          <MovieRow movies={fiction} type="Science Fiction Movies" />
        </main>
        <div className="ruler"></div>

        <Footer />
      </>
    </>
  );
}
