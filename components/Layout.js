import Nav from './Nav'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <>
            <Nav />
            <div className="bg-gray-300 max-w-screen min-h-screen pt-16">
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout
