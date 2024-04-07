import React from 'react'

const award = () => {
  return (
  <>
  <div className="section ">
        <div className="row flex flex-grow  ">
          <div className="col3 flex flex-col text-center items-center neumorphism ">
            <img
              className="w-1/3 "
              src="./images/awards_1.png"
              alt="Awards Image"
            />

            <div className="p-4">
              <h3 className="font-bold p-4 ">Won 2023 Startup</h3>
              <p>of the year award, from PDA Pakistan Digital Awards</p>
            </div>
          </div>
          <div className="col3 flex flex-col text-center items-center neumorphism ">
            <img
              className="w-1/3 "
              src="./images/awards_2.png"
              alt="Awards Image"
            />
            <div className="p-4">
              <h3 className="font-bold p-4 ">Rated 4.6 Stars</h3>
              <p>12,000+ reviews and 4.6 rating by satisfied customers</p>
            </div>
          </div>
          <div className="col3 flex flex-col text-center items-center  neumorphism">
            <img
              className="w-1/3 "
              src="./images/awards_3.png"
              alt="Awards Image"
            />

            <div className="p-4">
              <h3 className="font-bold p-4 ">Online E-file Provider</h3>
              <p>who has completed sandbox testing with FBR-IRIS</p>
            </div>
          </div>

          <div className="col3 flex flex-col text-center items-center  neumorphism">
            <img
              className="w-1/3  "
              src="./images/awards_4.png"
              alt="Awards Image"
            />

            <div className="p-4">
              <h3 className="font-bold p-4 ">Safe & Secure</h3>
              <p>your information is private and secure on our site</p>
            </div>
          </div>
        </div>
      </div>
  
  </>
  )
}

export default award
