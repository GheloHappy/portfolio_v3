
import Link from 'next/link'
import React from 'react'

function Nav() {
    return (
        <div className='w-full text-white sticky top-0 bg-black p-3 text-[1.8rem]'>
            <Link href={'/'}>GHELO</Link>
        </div>
    )
}

export default Nav