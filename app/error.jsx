"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error?.message);
  }, [error]);

  return (
    <p className="m-5">
      Something went wrong! Please try again later or contact support.
    </p>
  );
}
