import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';
import { AiFillLinkedin, AiFillGithub,AiFillInstagram,AiOutlineTwitter,AiFillFacebook} from "react-icons/ai"

export default function App() {
  return (
    <MDBFooter className='bg-dark text-center text-white '>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/profile.php?id=100082647462764' role='button'>
            <AiFillFacebook />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/Priyanshu_1105' role='button'>
            <AiOutlineTwitter />
          </MDBBtn>

          
          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/_priyansh_u123/' role='button'>
            <AiFillInstagram />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/priyanshu-negi-87a56124a/' role='button'>
            <AiFillLinkedin />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/Priyanshu-752' role='button'>
            <AiFillGithub />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3 ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: Priyanshu Negi
       
      </div>
    </MDBFooter>
  );
}