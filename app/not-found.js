import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen font-[family-name:var(--font-secondary)]">
      <p className="text-xl text-slate-100 font-medium">{`404: Page not found`}</p>
      <span className="text-md text-slate-200 font-normal">
        {`Sorry, the page you are looking for either does not exist. or in
          development. Please check back later.`}
      </span>
    </div>
  );
};

export default NotFound;
