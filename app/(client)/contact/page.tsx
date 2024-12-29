"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  const getAllContacts = async () => {
    try {
      const res = await axios.get("/api/contact");

      if (res.data) {
        setContacts(res.data);
      }

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center text-blue-600 font-medium mt-5">
        <h2>Contact Forms</h2>
      </div>
      <div className="flex items-end justify-end me-3">
        <Link href={"/contact/add"}>
          <button className="btn bg-blue-600 px-4 py-2 text-white rounded">
            Add
          </button>
        </Link>
      </div>
      <div className="mt-5">
        <table className="w-full">
          <thead className=" bg-slate-300">
            <tr>
              <td>S.no</td>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
