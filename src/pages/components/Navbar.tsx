import React from 'react'

export const Navbar = () => {
    return (
        <div className='flex items-center justify-center py-6'>
            <div className='max-w-[1180px] w-[90%] flex justify-between'>
                <div className='flex items-center'>
                    <svg className='pr-[6px]' width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="#1C1C1C" />
                    </svg>
                    <p className='pr-[25px] font-medium text-base'>All Category</p>
                    <p className='pr-[25px] font-medium text-base'>Hot offers </p>
                    <p className='pr-[25px] font-medium text-base'>Gift boxes</p>
                    <p className='pr-[25px] font-medium text-base'>Projects</p>
                    <p className='pr-[25px] font-medium text-base'>Menu item</p>
                    <select className=' font-medium text-base' id="Category">
                        <option value="Help">Help</option>
                        <option value="Hotoffer">Hot offer </option>
                        <option value="Giftboxes">Gift boxes</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <div>
                    <select id="Category">
                        <option value="Help">English , USD</option>
                        <option value="Hotoffer">Hot offer </option>
                        <option value="Giftboxes">Gift boxes</option>
                        <option value="done">Done</option>
                    </select>
                    <select id="Category">
                        <option value="Help">Ship to</option>
                        <option value="Hotoffer">Mongolian TGR </option>
                    </select>
                </div>
            </div>
        </div >
    )
}
