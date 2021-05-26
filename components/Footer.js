import Link from 'next/link'

const Footer = () => {
    return (
        <div className="h-24 w-full bg-gray-800 py-10 px-48 flex flex-col justify-center lg:px-24 md:px-10 sm:px-1">
            <div className="flex flex-row flex-wrap justify-between">
                <Link href="/imprint">
                    <a className="text-gray-300 font-button text-xs uppercase underline my-1 px-2">Imprint, Privacy</a>
                </Link>
                <p className="text-gray-500 font-button text-xs uppercase my-1 px-2">Portfolio V1 - Built with Next.js</p>
                <p className="text-gray-300 font-button text-xs uppercase my-1 px-2">&copy; Felix Bahr 2021. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
