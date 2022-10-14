import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { GoVerified } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineCancel } from "react-icons/md";
import { BsFillPlayFill } from "react-icons/bs";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";

// import Comments from '../../components/Comments';
// import { BASE_URL } from '../../utils';
// import LikeButton from '../../components/LikeButton';
import useAuthStore from "../../store/authStore";
import { Video } from "../../types";
import axios from "axios";
import { BASE_URL } from "../../utils";

const Detail = () => {
  return <div>Detail</div>;
};

export const getServerSideProps = async ({ params: { id } }) => {
  const { data } = await axios.get(`${BASE_URL}/api/post/${id}`);

  return {
    props: {postDetails: data}
  }
};

export default Detail;
