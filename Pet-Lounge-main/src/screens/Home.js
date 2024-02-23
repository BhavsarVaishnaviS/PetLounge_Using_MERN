import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function Home() {
  const [search, setSearch] = useState('');
  const [petCategory, setpetCategory] = useState([]);
  const [petDetails, setPetDetails] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5550/api/petData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    //console.log(response[0],response[1]);
    setPetDetails(response[0]);
    setpetCategory(response[1]);
  }

  useEffect(() => {
    loadData()
  }, [])




  return (
    <div>
      <div><Navbar /></div>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel" style={{objectFit:"contain !important"}}>
        <div className="carousel-inner" id='carousel'>
          <div className='carousel-caption' style={{ zIndex: "10" }}>

            <div className="d-flex justify-content-center">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
              
            </div>

          </div>

          <div className="carousel-item active">
            <img src="https://img.freepik.com/premium-vector/cat-dog-logo-business-symbol_640381-242.jpg" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-vector/different-pets-concept_23-2148524031.jpg?w=740&t=st=1708450723~exp=1708451323~hmac=012149bbf5a2b1ce0da78b97e69237db6133efd727830f6820d3735bbf7d4890" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://as1.ftcdn.net/v2/jpg/06/30/17/00/1000_F_630170036_7Y8mRJl1C54QV8dJ4KzzMRTV6R8uBu7x.jpg" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-target="#carouselExampleFade" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-target="#carouselExampleFade" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      <div className='container'>
        {
          petCategory !== [] ?
            petCategory.map((data) => {
              return (
                <div className='row mb-2'>
                  <div key={data.id} className='fs-3 m-3 text-info fs-2'>
                    {data.petCategory}
                  </div>
                  <hr />
                  {
                    petDetails !== [] ?
                      petDetails.filter((item) => (item.petCategory === data.petCategory) && (item.petName.toLowerCase().includes(search.toLowerCase()))).map(filterItems => {
                        return (
                         // <div>{filterItems.petName}</div>
                          <div key={filterItems.id} className='col-12 col-sm-auto col-md-auto col-lg-auto'>
                            <Card petName={filterItems.petName} petDetails ={filterItems}
                              options={filterItems.options[0]} img={filterItems.img} >
                            </Card>
                          </div>
                        )
                      }) : <div>No Such Data Found</div>}
                </div>

              )
            })
            :
            <div>""""""""""</div>
        }

      </div>
      <div><Footer /></div>
    </div>
  )
}




// import React, { useEffect, useState } from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import Card from '../components/Card'

// export default function Home() {
//   const [search,setSearch]=useState('');
//   const [petCategory, setpetCategory] = useState([]);
//   const [petDetails, setPetDetails] = useState([]);

//   const loadData = async () => {
//     let response = await fetch("", {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     response = await response.json();
//     //console.log(response[0],response[1]);
//     setPetDetails(response[0])
//     setpetCategory(response[1])
//   }

//   useEffect(() => {
//     loadData()
//   }, [])








//   return (
//     <div>
//       <div><Navbar /></div>
//       <div><div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
//         <div className="carousel-inner" id='carousel'>
//           <div className='carousel-caption' style={{ zIndex: "10" }}>

//             <div className="d-flex justify-content-center">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
              
//             </div>

//           </div>

//           <div className="carousel-item active">
//             <img src="https://img.freepik.com/premium-vector/cat-dog-logo-business-symbol_640381-242.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
//           </div>
//           <div className="carousel-item">
//             <img src="https://img.freepik.com/free-vector/different-pets-concept_23-2148524031.jpg?w=740&t=st=1708450723~exp=1708451323~hmac=012149bbf5a2b1ce0da78b97e69237db6133efd727830f6820d3735bbf7d4890" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
//           </div>
//           <div className="carousel-item">
//             <img src="https://as1.ftcdn.net/v2/jpg/06/30/17/00/1000_F_630170036_7Y8mRJl1C54QV8dJ4KzzMRTV6R8uBu7x.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
//           </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div></div>
//       <div className='container'>
//         {
//           petCategory !== [] ? petCategory.map((data) => {
//             return (<div className='row mb-3'>
//               <div key={data._id} className='fs-3 m-3'>
//                 {data.petCategory}
//               </div>
//               <hr />
//               {petDetails !==[] ? petDetails.filter((item) => (item.petCategory === data.petCategory) &&  (item.petName.toLowerCase().includes(search.toLocaleLowerCase()))).map(filterItems => {
//                 return (
//                   <div key={filterItems._id} className='col-12 cl-md-6 col-lg-3'>
//                     <Card petDetails={filterItems}
//                   options={filterItems.packages[0]} ></Card></div>
//                 )
//               }) : <div>No Such Data Found</div>}
//             </div>

//             )
//           })
//             :
//             <div>""""""""""</div>
//         }

//         <Card /></div>
//       <div><Footer /></div>
//     </div>
//   )
// }