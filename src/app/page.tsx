"use client";

export default function Home() {

  const   setRole = (role: string) => {
    console.log("Response", role, document.cookie, location)
    document.cookie = `role=${role}; path=/`;
    location.pathname=`${role}`; 
  };

  return (
    <>
     <div className="flex flex-col items-center justify-center min-h-screen">
     <h1>Select Your Role</h1>
      <div className="flex gap-4">
        <button
          onClick={() => setRole("admin")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Set Admin Role
        </button>
        <button
          onClick={() => setRole("user")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Set User Role
        </button>
        {/* <button
          onClick={() => setRole("guest")}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Set Guest Role
        </button> */}
      </div>
    </div>
    </>
  );
}
