import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoVerified } from "react-icons/go";

import useAuthStore from "../store/authStore";
import NoResults from "./NoResults";
import { IUser } from "../types";

interface IComment {
  comment: string;
  length?: number;
  _key: string;
  postedBy: { _ref?: string; _id?: string };
}

interface IProps {
  isPostingComment: Boolean;
  comment: string;
  setComment: Dispatch<SetStateAction<string>>;
  addComment: (e: React.FormEvent) => void;
  comments: IComment[];
}

const Comments = ({
  comment,
  setComment,
  addComment,
  comments,
  isPostingComment,
}: IProps) => {
  const { userProfile, allUsers } = useAuthStore();

  return (
    <div className="border-t-2 border-gray-300 dark:border-none pt-4 px-1 md:px-10 mt-4 bg-[#F8F8F8] dark:bg-darkSecondary border-b-2 lg:pb-0 pb-[100px] rounded-md">
      <div className="overflow-scroll lg:h-[40vh] dark:text-white">
        {comments?.length ? (
          comments.map((item, idx) => (
            <>
              {allUsers.map(
                (user: IUser) =>
                  user._id === (item.postedBy._id || item.postedBy._ref) && (
                    <div className="p-2 items-center" key={idx}>
                      <Link href={`/profile/${user._id}`}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8">
                            <Image
                              src={user.image}
                              width={34}
                              height={34}
                              className="rounded-full"
                              alt="user profile"
                              layout="responsive"
                            />
                          </div>
                          <div className="hidden xl:block">
                            <p className="flex gap-1 items-center text-md font-bold text-primary dark:text-gray-100 lowercase">
                              {user.userName.replaceAll(" ", "")}
                              <GoVerified className="text-blue-400" />
                            </p>
                            <p className="capitalized text-gray-400 dark:text-gray-200 text-xs">
                              {user.userName}
                            </p>
                          </div>
                        </div>
                      </Link>
                      {/* The Comment Message */}
                      <div>
                        <p className="dark:text-gray-100">{item.comment}</p>
                      </div>
                    </div>
                  )
              )}
            </>
          ))
        ) : (
          <NoResults text="No comments yet!" />
        )}
      </div>
      {userProfile && (
        <div className="pb-6 px-2 md:px-10 ">
          <form onSubmit={addComment} className="flex gap-4">
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="bg-primary px-3 md:px-6 py-4 text-sm md:text-md font-medium border-2 w-full md:w-[700px] lg:w-[350px] border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 flex-1 rounded-lg"
              placeholder="Add comment.."
            />
            <button className="text-xs md:text-md text-gray-400 " onClick={addComment}>
              {isPostingComment ? "Commenting..." : "Comment"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Comments;
