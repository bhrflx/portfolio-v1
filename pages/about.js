import Image from 'next/image'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

export default function About() {
    const SEO = {
        title: 'About',
        openGraph: {
            title: 'Felix Bahr | About'
        }
    }
    return (
        <>
            <NextSeo {...SEO}/>
            <div className="w-full h-full pt-24 sm:pt-10 flex flex-row flex-wrap justify-center items-start">
                <div className="w-96 mb-10 mx-10">
                    <Image src="/assets/about/portrait-1.jpg" height={2048} width={1365}/>
                </div>
                <section className="max-w-xl sm:w-[90vw]">
                    <h3 className="font-bold">About</h3>
                    <p className="mb-5">Hi, I’m Felix! I’m currently studying communication design in the 6th semester at the HTWG in Constance. I love exploring everything digital but also have a great affinity for analogue photography. My favourite fields in design are UI/UX, Webdevelopment and Typedesign. </p>
                    <h3 className="font-bold">CV</h3>
                    <ul>
                        <li className="mb-5">
                            <h4 className="italic">2018 - now</h4>
                            <p>Undergraduate Studies Communication Design HTWG Constance</p>
                        </li>
                        <li className="mb-5">
                            <h4 className="italic">2017 - 2018</h4>
                            <p>Six month internship at <span className="underline"><a href="https://www.gmk.de/" target="blank">GMK Bayreuth</a></span></p>
                        </li>
                        <li className="mb-5">
                            <h4 className="italic">2017</h4>
                            <p>German A-Levels (Abitur)</p>
                        </li>
                    </ul>
                    <h3 className="font-bold">Software/Programming Skills</h3>
                    <ul className="mb-5">
                        <li>
                            <p>Adobe Creative Cloud</p>
                        </li>
                        <li>
                            <p>Cinema4D</p>
                        </li>
                        <li>
                            <p>Blender</p>
                        </li>
                        <li>
                            <p>Maya (Basics)</p>
                        </li>
                        <li>
                            <p>Unity Engine</p>
                        </li>
                        <li>
                            <p>Logic Pro X</p>
                        </li>
                        <li>
                            <p>HTML/CSS/Javascript</p>
                        </li>
                        <li>
                            <p>Git (Basics)</p>
                        </li>
                        <li>
                            <p>React/Next.js</p>
                        </li>
                        <li>
                            <p>C# (Basics)</p>
                        </li>
                        <li>
                            <p>Dart/Flutter</p>
                        </li>
                    </ul>
                    <h3 className="font-bold">Languages</h3>
                    <ul className="mb-24">
                        <li>
                            <p>German (Native)</p>
                        </li>
                        <li>
                            <p>English (C2)</p>
                        </li>
                        <li>
                            <p>(Currently trying to learn Russian)</p>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    )
}
