// import React from "react";

// export default function Delete() {
//   // This function is for handling the deletion process
//   const handleDelete = () => {
//     // Confirm if the user wants to delete all data
//     if (window.confirm("Are you sure you want to delete all data?")) {
//       // You can call your onDelete function or logic here
//       console.log("All data deleted!");
//       // You might call an API to actually delete data here
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Delete Data</h2>
//       <button
//         className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//         onClick={handleDelete}
//       >
//         Delete All Data
//       </button>
//     </div>
//   );
// }


import React from "react";
import Cookies from "js-cookie"; // Importing js-cookie library

export default function Delete() {
  const handleDelete = () => {
    // Ask for confirmation before deleting the data
    if (window.confirm("Are you sure you want to delete all data?")) {
      // Get all cookies
      const cookies = document.cookie.split(";");

      // Loop through all cookies and remove them
      cookies.forEach(cookie => {
        const cookieName = cookie.split("=")[0].trim();
        // Remove the cookie using js-cookie library
        Cookies.remove(cookieName, { path: '/', secure: window.location.protocol === 'https:', sameSite: 'Strict' });
      });

      // Log to verify deletion
      console.log("All cookies deleted!");

      // Reload the page to reflect the deletion
      window.location.reload(); // This will reload the page and reset the state
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Delete Data</h2>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={handleDelete}
      >
        Delete All Data
      </button>
    </div>
  );
}
