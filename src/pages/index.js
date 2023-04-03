import { useContext, useEffect, useState } from 'react'
import {Context} from '@/components/context'
import TopBar from '@/components/topBar'
import Slider from '@/components/slider'
import Footer from '@/components/footer'
import TitleCards from '@/components/titleCards'
import HomeCard from '@/components/homeCards'
import Head from 'next/head'
import { Dancing_Script} from 'next/font/google'

const design = Dancing_Script({ weight: '700', subsets: ['latin'] })
export default function Home() {
  const {setSelectedProducts} = useContext(Context);
  const [success, setSuccess] = useState(false);
  const [results, setResults] = useState([]);
  useEffect(() => {
    if (window.location.href.includes('success')) {
setSelectedProducts([]);
setSuccess(true);
    }
  },[])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/products');
      const data = await response.json();
      setResults(data);
    }

    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title className={design.className}>Dealio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TopBar/>
        {success && (
          <div className='flex justify-center mb-5 bg-green-400 text-white text-2xl p-5 rounded-xl'>
            Thanks for your order!!
          </div>

        )}
        <Slider />
        <TitleCards />
        <HomeCard results={results} />
        <Footer />
      </main>
    </>
  )
}



