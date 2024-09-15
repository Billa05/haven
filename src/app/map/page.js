"use client";

import Olamaps from "@/components/OlaMap";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CityData } from "../actions/CItyMapData";
import EmojiMap from "@/components/EmojiMap";

export default function Home() {
  const [city, setCity] = useState("");
  const [dcity, setdCity] = useState("");
  const [isBlurred, setIsBlurred] = useState(true);

  const handleSearch = async (e) => {
    
    e.preventDefault();
    if (dcity.trim() !== "") {
      setIsBlurred(false);
      setCity(dcity);
    }
  };

  return (
    <>
      <div className="p-4 z-10 relative">
        <Link href={"/"}>
          <Button>BACK</Button>
        </Link>
      </div>
      <div className={`${isBlurred ? "filter blur-md" : ""}`}>
        <div className="p-10">
          <div className="rounded-md aspect-square">
            {city && <EmojiMap City={city}/>}
          </div>
        </div>
      </div>
      {isBlurred && (
        <div className="absolute inset-0 flex items-center justify-center">
          <form onSubmit={handleSearch} className="w-full max-w-sm space-y-2">
            <Input
              type="text"
              placeholder="Enter a city"
              value={dcity}
              onChange={(e) => setdCity(e.target.value)}
              className="w-full text-white"
            />
            <Button type="submit" className="w-full">
              Search
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
