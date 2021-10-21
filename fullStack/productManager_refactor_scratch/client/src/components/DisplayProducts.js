import React , {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from '@reach/router'
import Delete from './Delete'



const DisplayProducts = (props)=>{
    const {productList, setProductList} = props
    const [flag, setFlag] = useState(true)

    
    const sortObject = (productList)=>{

        // const sortedProductList = productList.sort( function(a,b){
        // const titleA = a.title.toUpperCase()
        // const titleB = b.title.toUpperCase()
        //     if (titleA<titleB){
        //         return -1
        //     }
        //     if (titleA > titleB){
        //         return 1
        //     }
        //     return 0
        // } )

        // return sortedProductList

        return productList.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1)
    }

    
    

    useEffect( ()=>{
        axios.get('http://localhost:8000/api/project')
        .then( (res)=>{

            const SortedPeople = sortObject(res.data)
            setProductList(SortedPeople)
            

            // setProductList(res.data)
            

        })
   
        .catch( err=> console.log(err))
    },[] )
    


    const deleteFilter = (id)=>{
        const newList = productList.filter( (product)=>(
            product._id !== id
        ) )
        setProductList(newList)
        setFlag(!flag)

    }

    return(
        <div>
            <h1>DisplayProducts</h1>
            {
                productList?
                    productList.map( (element, index) =>(
                        <div key={index}> 
                            <Link to={`/product/${element._id}`}>{element.title}</Link>
                            <Link to={`/product/edit/${element._id}`}>Edit</Link>
                            
                            <Delete to={`product/delete/${element._id}`} id={element._id}  deleteFilter={deleteFilter} >Delete</Delete>
                            

                        </div>
                    ) )
                :null
            }


        </div>
    )
}

export default DisplayProducts