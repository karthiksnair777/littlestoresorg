import React from 'react'

function Footer() {
  return (

 <div className='bg'>
       <div class="container mt-5 w-100" style={{height:'400px'}}>
  <div class="row g-3 text-dark">
    <div class="col-lg-5 fs-3">Little
    <p className=''style={{fontSize:'16px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio architecto veniam, natus officiis quidem vero beataesit amet consectetur adipisicing elit.</p>
    <h3 className=''style={{fontSize:'12px'}}>licensed by LittleStores</h3>
    </div>
      {/* <div class="col-lg-3">PAGES
          <h1 className='mt-1' style={{fontSize:'15px'}}>Home</h1>
          <h1 className='mt-1' style={{fontSize:'15px'}}>Login</h1>
          <h1 className='mt-1' style={{fontSize:'15px'}}>Register</h1>
      </div>
      <div class="col-lg-3 ">GUIDES
          <h3 className='mt-1' style={{fontSize:'15px'}}>react</h3>
          <h3 className='mt-1' style={{fontSize:'15px'}}>react bootstrap</h3>
          <h3 className='mt-1' style={{fontSize:'15px'}}>react router</h3>
      </div> */}
    <div class="col-lg-6 ms-auto ">CONTACT US

        <div className='mt-3 d-flex align-items-center'>
        <input className='rounded mt-4' style={{width:"200px", height:"30px"}} type="text" class="form-control" placeholder="Search"/>&nbsp; <button class="btn btn-success" style={{height:"30px"}}><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className="mt-4 d-flex gap-3">
  <i className="fa-brands fa-instagram fa-lg"></i>
  <i className="fa-brands fa-facebook fa-lg"></i>
  <i className="fa-brands fa-twitter fa-lg"></i>
  <i className="fa-brands fa-whatsapp fa-lg"></i>
</div>


    
        
    </div>
  </div>
  <p className='text-center mt-5' style={{fontSize:'12px'}}>all rights are reserved to ©littlesstores  under 2025</p>
</div>    
 </div>
  )
}

export default Footer