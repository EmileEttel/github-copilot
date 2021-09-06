import Head from 'next/head'
import Image from 'next/image'
import DontFlySolo from '../components/common/dontflysolo'
import FirstSection from '../components/common/firstsection'
import Footer from '../components/common/footer'
import FrequentlyAsked from '../components/common/frequentlyasked'
import Header from '../components/common/header'
import SecondSection from '../components/common/secondsection'
import ThirdSection from '../components/common/thirdsection'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Header />
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FrequentlyAsked />
    <DontFlySolo />
    <Footer />
    </>
  )
}
