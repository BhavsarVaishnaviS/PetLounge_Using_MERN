import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MyOrder() {
    const [orderData,setOrderData]=useState({});

    const fetchMyOrder=async()=>{
        //credentials:'include'
        //Origin:"http://localhost:3000/login",
        console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:5000/api/myOrderData",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                useremail:localStorage.getItem('userEmail')
            })
        }).then(async (res)=>{
            let response=await res.json()
            await setOrderData(response)
        })

    }

    useEffect(()=>{
        fetchMyOrder()
    },[])
    
  return (
    <>
    <div>
      <Navbar></Navbar>
    </div>
    <div className='container'>
                <div className='row'>

                    {orderData !== {} ? Array(orderData).map(data => {
                        return (
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            return (
                                                <div  >
                                                    {arrayData.Order_date ? 
                                                    <div className='m-auto mt-5'>
                                                        {data = arrayData.Order_date}
                                                        <hr />
                                                    </div> :

                                                        <div className='col-12 col-md-6 col-lg-3' >
                                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                                <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{arrayData.petName}</h5>
                                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                        <span className='m-1'>{arrayData.days}</span>
                                                                        <span className='m-1'>{arrayData.package}</span>
                                                                        <span className='m-1'>{data}</span>
                                                                        <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                            ₹{arrayData.price}/-
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>



                                                    }

                                                </div>
                                            )
                                        })

                                    )
                                }) : ""
                        )
                    }) : ""}
                </div>


            </div>

    <div>
        <Footer></Footer>
    </div>
    </>
  )
}