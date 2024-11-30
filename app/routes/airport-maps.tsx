import { useLoaderData } from "@remix-run/react";
import React from 'react';

export default function Feedback() {
  return (
    <div className="p-4 flex-1 border-b bg-blue-100">
      <h1 className="text-2xl font-bold">Index Page</h1>
      <h1>Airport Maps</h1>
      <p>This is the index page content.</p>
    </div>
  );
}