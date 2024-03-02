"use client";
import React from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";

const propertiesPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  return (
    <div>
      <button
        onClick={() => router.push("/")}
        className="bg-blue-200 p-2 rounded-sm"
      >
        Go Home {id}
      </button>
    </div>
  );
};

export default propertiesPage;
