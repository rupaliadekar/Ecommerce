import React, { useState } from 'react'

const AddProduct = () => {
   const[name , setName]= useState();
   const[price , setPrice]= useState();
   const[category , setCategory]= useState();
   const[company , setCompany]= useState();
    const [error,setError]= React.useState(false)

const addProduct = async ()=>{

    console.warn("!name");
    if(!name || !price || !category || !company)
{
    setError(true)
    return false;
}
  console.warn(name, price, category, company);
  const userId = JSON.parse(localStorage.getItem('user')).id;
  let result = await fetch("http://localhost:5000/add-product",{
    method:'post',
    body:JSON.stringify({name, price, category,company, userId}),
    headers:{
        "content-Type":"application/json"
    }
  });

  result =await result.json();
  console.warn(result);
}
  
  return (
    <div className='product'>
    <h1>Add Products</h1>
    <input type="text" placeholder='Enter Product Name' className='input' 
      value={name}  onChange={(e)=>{setName(e.currentTarget.value)}}
    />
    {error && !name && <span className="invalid-input">Enter valid name</span>}

    <input type="text" placeholder='Enter Product Price ' className='input' 
      value={price}  onChange={(e)=>{setPrice(e.currentTarget.value)}}
    />
    {error && !price && <span className="invalid-input">Enter valid price</span>}

    <input type="text" placeholder='Enter Product Category' className='input' 
      value={category}  onChange={(e)=>{setCategory(e.currentTarget.value)}}
    />
    {error && !category && <span className="invalid-input">Enter valid category</span>}
    <input type="text" placeholder='Enter Product Company' className='input' 
      value={company}  onChange={(e)=>{setCompany(e.currentTarget.value)}}

    />
    {error && !company && <span className="invalid-input">Enter valid company</span>}

    <button onClick={addProduct} className='appButton'>Add Product</button>
        
    </div>
  )
}

export default AddProduct
