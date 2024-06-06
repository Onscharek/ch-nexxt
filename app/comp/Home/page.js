import React from 'react'
import Nav from '../Nav/page'
import IMG from "../../../public/IMG.jpg"
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Nav />
      <div className='cont'>
        <div className='par' style={{ color: '#b8b8b8' }}>
          <span style={{ fontSize: 'xx-large',color:'rgb(200, 200, 200)',textShadow:'  0px 1px 2px ' }}> <b>Hello.</b></span>
          <p style={{ paddingTop:'4%'}}>I'm <b>Ons Charek</b>, a passionate and dedicated full-stack developer <br />
            with a strong focus on JavaScript technologies. <br />
            With a background in both front-end and back-end development,<br />
            I have a comprehensive understanding of how to create seamless <br/>
            and efficient web applications <br />
            from start to finish.</p>
        </div>
        <div>
          <Image className='pp' src={IMG} alt='ee' width={420} height={600} style={{ marginLeft: '20%', marginTop: '1.5%' }} />
        </div>
      </div>



    </div>
  )
}

export default page