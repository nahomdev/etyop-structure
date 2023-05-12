
import React from "react";

interface PROPS {
    onchange: (e: string) => void;
    text:String
  }

export const CustomButton = ({onchange,text}:PROPS) => {
    return (
        <button
        onClick={(e:any)=>onchange(e)}
        className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        {text}
      </button>
    )   
}