import Image from 'next/image'
import Head from 'next/head'
import Navbar from '@/components/homepage/nav'
import { Inter } from '@next/font/google'
import Umbrella_donate from '@/components/homepage/umbrella_donate'
import Midsection from '@/components/homepage/midsection'
import Whatwedo from '@/components/homepage/whatwedo'
import Register from '@/components/homepage/register'
import { FaRegIdBadge } from 'react-icons/fa'
import Footer from '@/components/homepage/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aasha | The Heart of Giving</title>
        <meta name='description' content='Generated by aasha'/>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      <Navbar/>
      <Umbrella_donate/>
      <Midsection/>
      <Whatwedo/>
      <Register/>
      <Footer/>
   
      
    </>
  )
}
