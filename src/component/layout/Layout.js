import CategoryList from "../categories/CategoryList"
import Footer from "../footer/Footer"
import MainNavigation from "./MainNavigation"
import ImageSlide from "./ImageSlide"

function Layout(props){
    return (
        <div className="container-fluid">
            <MainNavigation />

            

            <ImageSlide />
            

            <main>

                <CategoryList/>
            </main>
            <Footer />

        </div>
    )
}

export default Layout