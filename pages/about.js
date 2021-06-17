import Image from 'next/image'
import { NextSeo } from 'next-seo'

export default function About() {
    const SEO = {
        title: 'About',
        openGraph: {
            title: 'Felix Bahr | About'
        },
        canonical: 'https://felixbahr.com/about',
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
                    <p className="mb-5">Hi, I’m Felix! I’m currently studying communication design 
                    in the 6th semester at the HTWG in Constance. I love exploring everything digital 
                    but have a great affinity for analogue photography as well. My favourite fields in 
                    design are UI/UX, Webdevelopment and Typedesign. <br/>
                    In case you wondered why that button in the bottom right corner is there, I also 
                    really like cats, so shoot me a message on Instagram if you want to receive the 
                    best cat videos I can find every day. Believe me, you won't regret it. My next 
                    favourite thing after cats are old analogue cameras and I have developed an 
                    unhealthy habit of collecting as many as my bank account allows. You will find 
                    me carrying around at least one of them at all times. If you're interested in 
                    the images I produce with my analogue and digital treasures, click <a href="https://www.instagram.com/vagabond.bear/" className="underline" target="blank">here</a>
                    </p>
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
                            <p>Currently learning Russian</p>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    )
}
