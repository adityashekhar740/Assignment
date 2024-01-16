import React from 'react'

const Content = () => {
  return (
    <div className='mt-[55px] flex flex-col gap-[46px]  ' >
        <h1 className='text-[32px] bg-gradient-to-r from-blue-900 to-blue-500 text-transparent bg-clip-text font-semibold ' >
            Relations and Functions ( Mathematics )
        </h1>
        <div className='flex gap-8 m-auto ' >
            <div className='color-[#06286E] text-[20px] font-semibold border-b-2 border-black-500 px-2 w-[70px]  ' >Study</div>
            <div className='color-[#696671] text-[20px]   ' >Quiz</div>
            <div className='color-[#696671] text-[20px]   '  >Test</div>
            <div className='color-[#696671] text-[20px]   '  >Game</div>
            <div className='color-[#696671] text-[20px]   '  >Others</div>
        </div>
        <div>
            <div>
                <div className='w-[712px] h-[393px] rounded-3xl p-7 m-auto bg-gradient-to-tr from-blue-400 via-blue-500 to-[#06286E] ' >
                <div className='flex justify-between' >
                    <img src="../../public/Frame (3).svg" alt="" />
                    <img src="../../public/Frame (2).svg" alt="" />
                </div>
                <h1 className='text-[white] text-[38px] ml-[180px] mt-[100px]' >9 + 6 + 7x - 2x - 3</h1>
                
                    
                
            </div>
        </div>
            <div className='w-[750px] m-auto p-5 flex gap-[100px] justify-center ' >
                <div className='pt-4' >
                    <img src="../../public/vector.svg" alt="" />
                </div>
                <div>
                    <img src="../../public/vector (1).svg" alt="" />
                </div>
                <div>
                    <h1 className='w-[66px] h-[17px] text-[24px] pt-4 ' >01/10</h1>
                </div>
                <div>
                    <img src="../../public/vector (2).svg" alt="" />
                    </div>
                <div className='pt-4' >
                    <img src="../../public/vector (3).svg" alt="" />
                </div>
            </div>
            </div>
    </div>
  )
}

export default Content