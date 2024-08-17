"use client"

import useDebounce from "@/app/hooks/useDebounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
const SearchTask = () => {

      const searchParams = useSearchParams()
      const pathName = usePathname()
      const { replace } = useRouter()

      const [searchTerm, setSearchTerm] = useState(searchParams.get("searchTerm") || "");

      const debouncedHandleChange = useDebounce((term) => {
            const params = new URLSearchParams(searchParams);
            if (term) {
                  params.set("searchTerm", term);
                  replace(`${pathName}?${params.toString()}`);
            } else {
                  params.delete("searchTerm");
                  replace(`${pathName}`);
            }
      }, 300);
      const handleChange = (term) => {
            setSearchTerm(term)
            debouncedHandleChange(term);
      }
      useEffect(() => {
            setSearchTerm(searchParams.get("searchTerm") || "");
      }, [searchParams]);
      return (
            <div className="flex">
                  <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
                        <input type="search" id="search-dropdown"
                              className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none" placeholder="Search Task with Title or Description"
                              required
                              value={searchTerm}
                              onChange={(e) => handleChange(e.target.value)}
                        />

                  </div>
            </div>

      );
};

export default SearchTask;