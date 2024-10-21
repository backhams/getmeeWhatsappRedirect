"use client";

import { useEffect, useState } from "react";
import { useRouter,useParams  } from "next/navigation";

export default function WhatsappGroup() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("GetMee.in Redirecting to WhatsApp group...");
  const router = useRouter();
  
  const { id: groupId } = useParams(); // Extracting the dynamic 'id' parameter from the URL

  useEffect(() => {
    // Simulating loading before redirect
    const timer = setTimeout(() => {
      if (groupId) {
        window.location.href = `https://chat.whatsapp.com/${groupId}`; // Redirect to the dynamic WhatsApp group link
      } else {
        setMessage("No WhatsApp group ID provided.");
      }
    }, 2000); // 2 seconds delay before redirect

    return () => clearTimeout(timer);
  }, [groupId]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {loading && (
        <div className="text-xl font-semibold">
        {message}
        </div>
      )}
    </div>
  );
}
