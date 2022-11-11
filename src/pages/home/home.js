import React, { useEffect, useState } from 'react'


function Home() {

  useEffect(()=>{
    // document.getElementsByTagName("body")[0].style.setProperty("") = "url('../../imgs/library.jpg')"
  },[])

    return (
      <div>
        <div class="container">
            <div class="jumbotron mt-5">
                <div class="col-sm-8 mx-auto">
                <h1 class="text-center">Welcome to Books Management System</h1>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  