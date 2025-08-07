import React from 'react'

const Section2 = () => {
  return (
    <div className='grid2'>
        <div className='margin1'>
          <h2 className='h32'><span style={{color:'indigo', marginLeft:"20px",fontWeight:"bold", fontSize:"30px"}}> Sign Up</span>
            <br/>
         <span style={{color:"grey", marginLeft:"20px"}}> Connect & Collect..!</span></h2>
         <div>
            <form>
                <img src='	https://tse3.mm.bing.net/th?id=OIP.UP-6SyWGjdGvNZ82if3_SwHaHa&pid=Api&P=0&h=180' className='img6'/>
                <input type='text' placeholder='first name' className='input1' style={{marginRight:"20px", padding:"8px"}}></input>
                
                <input type='text' placeholder='last name' className='input1' style={{padding:"8px"}}></input>
               <br/>
               <br/>
               <div>
                <input type='mail' placeholder='email@' className='input1' style={{padding:"8px" ,marginLeft:"30px",paddingRight:"210px"}}></input>
                </div>
                <br/>
               <br/>
                <input type='text' placeholder='location' className='input1' style={{padding:"8px" ,marginLeft:"30px",paddingRight:"210px"}}></input>
                <br/>
               <br/>
                <input type='text' placeholder='userName' className='input1' style={{padding:"8px" ,marginLeft:"30px",paddingRight:"210px"}}></input>
                <br/>
               <br/>
                <input type='password' placeholder='password' className='input1' style={{marginRight:"25px", padding:"8px", marginLeft:"30px"}}></input>
                <input type='password' placeholder='Re-password' className='input1' style={{padding:"8px"}}></input>
                <br/>
                <h5 style={{marginLeft:"80px"}}>Accept Terms & Conditions. <span style={{color:'indigo',fontWeight:"bold"}}>Click Here</span>
                </h5>
                <br/>
                <button style={{padding:"8px", marginLeft:"30px", paddingLeft:"180px", paddingRight:"170px" , backgroundColor:"indigo", color:"white"}}>sign up</button>
            </form>
            <br/>
            <p style={{marginLeft:"65px"}}>Already a member of Denaurlen? <span style={{color:"rgb(75, 0, 130);", fontWeight:'bold ', }}>Sign In</span></p>
            <h5 style={{color:"indigo",paddingLeft:"160px"}}>Privacy Policy</h5>
            <h6 style={{marginLeft:"85px"}}>Denaurlen Copyright @ 2021, All Rights Reserved
            </h6>
         </div>
        </div>
        <div style={{backgroundColor:'#e6d6fd', height: "100%",
    width: "50%" , marginLeft:"270px",marginTop:"50px"}}>
        <h1>DENAURLEN</h1>
       <h3 style={{paddingLeft:"260px"}}> Every dream has a demand..!</h3>
            
        <img src='https://flourishing-puffpuff-ba46c8.netlify.app/static/media/image4.7779006f661911c983bb.png' className='img7'/>
        </div>
    </div>
  )
}

export default Section2;