import TopBar from '@/components/topBar'
import Slider from '@/components/slider'
import Footer from '@/components/footer'
import TitleCards from '@/components/titleCards'
import HomeCard from '@/components/homeCards'
import Head from 'next/head'


export default function Home({results}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TopBar/>
        <Slider />
        <TitleCards />
        <HomeCard results={results} />
        <Footer />
      </main>
    </>
  )
}


export async function getServerSideProps() {
  const baseUrl = process.env.BASE_URL;
  const results = await fetch(
    `${baseUrl}/api/products`
  ).then((res) => res.json());
  return {
    props: {
      results
    },
  };
}
