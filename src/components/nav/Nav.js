import React from 'react'

export default function Nav() {
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <div className="logo text-[25px] text-blueColor">
          <strong>Books</strong>&nbsp;Store
        </div>
      </div>

      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Today's Deals</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Customer Service</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Registry</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Gift Cards</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Sell</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Rent</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Login/Register</li>
      </div>
    </div>
  )
}
