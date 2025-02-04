import Image from "next/image";
import {
  QuestionMarkCircleIcon,
  UserCircleIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";


const AdminHeader = () => {



  return (
    <>
    <header className="bg-white shadow-md flex  px-4 py-4 justify-between">
      {/* Logo and Title */}
      <div className="flex items-center space-x-4 ">
        <Image
          aria-hidden
          src="/assets/images.png"
          alt="Window icon"
          width={100}
          height={100}
        />
      </div>

      <h1 className=" hidden md:block md:text-2xl items-center py-2 font-bold text-blue-800 ">
        Protocol Deviation Classification
      </h1>

      <div className="flex items-center space-x-6">
        {/* User Name */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="h-8 w-8 flex items-center justify-center rounded-full ">
            <UserCircleIcon />
          </div>
          <span className="text-gray-700 font-medium">User Name</span>
          <div className="h-8 w-8 flex items-center justify-center  rounded-full ">
            <QuestionMarkCircleIcon />
          </div>

          <div className="h-8 w-8 flex items-center justify-center  rounded-full ">
            <ArrowRightStartOnRectangleIcon />
          </div>
        </div>
      </div>
    </header>
    {/* <AdminDashboard/> */}
    </>
  );
};
export default AdminHeader;
