import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href={{ pathname: "/[store]", query: { store: "tate" } }}>
          Tate's Store
        </Link>
      </main>
    </>
  );
};

export default Home;
