
import Header from "../Components/Header";
import Info from "../Components/Info";
import Section from "../Components/Section";
import Products from "../Components/Products";
import { productsSection } from "../Constants/Constant";
const Home=()=>
{
     return(
        <div>
            <Header/>
            <Info/>
            <Section data={productsSection.iphonePro}/>
            <Section data={productsSection.iphone}/>
            <Section data={productsSection.macbookpro}/>
            <Products/>
        </div>
     )
}

export default Home;