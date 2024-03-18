import { valueOrDefault } from 'chart.js/helpers'
import React from 'react'
import { string } from 'yup'

export const DealsOffer = () => {

    return (
        <div className='flex items-center justify-center py-6 bg-[#F7FAFC]'>
            <div className='max-w-[1180px] w-[90%] flex  bg-white rounded-md border-2 py-5 pr-5 pl-[14px]'>
                <div>
                    <h1>Deals and offers</h1>
                    <p>Hygiene equipments</p>
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 15 } as React.CSSProperties}></span>
                            </span>
                            days
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "value": 10 } as React.CSSProperties}></span>
                            </span>
                            hours
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 24 } as React.CSSProperties}></span>
                            </span>
                            min
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 56 } as React.CSSProperties}></span>
                            </span>
                            sec
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
