import React, { useEffect } from 'react'

const Products_Page = () => {



    // useEffect(async()=>{
    //     try {
    //       const response = await fetch("http://localhost:3000/products/categories",{
    //         method: "GET",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       })
    //       if(!response.ok){
    //         console.log("data not found")
    //       }

    //       const categories = response.json()
    //       console.log(categories)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // })


  return (
    <div>
      <h1>This is an product page</h1>
    </div>
  )
}

export default Products_Page
