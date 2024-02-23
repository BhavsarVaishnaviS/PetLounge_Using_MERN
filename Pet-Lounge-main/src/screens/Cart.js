import React from 'react'
import { useCart, useDispatchCart } from '../components/ContextReducer';
import trash from "../trash.svg"

export default function Cart() {
    let data = useCart();
    let dispatch = useDispatchCart();
    if (data.length === 0) {
        return (
            <div>
                <div className='m-5 w-100 text-center fs-3'>The Basket is Empty!</div>
            </div>
        )
    }


    const handleCheckOut=async()=>{
        let userEmail=localStorage.getItem("userEmail");
        let response=await fetch("http://localhost:5550/api/orderData",{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                order_data:data,
                email:userEmail,
                order_date:new Date().toDateString()
            })
        
        }
        );
        console.log("Order Response",response)
        if(response.status===200){
            dispatch({type:"DROP"})
        }
    }
    let totalPrice = data.reduce((total, petDetails) => total + (petDetails.price), 0)
    return (
        <div>
            <div className='container m-auto mt-5 table-responsive table-responsive-sm  table-respnsive-md'>
                <table className='table table-hover'>
                    <thead className='text-success fs-4'>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>No.of Days</th>
                            <th scope='col'>Package</th>
                            <th scope='col'>Amount</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        {data.map((petDetails, index) => (
                            <tr>
                                <th scope='row' >{index + 1}</th>
                                <td >{petDetails.petName}</td>
                                <td>{petDetails.days}</td>
                                <td>{petDetails.package}</td>
                                <td>{petDetails.price}</td>
                                <td ><button type="button" className="btn p-0"><img src={trash} alt="delete" onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
                                
                        ))}
                    </tbody>
                </table>
                <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
                <div>
                    <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
                </div>

            </div>

        </div>
    )
}