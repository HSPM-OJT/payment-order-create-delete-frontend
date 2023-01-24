
import Footer from "../footer/Footer"
import MainNavigation from "./MainNavigation"

function Layout(props){
    return (
        <div className="container-fluid">
            <MainNavigation />

            <main>
        {props.children}
            </main>
            <Footer />

        </div>
    )
}

export default Layout