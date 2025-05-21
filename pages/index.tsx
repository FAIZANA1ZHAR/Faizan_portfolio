import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Faizan Azhar| Software Developer</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="Faizan Azhar | Frontend Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Faizan Azhar | Frontend Developer" />
        <meta name="description" content="Hey! I'm Faizan Azhar, and I'm a Bachelor of Science in Information Technology graduate." />

        <meta property="og:title" content="Faizan Azhar | Frontend Developer" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://deverajc.com/" />
        <meta property="og:description" content="Hey! I'm Faizan Azhar, and I'm a Bachelor of Science in Information Technology graduate." />

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@jc_devz"/>
        <meta name="twitter:title" content="Faizan Azhar | Frontend Developer"/>
        <meta name="twitter:description" content="Hey! I'm Faizan Azhar, and I'm a Bachelor of Science in Information Technology graduate."/>
        <meta name="twitter:creator" content="@jc_devz"/>

        {/* <meta itemprop="name" content="Faizan Azhar | Frontend Developer"/>
        <meta itemprop="description" content="Hey! I'm Faizan Azhar, and I'm a Bachelor of Science in Information Technology graduate."/>
         */}
      </Head>
      <Home />
    </>
  );
}
