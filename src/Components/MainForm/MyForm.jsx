import React from 'react'
const MyForm = () => {
  return (
    <div className='myForm bg-[#121422] text-white md:h-[100vh] m-4 gap-6 p-4 rounded-xl h-auto'>
        <form >
            <label htmlFor="" className='first text-sm md:font-normal font-extralight'>Runner Tag</label> <br />
            <input type="text" placeholder='Runner title here' className='firstInput w-[98%] gap-2 md:py-2.5 md:px-4 bg-transparent mt-2.5 rounded-lg border-[1px] border-solid border-[#322F66] py-1.5 px-2'/><br />
            <div className=" md:flex block md:justify-between h-7.5">
            <label className='text-sm mt-2.5 md:font-normal font-extralight'htmlFor="">Parser Type</label> <br />
            <label className='text-sm mt-2.5 hidden md:block md:font-normal font-extralight mr-[195px]'htmlFor="">Date Source</label> <br />
            <select className='w-[98%] md:hidden md:gap-2 rounded-xl bg-transparent md:mt-2.5 text-gery-400 md:py-2.5 border-[1px] border-solid border-[#322F66] py-1.5 gap-1 text-xs p-0' name="parser" id="">
                <option className='bg-black'>Select Parser Type</option>
                <option className='bg-black'value="1">type 1</option>
                <option className='bg-black'value="2">type 2</option>
                <option className='bg-black'value="3">type 3</option>
            </select>
            </div>
            <div className="md:flex block md:justify-between h-7.5">
            <label className='text-sm mt-2.5 md:font-normal font-extralight md:hidden'htmlFor="">Date Source</label> <br />
            <select className='w-[49%] hidden md:block md:gap-2 rounded-xl bg-transparent mt-2.5 text-gery-400 md:py-2.5 border-[1px] border-solid border-[#322F66] py-1.5 gap-1 text-xs p-0' name="parser" id="">
                <option className='bg-black'>Select Parser Type</option>
                <option className='bg-black'value="1">type 1</option>
                <option className='bg-black'value="2">type 2</option>
                <option className='bg-black'value="3">type 3</option>
            </select>
            <select className='w-[98%] md:w-[49%] md:gap-2 rounded-xl bg-transparent mt-2.5 text-gery-400 md:py-2.5 border-[1px] border-solid border-[#322F66] py-1.5 gap-1 text-xs p-0' name="parser" id="">
                <option className='bg-black'value="0">Select Parser Type</option>
                <option className='bg-black'value="1">type 1</option>
                <option className='bg-black'value="2">type 2</option>
                <option className='bg-black'value="3">type 3</option>
            </select> <br />
            </div>

            <div className="md:flex block md:justify-between h-7.5">
            <label className='text-sm mt-2.5 md:font-normal font-extralight'htmlFor="">Https Url</label>
            <label className='text-sm mt-2.5 hidden md:block md:font-normal font-extralight'htmlFor="">Username</label> <br />
            <input className='w-[98%] md:hidden my-2 mx-0.5 md:py-3 md:px-4 rounded-xl bg-transparent border-[1px] border-solid border-[#322F66] py-1.5 px-2 text-xs' type="text" placeholder='Https URl here'/>
            </div>
            <div className="md:flex block md:justify-between h-7.5">
            <label className='text-sm mt-2.5 md:font-normal font-extralight md:hidden'htmlFor="">Username</label> <br />
            <input className='w-[98%] hidden md:block my-2 mx-0.5 md:py-3 md:px-4 rounded-xl bg-transparent border-[1px] border-solid border-[#322F66] py-1.5 px-2 text-xs' type="text" placeholder='Https URl here'/>
            <input className='w-[98%] md:[49%] my-2 mx-0.5 md:py-3 md:px-4 rounded-xl bg-transparent border-[1px] border-solid border-[#322F66] py-1.5 px-2 text-xs' type="text" placeholder='Enter Username here'/>
             <br />
            </div>
            
            <div className="md:flex block md:justify-between h-7.5">
            <label className='text-sm mt-2.5 md:font-normal font-extralight'htmlFor="">Password</label>
            <label className='text-sm mt-2.5 hidden md:block md:font-normal font-extralight ml-10'htmlFor="">Confirm Password</label> <br />
            <input className='w-[98%] md:hidden my-2 mx-0.5 md:py-3 md:px-4 rounded-xl bg-transparent border-[1px] border-solid border-[#322F66] py-1.5 px-2 text-xs' type="text" placeholder='Password here'/>
            </div>
            <div className="md:flex block md:justify-between h-7.5">
            <label className='text-sm mt-2.5 md:font-normal font-extralight md:hidden'htmlFor="">Confirm Password</label> <br />
            <input className='w-[98%] hidden md:block my-2 mx-0.5 md:py-3 md:px-4 rounded-xl bg-transparent border-[1px] border-solid border-[#322F66] py-1.5 px-2 text-xs' type="text" placeholder='Password here'/>
            <input className='w-[98%] md:[49%] my-2 mx-0.5 md:py-3 md:px-4 rounded-xl bg-transparent border-[1px] border-solid border-[#322F66] py-1.5 px-2 text-xs' type="text" placeholder='Confirm Password here'/>
             <br />
            </div>
            
            <div className="md:flex block md:justify-between h-7.5">
            <label className='text-sm mt-2.5 md:font-normal font-extralight'htmlFor="">Author</label>
            <label className='text-sm mt-2.5 hidden md:block md:font-normal font-extralight'htmlFor="">Label Tag</label> <br />
            <select className='w-[98%] md:gap-2 md:hidden rounded-xl bg-transparent mt-2.5 text-gery-400 md:py-2.5 border-[1px] border-solid border-[#322F66] py-1.5 gap-1 text-xs p-0' name="parser" id="">
                <option className='bg-black'value="0">Select Author</option>
                <option className='bg-black'value="1">author 1</option>
                <option className='bg-black'value="2">author 2</option>
                <option className='bg-black'value="3">author 3</option>
            </select>
            </div>

            <div className="md:flex block md:justify-between h-7.5">
            <label className='text-sm mt-2.5 md:font-normal font-extralight md:hidden'htmlFor="">Label Tag</label> <br />
            <select className='w-[49%] hidden md:block md:gap-2 rounded-xl bg-transparent mt-2.5 text-gery-400 md:py-2.5 border-[1px] border-solid border-[#322F66] py-1.5 gap-1 text-xs p-0' name="parser" id="">
                <option className='bg-black'>Select Author</option>
                <option className='bg-black'value="1">author 1</option>
                <option className='bg-black'value="2">author 2</option>
                <option className='bg-black'value="3">author 3</option>
            </select>
            <select className='w-[98%] md:w-[49%] md:gap-2 rounded-xl bg-transparent mt-2.5 text-gery-400 md:py-2.5 border-[1px] border-solid border-[#322F66] py-1.5 gap-1 text-xs p-0' name="parser" id="">
                <option className='bg-black'value="0">Select Label Type</option>
                <option className='bg-black'value="1">label 1</option>
                <option className='bg-black'value="2">label 2</option>
                <option className='bg-black'value="3">label 3</option>
            </select> <br />
            </div>

             <div className="md:flex block md:justify-between h-7.5">
            <label className='text-sm mt-2.5 md:font-normal font-extralight'htmlFor="">Update Frequency</label>
            <label className='text-sm mt-2.5 hidden md:block md:font-normal font-extralight'htmlFor="">Traffic Light Protocol</label> <br />
            <select className='w-[98%] md:gap-2 md:hidden rounded-xl bg-transparent mt-2.5 text-gery-400 md:py-2.5 border-[1px] border-solid border-[#322F66] py-1.5 gap-1 text-xs p-0' name="parser" id="">
                <option className='bg-black'value="0">Select Frequency</option>
                <option className='bg-black'value="1">frequency 1</option>
                <option className='bg-black'value="2">frequency 2</option>
                <option className='bg-black'value="3">frequency 3</option>
            </select>
            </div>
            
            <div className="md:flex block md:justify-between h-7.5">
            <label className='text-sm mt-2.5 md:font-normal font-extralight md:hidden'htmlFor="">Traffic Light Protocol</label> <br />
            <select className='w-[49%] hidden md:block md:gap-2 rounded-xl bg-transparent mt-2.5 text-gery-400 md:py-2.5 border-[1px] border-solid border-[#322F66] py-1.5 gap-1 text-xs p-0' name="parser" id="">
                <option className='bg-black'>Select Frequency</option>
                <option className='bg-black'value="1">frequency 1</option>
                <option className='bg-black'value="2">frequency 2</option>
                <option className='bg-black'value="3">frequency 3</option>
            </select>
            <select className='w-[98%] md:w-[49%] md:gap-2 rounded-xl bg-transparent mt-2.5 text-gery-400 md:py-2.5 border-[1px] border-solid border-[#322F66] py-1.5 gap-1 text-xs p-0' name="parser" id="">
                <option className='bg-black'value="0">Select TLP</option>
                <option className='bg-black'value="1">tlp 1</option>
                <option className='bg-black'value="2">tlp 2</option>
                <option className='bg-black'value="3">tlp 3</option>
            </select> <br />
            </div>


            <button className='bg-orange-500 text-black w-full py-2.5 px-3 rounded-lg gap-3 mt-6 border-[1px] border-solid border-white min-[350px]:max-md:p-1.5 min-[350px]:max-md:mt-3'>Create Runner</button>
        </form>
    </div>
  )
}

export default MyForm