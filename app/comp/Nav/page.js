import Link from 'next/link'
import React from 'react'



const Nav=()=>{
  return (
  <div>
        <nav class="navbar navbar-expand-lg "  style={{boxShadow: '1px 7px 5px #0000009d' }}>
  <div class="container-fluid"style={{marginLeft:"35%"}} >
 

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

      <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="../comp/Home"style={{color:'rgb(200, 200, 200)',textShadow:'  0px 1px 2px '}}>Home</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="../comp/About"style={{color:'rgb(200, 200, 200)',textShadow:'  0px 1px 2px' }}>About me</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="../comp/proj"style={{color:'rgb(200, 200, 200)',textShadow:'  0px 1px 2px'}}>Projects</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="../comp/cont"style={{color:'rgb(200, 200, 200)',textShadow:'  0px 1px 2px'}}>Contacts</Link>
        </li>
        


      </ul>
    </div>
  </div>
</nav>

</div>
  )
}
export default Nav