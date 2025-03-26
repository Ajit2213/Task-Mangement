import React from 'react'
import { useState } from 'react'
import { AddForm } from '../Pages/AddForm'
import { View } from '../Pages/View'
import { Link } from 'react-router-dom'
 import { Menu, X } from "lucide-react";

export const Nabar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-2 w-full h-16 flex items-center justify-between px-6 bg-gray-100 shadow-md">
      <h1 className="text-lg font-semibold text-gray-800">Task Management</h1>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 mr-6">
        <Link to="/" className="text-gray-700 hover:text-blue-500 ">View</Link>
        <Link to="/Added" className="text-gray-700 hover:text-blue-500">Task Add</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-48 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center md:hidden ">
          <Link
            to="/"
            className="block py-2 text-gray-700 hover:text-blue-500 w-full text-center"
            onClick={() => setIsOpen(false)}
          >
            View
          </Link>
          <Link
            to="/Added"
            className="block py-2 text-gray-700 hover:text-blue-500 w-full text-center"
            onClick={() => setIsOpen(false)}
          >
            Task Add
          </Link>
        </div>
      )}
    </nav>
  );
}
