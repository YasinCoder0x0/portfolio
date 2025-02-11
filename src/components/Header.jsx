import React from "react"

const Header = () => {
  return (
    <div className="header xl:flex xl:items-center xl:justify-between xl:bg-black xl:text-white xl:py-5 xl:px-5">
      <div className="xl:text-5xl">Logo</div>
      <ul className="xl:flex xl:gap-5 xl:text-[16px]">
        <li className="hover:text-blue-200 xl:cursor-pointer">About Me</li>
        <li className="hover:text-blue-200 xl:cursor-pointer">Contact Me</li>
        <li className="hover:text-blue-200 xl:cursor-pointer">Portfolio</li>
      </ul>
      <a href="" className="xl:px-5 xl:py-4 xl:rounded-2xl xl:border-2 xl:border-solid">Download My CV</a>
    </div>
    
  )
}

export default Header