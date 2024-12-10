"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error?.message);
  }, [error]);

  return (
    <html>
      <body>
        <p className="m-5">
          Something went wrong! Please try again later or contact support.
        </p>
        <p className="m-5">Global Error</p>
      </body>
    </html>
  );
}
