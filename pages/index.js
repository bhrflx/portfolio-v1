import { Suspense, useRef, useState } from 'react'
import useWindowSize from '../lib/useWindowSize'
import Link from 'next/link'
import Image from 'next/image'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../lib/mdxUtils'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Html, Stars } from '@react-three/drei'
import Welcome from '../components/Welcome'
import { BsArrowDown } from 'react-icons/bs'
import { NextSeo } from 'next-seo'
import CookieConsent from 'react-cookie-consent'

export default function Home({ projects }) {
  const ref = useRef();

  const { width } = useWindowSize();

  function Rig() {
    const [vec] = useState(() => new THREE.Vector3())
    const { camera, mouse } = useThree()
    useFrame(() => {
      camera.position.lerp(vec.set(mouse.x * 0.1, mouse.y * 0.1, 1), 0.05);
      camera.lookAt(0, 0, 0)
    })
    return null
  }

  const SEO = {
    title: "Home",
    openGraph: {
        title: "Felix Bahr | Home"
    },
    canonical: 'https://felixbahr.com',
}
  

  return (
    <>
      <NextSeo {...SEO}/>
      <section className="w-full h-[80vh] bg-black overflow-hidden sm:h-[90vh]">
        <Canvas dpr={[1, 1.5]} colorManagement camera={{ position: [0, 0, 1], fov: `${width < 639 ? 90 : 50}` }}>
          <directionalLight position={[0, 0, 3]}/>
          <Suspense fallback={<Html><p className="text-gray-300 text-xs font-button uppercase">Loading...</p></Html>}>
            <Stars radius={50} depth={50} count={5000} factor={4} saturation={0} fade />
            <Welcome/>
          </Suspense>
          <Html fullscreen zIndexRange={[40, 0]} style={{pointerEvents: 'none'}}>
            <div className="h-full p-10 mt-64 sm:mt-48 flex flex-col justify-center items-center text-center text-gray-300 font-button">
              <h3 className="w-1/3 text-xl mb-10 uppercase lg:w-5/6 xl:w-2/3 sm:w-[90vw] sm:mb-5 sm:text-base">I'm Felix. I'm a communication design student and frontend-developer based in Constance, Germany</h3>
              <BsArrowDown size={30} style={{color: '#D4D4D4'}}/>
            </div>
          </Html>
          <Rig/>
        </Canvas>
      </section>

      <section className="w-full bg-gradient-to-b from-black via-gray-900 to-gray-800">
        <div className="w-full pt-48">
          <h1 className="text-gray-300 text-5xl text-center uppercase mb-10">Selected Projects</h1>
          <div className="grid gap-3 grid-cols-[repeat(auto-fit,256px)] place-content-center place-items-center mb-16 mx-10">
            {projects.filter(project => (project.data.selected === true)).map(project => (
              <Link key={project.filePath} href={`/work/${project.filePath.replace(/\.mdx?$/, '')}`}>
                <div className="group relative flex justify-center items-center w-64 h-64 bg-gray-400 bg-center bg-no-repeat bg-cover cursor-pointer">
                    <a className="absolute z-20 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-all">{project.data.title}</a>
                    <div className="w-full h-full absolute top-0 left-0 z-10 bg-black opacity-0 group-hover:opacity-70 transition-all"/>
                    <Image 
                        src={project.data.cover}
                        alt={`${project.data.title} Cover Image`}
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-row justify-center pb-16">
            <Link href='/work'>
              <a className="px-3 py-2 text-gray-300 font-button uppercase border border-gray-300 rounded-full hover:bg-gray-700 transition-all">See all Projects</a>
            </Link>
          </div>
        </div>
      </section>
      <CookieConsent 
        style={{ background: "#D4D4D4", color: "#262626" }}
        buttonStyle={{ background: "#262626", color: "#D4D4D4", fontSize: "13px", borderRadius: "9999px", padding: "8px 16px"}}
      >This website uses {" "}<span className="underline"><a href="https://www.cookiesandyou.com/" target="blank">cookies!</a></span></CookieConsent>
    </>
  )
}

const getSortedProjects = () => {
  const projects = postFilePaths.map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
      const { content, data } = matter(source)

      return {
          content,
          data,
          filePath,
      }
  })
  return projects.sort((a, b) => {
      if (a.data.date < b.data.date) {
        return 1
      } else {
        return -1
      }
  })
}

export async function getStaticProps() {
  const projects = getSortedProjects();

  return { props: { projects } }
}
