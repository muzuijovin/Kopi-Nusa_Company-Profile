"use client";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export function CreateBlogSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<any>();

  const handleMakeArticle = async (data: any) => {
    try {
      await axios.post(
        "https://api.backendless.com/A73033C9-9473-4F00-8873-C91B67EEA0F4/5B9272C5-AA16-45BD-B422-F21BB7E83DFF/data/blog",
        data,
      );

      toast.success("upload article success");
      reset();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error?.message);
      }
    }
  };

  return (
    <>
      <div className="px-10 md:px-20 lg:px-48 py-12 bg-primary-50 h-max mx-auto">
        {/* bagian atas */}
        <a href="/blog-list">
          <div className="flex gap-1 hover:underline">
            <img src="/createblog-panah-kiri.svg" alt="panah" />
            <p className="font-label font-medium text-[13px] text-primary-10">
              Kembali ke Blog
            </p>
          </div>
        </a>

        <div className="mt-5 mb-5">
          <h1 className="font-headline font-bold text-[40px] text-primary-150 mb-5">
            Tulis Cerita Kopi Baru
          </h1>
          <h3 className="font-body text-[15px] text-[#50453E]">
            Bagikan catatan sangrai, cerita kebun, resep seduhan, atau
            pengalaman kopi Anda kepada komunitas.
          </h3>
        </div>

        {/* container form */}
        <form
          onSubmit={handleSubmit(handleMakeArticle)}
          className="bg-white rounded-lg p-10"
        >
          {/* judul */}
          <div className="mb-5">
            <h1 className="font-label font-bold text-xs text-primary-150 mb-1">
              JUDUL ARTIKEL
            </h1>
            <div className="h-max bg-primary-100 rounded-lg p-4 w-[60%]">
              <textarea
                className="w-full resize-none overflow-y-auto"
                placeholder="tuliskan judul mu.."
                {...register("judul")}
              />
            </div>
          </div>
          {/* kategori dan tagar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-5">
            {/* kategori */}
            <div>
              <h1 className="font-label font-bold text-xs text-primary-150 mb-1">
                KATEGORI
              </h1>
              <div className="h-max bg-primary-100 rounded-lg p-4">
                <textarea
                  className="w-full resize-none overflow-y-auto"
                  placeholder="tuliskan kategori mu.."
                  {...register("category")}
                />
              </div>
            </div>
            {/* tagar */}
            <div>
              <h1 className="font-label font-bold text-xs text-primary-150 mb-1">
                TAGAR
              </h1>
              <div className="h-max bg-primary-100 rounded-lg p-4">
                <textarea
                  className="w-full resize-none overflow-y-auto"
                  placeholder="tuliskan tagar mu, menggunakan #"
                  {...register("tagar")}
                />
              </div>
            </div>
          </div>
          {/* img masukkan */}
          <div className="mb-5">
            <h1 className="font-label font-bold text-xs text-primary-150 mb-1">
              Upload Foto
            </h1>
            <div className="h-max bg-primary-100 rounded-lg p-4 w-full">
              <textarea
                className="w-full resize-none overflow-y-auto"
                placeholder="apload konten mu, dalam bentuk URL ya"
                {...register("image_url")}
              />
            </div>
          </div>
          {/* isi cerita */}
          <div className="mb-5">
            <h1 className="font-label font-bold text-xs text-primary-150 mb-1">
              ISI CERITA
            </h1>
            <div className="h-max bg-primary-100 rounded-lg p-4 w-full">
              <textarea
                className="w-full resize-none overflow-y-auto"
                placeholder="tuliskan ceritamu mu.."
                {...register("isiCerita")}
              />
            </div>
          </div>
          {/* ringkasan */}
          <div className="mb-5">
            <h1 className="font-label font-bold text-xs text-primary-150 mb-1">
              RINGKASAN
            </h1>
            <div className="h-max bg-primary-100 rounded-lg p-4 w-full">
              <textarea
                className="w-full resize-none overflow-y-auto"
                placeholder="tulis ringkasan disini"
                {...register("ringkasan")}
              />
            </div>
          </div>
          {/* terbitkan artikel */}
          <div className="flex justify-end items-center mt-5 border-t py-5">
            <button
              disabled={isSubmitting}
              className="flex gap-2 p-2 rounded-lg bg-primary-150 hover:shadow-md hover:opacity-95"
            >
              <img src="/createblog-panah-submit.svg" alt="panah submit" />
              <h2 className="font-label font-medium text-xs text-white">
                TERBITKAN ARTIKEL
              </h2>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
