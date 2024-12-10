"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { extractPlaceholders, replacePlaceholders } from "@/lib/function";

export default function Form({ content }) {
  const [formData, setFormData] = useState({});
  const [letterData, setLetterData] = useState(null);
  const inputList = extractPlaceholders(content);

  function handleChangeInput(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [`%${name}%`]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setLetterData(replacePlaceholders(content, formData));

    toast.success("Generated success...", {
      autoClose: 2000,
      closeButton: false,
    });
  }

  return (
    <>
      <form className="mb-10">
        <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-2">
          {inputList.map((item, id) => (
            <input
              key={id}
              name={item}
              type="text"
              placeholder={item}
              className="w-full rounded-md border-0 bg-slate-800 p-2 focus:outline-none"
              onChange={handleChangeInput}
              defaultValue=""
            />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="rounded-lg bg-sky-600 px-3 py-1.5"
          type="submit"
        >
          Generate Surat &raquo;
        </button>
      </form>

      <div
        dangerouslySetInnerHTML={{ __html: letterData }}
        className={`mb-10 bg-slate-950 p-3 ${letterData ? "" : "hidden"} rounded-md`}
      ></div>
    </>
  );
}
