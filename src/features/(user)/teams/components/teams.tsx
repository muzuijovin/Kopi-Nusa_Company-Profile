"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

export function TeamsSectionOne() {
  const [teams, setTeams] = useState<any[]>([]);
  const [getTeamsLoading, setGetTeamsLoading] = useState<boolean>(true);

  useEffect(() => {
    async () => {
      try {
        const res = await axios.get(
          "https://api.backendless.com/A73033C9-9473-4F00-8873-C91B67EEA0F4/5B9272C5-AA16-45BD-B422-F21BB7E83DFF/data/Actor",
        );

        setTeams(res.data as any);
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast.error(error?.message);
        }
      } finally {
        setGetTeamsLoading(false);
      }
    };
  }, []);

  return (
    <>
      <div className="p-12 bg-primary-50 h-max mx-auto">
        {/* bagian atas */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-col items-center text-center max-w-md">
            {/* Badge Tagline Atas */}
            <div className="flex items-center gap-1.5 bg-[#F4DACF]/60 px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#725F56]" />
              <span className="font-label font-bold text-[10px] text-[#725F56] tracking-[1px] uppercase leading-3.5">
                KOLEKTIF RASA & DEDIKASI
              </span>
            </div>

            {/* Judul Utama Section */}
            <h1 className="font-headline font-semibold text-[40px] text-primary-150 leading-12 tracking-[-1px] mb-4">
              Bertemu dengan Para Pengrajin Kopi Nusa
            </h1>

            {/* Deskripsi Tubuh Teks */}
            <p className="font-body font-normal text-[18px] text-[#50453E] leading-7 tracking-normal">
              Dedikasi roaster, barista, dan kurator rasa yang memastikan
              kualitas tertinggi dari ladang ke cangkir Anda melalui riset
              presisi dan rasa hormat terhadap tanah Nusantara.
            </p>
          </div>
        </div>
        {/* bagian grid */}
        <div className="grid grid-cols-4 gap-6">
          {getTeamsLoading ? (
            <span className="loading loading-spinner loading-xl"></span>
          ) : (
            teams?.map((item, index) => {
              return (
                <div key={index} className="p-5 rounded-lg bg-white h-max">
                  {/* foto */}
                  <div className="rounded-t-lg bg-primary-50 flex justify-center items-center w-full h-70 mb-5">
                    <FaUser className=" w-10 h-10" />
                  </div>
                  {/* keterangan */}
                  <div>
                    {/* kategori */}
                    <div className="bg-primary-150 flex justify-center items-center w-[30%] rounded-xl p-1 mb-2">
                      <h2 className="text-white text-[10px] font-label font-bold">
                        {item?.category}
                      </h2>
                    </div>
                    {/* nama */}
                    <h1 className="font-headline font-semibold text-[22px] text-[#1B1C1A] mb-2">
                      {item?.fullName}
                    </h1>
                    {/* description */}
                    <h3 className="text-[#50453E] text-[13px] font-body">
                      {item?.description}
                    </h3>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
