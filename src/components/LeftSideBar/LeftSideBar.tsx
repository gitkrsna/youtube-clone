import React from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import YouTubeIcon from "@mui/icons-material/YouTube";
import HomeIcon from "@mui/icons-material/Home";
import SortIcon from "@mui/icons-material/Sort";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import VideocamIcon from "@mui/icons-material/Videocam";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import LeftSideBarProp from "../LeftSideBarProp/LeftSideBarProp";
import Image from 'next/image';

function LeftSideBar() {
  const icon = [
    <HomeIcon fontSize="small"/>,
    <SortIcon fontSize="small" />,
    <SubscriptionsIcon  fontSize="small"/>,
    <VideoLibraryIcon fontSize="small" />,
    <HistoryIcon fontSize="small" />,
    <VideocamIcon fontSize="small"/>,
    <WatchLaterIcon fontSize="small"/>,
    <ThumbUpIcon fontSize="small"/>,
  ];
  const text = [
    "Home",
    "Shorts",
    "subscription",
    "Library",
    "History",
    "Your videos",
    "Watch later",
    "Liked videos",
  ];
  return (
    <>
      <div className="flex">
        <div className="pl-3 ml-3">
          <DehazeIcon  fontSize="small"/>
        </div>
        <div className="ml-4">
          <Image src="/Images/Youtube-Logo.png"  alt={'youtube logo'}width={100} height={100}
          style={{
            width:"80px",
            height:"15px",
            marginTop:"5px",
            
        


          }}
          />
        </div>
      </div>
      <div>
        <LeftSideBarProp icon={icon[0]} text={text[0]} />
      </div>
      <div>
        <LeftSideBarProp icon={icon[1]} text={text[1]} />
      </div>
      <div>
        <LeftSideBarProp icon={icon[2]} text={text[2]} />
      </div>
      <div>
        <LeftSideBarProp icon={icon[3]} text={text[3]} />
      </div>
      <div>
        <LeftSideBarProp icon={icon[4]} text={text[4]} />
      </div>
      <div>
        <LeftSideBarProp icon={icon[5]} text={text[5]} />
      </div>
     
      <div>
        <LeftSideBarProp icon={icon[6]} text={text[6]} />
      </div>
      <div>
        <LeftSideBarProp icon={icon[7]} text={text[7]} />
      </div>
    </>
  );
}

export default LeftSideBar;