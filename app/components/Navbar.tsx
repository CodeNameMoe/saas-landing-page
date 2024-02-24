import Image from 'next/image'
import React from 'react'
import Logo from '../../public/assets/Logo.svg'
import User from '../../public/assets/User.svg'
import Menu from '../../public/assets/Menu.svg'

const navLinks = [
    {name:"Features"},
    {name:"Pricing"},
    {name:"Enterprise"},
    {name:"Careers"},
]


function Navbar() {
  return (
    <nav className='flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:py-20'>
        <div className='flex items-center'>
           <Image src={Logo} alt='Logo' />
           <div className='hidden lg:flex pl-[74px] gap-x-[56px]'>
            {navLinks.map((item, index) => (
                <p className='text-[#36485C] font-medium' key={index}>{item.name}</p>
            ))}
           </div>
        </div>
        <div className='flex gap-x-5 items-center'>
            <p className='hidden lg:block font-medium text-[#36485C] pr-[56px]'>Open an account</p>
            <div className='flex items-center gap-x-2'>
                <Image src={User} alt='User Profile'/>
                <span className='hidden font-medium text-[#36485C] lg:block'>Sign in</span>
            </div>
            <Image className='lg:hidden' src={Menu} alt='Menue button'/>
        </div>
    </nav>
  )
}

export default Navbar 