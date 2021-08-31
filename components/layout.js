import Navigation from './navigation'

const Layout = ({children}) => {
    return(
        <>
        <Navigation></Navigation>
        <div>
            <main>
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout