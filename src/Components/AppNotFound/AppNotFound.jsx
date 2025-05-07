import React from "react";
import { Link } from "react-router";

const AppNotFound = () => {
  return (
    <div className="space-y-4 w-11/12 mx-auto max-w-[1200px] min-h-[calc(100vh-115px)]">
      <title>AppOcean | Not Found</title>

      <div className="p-4 py-[50px] bg-[#39455f6d] rounded-xl text-center ">
        <p className="font-semibold mb-[20px] text-[25px]">
          Sorry, we couldn't find that app
        </p>
        <p className="text-yellow-300 text-[18px]">
          Oops! The app you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <Link
          to="/"
          className="mt-6 text-blue-600 hover:underline inline-flex items-center">
          Go Back to Home →
        </Link>
      </div>
    </div>
  );
};

export default AppNotFound;
