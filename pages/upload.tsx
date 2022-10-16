import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from "axios";
import { SanityAssetDocument } from "@sanity/client";

import useAuthStore from "../store/authStore";
import { client } from "../utils/client";
import { topics } from "../utils/constants";
import { BASE_URL } from "../utils";

const Upload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [videoAsset, setVideoAsset] = useState<
    SanityAssetDocument | undefined
  >();
  const [wrongFileType, setWrongFileType] = useState(false);
  const [caption, setCaption] = useState("");
  const [category, setCategeory] = useState(topics[0].name);
  const [savingPost, setSavingPost] = useState(false);

  const { userProfile }: { userProfile: any } = useAuthStore();
  const router = useRouter();

  const uploadVideo = async (e: any) => {
    const selectedFile = e.target.files[0];
    const fileTyoes = ["video/mp4", "video/webm", "video/ogg"];

    // Upload video file to Sanity
    if (fileTyoes.includes(selectedFile.type)) {
      client.assets
        .upload("file", selectedFile, {
          contentType: selectedFile.type,
          filename: selectedFile.name,
        })
        .then((data) => {
          setVideoAsset(data);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      setWrongFileType(true);
    }
  };

  const handlePost = async () => {
    if (caption && videoAsset?._id && category) {
      setSavingPost(true);

      // document to be sent to Sanity CMS backend
      const document = {
        _type: "post",
        caption,
        video: {
          _type: "file",
          asset: {
            _type: "reference",
            _ref: videoAsset?._id,
          },
        },
        userId: userProfile?._id,
        postedBy: {
          _type: "postedBy",
          _ref: userProfile?._id,
        },
        topic: category,
      };

      await axios.post(`${BASE_URL}/api/post`, document);
      router.push("/");
    }
  };

  return (
    <div className="flex w-full h-[125vh] absolute left-0 top-[5rem] mb-10 py-10 lg:py-20 bg-[#F8F8F8] dark:bg-darkSecondary justify-center">
      <div className="bg-white dark:bg-darkPrimary rounded-lg xl:h=50 w-[60%] flex gap-12 flex-wrap justify-center items-center">
        <div>
          <div>
            <p className="text-2xl dark:text-white font-bold">Upload Video</p>
            <p className="text-md text-gray-400 dark:text-gray-200 mt-1">
              Post a Video to your account
            </p>
          </div>
          <div className=" duration-150 border-dashed rounded-xl border-4 border-gray-300 dark:text-white flex flex-col justify-center items-center outline-none mt-10 w-[260px] h-[460px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100 dark:hover:bg-darkSecondary dark:hover:border-red-600">
            {isLoading ? (
              <p>Uploading...</p>
            ) : (
              <div>
                {videoAsset ? (
                  <div>
                    <video
                      src={videoAsset.url}
                      loop
                      controls
                      className="rounded-xl h-[450px] mt-16 bg-black"
                    ></video>
                  </div>
                ) : (
                  <label className="cursor-pointer">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="flex flex-col items-center justify-center">
                        <p className="font-bold text-xl">
                          <FaCloudUploadAlt className="text-grey-300 text-6xl" />
                        </p>
                        <p className="text-xl font-semibold">Upload Video</p>
                      </div>
                      <p className="text-gray-400 dark:text-gray-200 text-center mt-10 text-sm leading-10">
                        MP4 or WebM or ogg <br />
                        720x1280 or higher <br />
                        Up to 10 minutes <br />
                        Less than 2GB
                      </p>
                      <p className="bg-headings text-center mt-10 rounded text-white text-md font-medium p-2 w-52 outline-none duration-150 dark:hover:bg-blue-800">
                        Select File
                      </p>
                    </div>
                    <input
                      type="file"
                      name="upload-video"
                      className="w-0 h-0"
                      onChange={(e) => uploadVideo(e)}
                    ></input>
                  </label>
                )}
              </div>
            )}
            {wrongFileType && (
              <p className="text-center text-xl text-red-400 text-semibold mt-4 w-[250px] ">
                Please select a video file
              </p>
            )}
          </div>
        </div>
        <form className="flex flex-col gap-3 pb-10 dark:text-white">
          <label className="text-md font-medium">Caption</label>
          <input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="rounded outline-none text-md border-2 border-gray-300 p-2"
          />
          <label className="text-md font-medium">Choose a Category</label>
          <select
            className="outline-none border-2 border-gray-300 text-md capitalize lg:p-4 p-2 rounded cursor-pointer"
            onChange={(e) => setCategeory(e.target.value)}
          >
            {topics.map((topic) => (
              <option
                key={topic.name}
                className="outline-none capitalize bg-white text-gray-700 text-md p-2 duration-150 hover:bg-slate-300"
                value={topic.name}
              >
                {topic.name}
              </option>
            ))}
          </select>
          <div className="flex gap-6 mt-10">
            <button
              onClick={() => {}}
              type="button"
              className="border-gray-300 border-2 text-md font-mediunm p-2 rounded w-28 lg:w-44 outline-none duration-150 hover:bg-white hover:text-primary"
            >
              Discard
            </button>
            <button
              onClick={handlePost}
              type="button"
              className="bg-headings text-white border-2 text-md font-mediunm p-2 rounded w-28 lg:w-44 duration-150 outline-none dark:border-none hover:bg-blue-800"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;
