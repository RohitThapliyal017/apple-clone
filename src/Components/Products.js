
import { Box } from "@mui/material";
import Productchild from "./Productchild";
import { products } from "../Constants/Constant";
const Products=()=>
{
    return(
        <>
        <Box style={{display: 'flex'}}>
            <Productchild data={products.watch}/>
            <Productchild data={products.ipad}/>
        </Box>
        <Box style={{display: 'flex'}}>
            <Productchild data={products.macbook}/>
            <Productchild data={products.homepod}/>
        </Box>
        <Box style={{display: 'flex'}}>
            <Productchild data={products.arcade}/>
            <Productchild data={products.applewatch}/>
        </Box>
        </>
           
        
        
    )
}
export default Products;