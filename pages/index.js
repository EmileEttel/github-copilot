import Head from 'next/head'
import Image from 'next/image'
import FirstSection from '../components/common/firstsection'
import Header from '../components/common/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Header />
    <FirstSection />     
    </>
  )
}