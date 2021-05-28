import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { postFilePaths, POSTS_PATH } from '../../lib/mdxUtils'
import ReactPlayer from 'react-player/lazy'
import Date from '../../components/Date'
import Head from 'next/head'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
    img: (props) => <Image height={500} width={500} objectFit="contain" {...props} />,
    Head,
    Image,
    ReactPlayer,
  }

export default function Project({source, frontMatter}) {
    const SEO = {
        title: frontMatter.title,
        description: `${frontMatter.description && frontMatter.description}`,
        openGraph: {
            title: `Felix Bahr | ${frontMatter.title}`,
            description: `${frontMatter.description && frontMatter.description}`,
        }
    }

    return (
        <>
            <NextSeo {...SEO}/>
            <div className="flex flex-col justify-start items-center">
                {frontMatter.hero 
                    ? <div className="fixed z-0 w-full h-[70vh]">
                        <Image className="fixed" src={frontMatter.hero} alt={`Hero-Image ${frontMatter.title}`} layout="fill" objectFit="cover" objectPosition="center"/>
                    </div>
                    : <div className="relative w-full h-[70vh] mb-3 sm:h-96">
                        <Image src={frontMatter.cover} alt={`Hero-Image ${frontMatter.title}`} layout="fill" objectFit="contain" objectPosition="top"/>
                    </div>
                }
                <div style={frontMatter.hero && {marginTop: '70vh'}} className="relative w-full z-10 py-10 px-3 sm:pt-5 bg-gray-300 flex flex-col justify-start items-center">
                    <div className="text-gray-800">
                        <h1 className="text-4xl mb-1">{frontMatter.title}</h1>
                        <p className="text-gray-600 mb-5">
                            <Date dateString={frontMatter.date}/> 
                        </p>
                        <article className="prose prose-lg md:prose-sm">
                            <MDXRemote {...source} components={components} />
                        </article>
                        <div className="w-full mt-5 flex flex-row flex-wrap text-gray-600 text-xs font-button">
                            {frontMatter.tags.map(tag => (
                                    <p key={tag} className="mr-3 px-2 py-1 my-1 border border-gray-600 rounded-full whitespace-nowrap">{tag}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
    const source = fs.readFileSync(postFilePath)
  
    const { content, data } = matter(source)
  
    const mdxSource = await serialize(content, {
      // Optionally pass remark/rehype plugins
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
      scope: data,
    })
  
    return {
      props: {
        source: mdxSource,
        frontMatter: data,
      },
    }
  }

