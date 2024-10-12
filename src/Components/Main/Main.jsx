import React from 'react'
import MyForm from '../MainForm/MyForm'

const Main = (props) => {
  return (
    <div className='main bg-gradient-to-r from-[#000D51] to-[#000000] '>
      <h2 className='text-left font-medium md:text-lg text-blue-300 m-2.5 ml-5 text-base'>{props.heading}</h2>
      <p className='md:font-light md:text-base text-[#C7CCE1] m-2.5 ml-5 font-extralight text-sm'>Ingestion breaks apart your data apart to fit the global intelligence knowledge base.</p>
      <p className='md:font-light md:text-base text-[#C7CCE1] m-2.5 ml-5 font-extralight text-sm'>All methods require atleast the <span className='font-medium text-orange-500 min-[350px]:max-md:font-medium'>COSMO</span> connector.</p>
      <MyForm />
    </div>
  )
}

export default Main