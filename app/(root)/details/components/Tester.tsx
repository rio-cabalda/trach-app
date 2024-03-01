"use client";
import React, { useEffect, useState } from 'react';

const Tester = () => {
  // State variable to store the extracted id
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    // Extract id from the URL search parameters
    const urlParams = new URLSearchParams(window.location.search);
    const extractedId = urlParams.get('id');

    // Set the id in the state
    setId(extractedId);
  }, []);

  return (
    <div>
      {id && <p>{id}: "use client"</p>}
      {!id && <p>No id found in the URL</p>}
    </div>
  );
};

export default Tester;

