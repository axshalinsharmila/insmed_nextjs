import { useState } from "react";
import {
    AdjustmentsHorizontalIcon,
    ViewColumnsIcon,
    ArrowUpTrayIcon,
    ListBulletIcon
  } from "@heroicons/react/24/outline";
  import { useRouter } from 'next/router';
  import Link from 'next/link';

const StudyModal = ()=>{

 const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);
return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-1">

    
       <div className="md:flex  px-4 py-4 justify-between relative">
      <div className="flex items-center justify-center cursor-pointer">
        <div className="size-6 ">
          <AdjustmentsHorizontalIcon />
        </div>
        <button
          className="px-4 py-2 rounded text-sm"
          onClick={toggleDropdown}
        >
          Select Study
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          id="dropdown-backdrop"
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={closeDropdown}
        />
      )}

      {/* Dropdown */}
      <div
        id="dropdown-menu"
        className={`${
          isOpen ? "block" : "hidden"
        } absolute left-6  top-10 mt-2 w-32 bg-white shadow-lg rounded z-20`}
      >
        <ul>
          <li
            onClick={closeDropdown}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Option 1
          </li>
          <li
            onClick={closeDropdown}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Option 2
          </li>
          <li
            onClick={closeDropdown}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Option 3
          </li>
        </ul>
      </div>

      
        <div>
          <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center justify-center">
              <div className="h-6 w-6  ">
                <ListBulletIcon />
              </div>
              <Link href="/deviations">
              <p className="text-sm p-2 cursor-pointer" >View Deviations </p>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-6 w-6  ">
                <ViewColumnsIcon />
              </div>
              <p className="text-sm p-2 cursor-pointer">View Active / Historical deviation </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-6 w-6  ">
                <ViewColumnsIcon />
              </div>
              <p className="text-sm p-2 cursor-pointer">View Rule Book </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
)
}
export default StudyModal;