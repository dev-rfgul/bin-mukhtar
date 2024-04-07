import React from 'react'

const Button = ({buttonText,buttonText2}) => {
  return (
    <div>
        <div className="">
              <button className=" button glow-button text-2xl font-bold hover:shadow hover:text-white bg-primary text-white p-2 rounded-lg mt-4 ">
                {/* {" "} */}
                {buttonText}
                {buttonText2}
              </button>
            </div>
    </div>
  )
}

export default Button
