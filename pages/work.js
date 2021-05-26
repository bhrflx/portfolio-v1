import { useState } from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../lib/mdxUtils'
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import Chip from '../components/Chip';
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Work({ projects }) {
    const tags = ['Project', 'Experiment', 'Graphic Design', 'UI/UX', 'Development', 'Type Design','Visual Identity'];

    const [selectedCategories, setSelectedCategories] = useState([]);
    
    const handleSelect = (category) => {
        const isSelected = selectedCategories.includes(category);
        const newSelection = isSelected
        ? selectedCategories.filter(currentCat => currentCat !== category)
        : [...selectedCategories, category];
        setSelectedCategories(newSelection);
        //console.log(newSelection);
    };

    const filterResults = (array, filters) => {
        return array.filter(obj => {
            return filters.every(filter => {
                if(!filters.length) {
                    return true; // passing an empty filter means that filter is ignored.
                }
                return obj.data.tags.includes(filter);
            })
        })
    }

    return (
        <div className="h-full w-full p-10">
            <Head>
                <title>Felix Bahr - Work</title>
            </Head>
            <p className="text-base mb-3 font-semibold text-gray-800">Filter by tags</p>
            <div className="w-full flex flex-wrap flex-row mb-6">
                {tags.map((tag, index) => (
                    <Chip key={index} title={tag} onSelect={() => handleSelect(tag)}/>
                ))}
            </div>
            <hr className="mb-10 border-gray-400"/>
            <div className="grid gap-3 grid-cols-[repeat(auto-fit,256px)] place-items-center lg:place-content-center">
                <AnimateSharedLayout>
                    <AnimatePresence>
                        {filterResults(projects, selectedCategories).map((project) => (
                            <motion.div layout animate={{ opacity: 1, scale: 1}} initial={{ opacity: 0, scale: 0.8 }} exit={{opacity: 0, scale: 0.8}} key={project.filePath} className="flex flex-col">
                                <Link href={`/work/${project.filePath.replace(/\.mdx?$/, '')}`}>
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
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </AnimateSharedLayout>
            </div>
        </div>
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

