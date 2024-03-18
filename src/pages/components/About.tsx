import React from 'react'
import { Profile } from './icons/Profile'

export const About = () => {


    return (
        <div className='flex items-center justify-center py-6 bg-[#F7FAFC]'>
            <div className='max-w-[1180px] w-[90%] flex  bg-white rounded-md border-2 py-5 pr-5 pl-[14px]'>
                <div className='pr-[11px]'>
                    <p className='w-[230px] px-[10px] py-[11px] rounded-md bg-[#E5F1FF]'>Auto mobile</p>
                    <p className='w-[230px] px-[10px] py-[11px]'>Auto mobile</p>
                    <p className='w-[230px] px-[10px] py-[11px]'>Auto mobile</p>
                    <p className='w-[230px] px-[10px] py-[11px]'>Auto mobile</p>
                    <p className='w-[230px] px-[10px] py-[11px]'>Auto mobile</p>
                    <p className='w-[230px] px-[10px] py-[11px]'>Auto mobile</p>
                    <p className='w-[230px] px-[10px] py-[11px]'>Auto mobile</p>
                    <p className='w-[230px] px-[10px] py-[11px]'>Auto mobile</p>
                    <p className='w-[230px] px-[10px] py-[11px]'>Auto mobile</p>
                    <p className='w-[230px] px-[10px] py-[11px]'>Auto mobile</p>
                </div>
                <div className="bg-[url('/./head.png')] w-[664px] bg-no-repeat h-[360px] ">
                    <div className='pt-[53px] pl-[45px] '>
                        <h2 className='font-normal text-[28px] '>Latest trending</h2>
                        <h1 className='font-bold text-[32px]'>Electronic items</h1>
                        <button className='bg-white text-base font-medium px-4 py-[10.5px] rounded-md'>Learn more</button>
                    </div>
                </div>
                <div className='pl-[20px]   flex flex-col gap-[10px]'>
                    <div className='bg-[#E3F0FF] rounded-md py-3 px-[10px]'>
                        <div className='flex gap-[9px]'>
                            <Profile />
                            <h1 className='font-normal text-base'>Hi , user <br /> let's get started</h1>
                        </div>
                        <div className='flex flex-col gap-[7px] pt-4 w-[200px]'>
                            <button className='bg-[#127FFF] text-white rounded-md py-2'> Join now</button>
                            <a className='bg-white rounded-md  flex items-center justify-center py-2 text-[#0D6EFD]' href=''>Log in </a>
                        </div>
                    </div>
                    <div className='bg-[#F38332] text-white font-normal text-base rounded-md pt-4 pl-4 pb-[22px]'>
                        Get US $10 off <br /> with a new <br /> supplier
                    </div>
                    <div className='bg-[#55BDC3] text-white font-normal text-base rounded-md pt-4 pl-4 pb-[22px]'>
                        Send quotes with <br /> supplier <br /> preferences
                    </div>
                </div>
            </div>

        </div>
    )
}
