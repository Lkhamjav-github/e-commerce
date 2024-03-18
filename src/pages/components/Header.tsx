import React from 'react'
import { Logo } from './icons/Logo'
import { Brand } from './icons/Brand'
export const Header = () => {
    return (
        <div className='flex items-center justify-center py-6'>
            <div className='max-w-[1180px] w-[90%] flex justify-between'>
                <div className='flex items-center justify-center gap-[6px]'>
                    <Logo />
                    <Brand />
                </div>
                <div className='flex itmes-center border-[#0D6EFD] border-[2px] rounded-md'>
                    <input className='max-w-[406px]  rounded-md px-[8px] py-[10px]' type="text" placeholder='Search' />
                    <select className='border-l-[2px] border-[#0D6EFD]' id="Category">
                        <option value="todo">All category</option>
                        <option value="Hotoffer">Hot offer </option>
                        <option value="Giftboxes">Gift boxes</option>
                        <option value="done">Done</option>
                    </select>
                    <button className='bg-[#0D6EFD] text-white py-[10px] px-6'>Search</button>
                </div>
                <div className='flex gap-6'>
                    <div className='flex flex-col justify-center items-center'>
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 10C12.7625 10 15 7.7625 15 5C15 2.2375 12.7625 0 10 0C7.2375 0 5 2.2375 5 5C5 7.7625 7.2375 10 10 10ZM10 11.5C6.6625 11.5 0 13.175 0 16.5V17.75C0 18.4375 0.5625 19 1.25 19H18.75C19.4375 19 20 18.4375 20 17.75V16.5C20 13.175 13.3375 11.5 10 11.5Z" fill="#8B96A5" />
                        </svg>
                        <h2>Profile</h2>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 0H2C0.9 0 0.01 0.9 0.01 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM5 7H15C15.55 7 16 7.45 16 8C16 8.55 15.55 9 15 9H5C4.45 9 4 8.55 4 8C4 7.45 4.45 7 5 7ZM11 12H5C4.45 12 4 11.55 4 11C4 10.45 4.45 10 5 10H11C11.55 10 12 10.45 12 11C12 11.55 11.55 12 11 12ZM15 6H5C4.45 6 4 5.55 4 5C4 4.45 4.45 4 5 4H15C15.55 4 16 4.45 16 5C16 5.55 15.55 6 15 6Z" fill="#8B96A5" />
                        </svg>
                        <h2>Messages</h2>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.35 17.1302C10.59 17.8202 9.42003 17.8202 8.66003 17.1202L8.55003 17.0202C3.30003 12.2702 -0.129969 9.16017 3.10168e-05 5.28017C0.060031 3.58017 0.930031 1.95017 2.34003 0.990166C4.98003 -0.809834 8.24003 0.0301659 10 2.09017C11.76 0.0301659 15.02 -0.819834 17.66 0.990166C19.07 1.95017 19.94 3.58017 20 5.28017C20.14 9.16017 16.7 12.2702 11.45 17.0402L11.35 17.1302Z" fill="#8B96A5" />
                        </svg>
                        <h2>Orders</h2>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.29989 16.7997C5.14491 16.7997 4.21043 17.7447 4.21043 18.8997C4.21043 20.0546 5.14491 20.9996 6.29989 20.9996C7.45487 20.9996 8.39985 20.0546 8.39985 18.8997C8.39985 17.7447 7.45487 16.7997 6.29989 16.7997ZM0 1.04998C0 1.62747 0.472492 2.09996 1.04998 2.09996H2.09996L5.8799 10.0693L4.46242 12.6313C3.69593 14.0383 4.70392 15.7497 6.29989 15.7497H17.8497C18.4272 15.7497 18.8997 15.2772 18.8997 14.6997C18.8997 14.1223 18.4272 13.6498 17.8497 13.6498H6.29989L7.45487 11.5498H15.2772C16.0647 11.5498 16.7577 11.1193 17.1147 10.4683L20.8736 3.65394C21.2621 2.96095 20.7581 2.09996 19.9601 2.09996H4.42042L3.71693 0.598489C3.54894 0.230996 3.17094 0 2.77195 0H1.04998C0.472492 0 0 0.472492 0 1.04998ZM16.7997 16.7997C15.6447 16.7997 14.7102 17.7447 14.7102 18.8997C14.7102 20.0546 15.6447 20.9996 16.7997 20.9996C17.9547 20.9996 18.8997 20.0546 18.8997 18.8997C18.8997 17.7447 17.9547 16.7997 16.7997 16.7997Z" fill="#8B96A5" />
                        </svg>
                        <h2>
                            My cart
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
