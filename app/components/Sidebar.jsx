"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import {
  ArrowRight,
  FileAudio,
  Heart,
  Home,
  Music4,
  Plus,
  Search,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import React from "react";

const Sidebar = () => {
  const items = [
    {
      label: "Home",
      link: "/",
      icon: <Home size={21} />,
    },
    {
      label: "Search",
      link: "/",
      icon: <Search size={21} />,
    },
    {
      label: "Favourite",
      link: "/",
      icon: <Heart size={21} />,
    },
    {
      label: "Playlist",
      link: "/",
      icon: <FileAudio size={21} />,
    },
  ];

  const badges = ["Playlist", "Artist", "Favourite", "Latest", "Top"];

  const artists = [
    {
      name: "Alan Walker",
      title: "Artist",
      image: "https://i.scdn.co/image/ab67706f000000027876fe166a29b8e6b8db14da",
    },
    {
      name: "Arijit Singh",
      title: "Artist",
      image: "https://i.scdn.co/image/ab67616d00001e02124dfaf81f71328e4361550e",
    },
    {
      name: "Atif Aslam",
      title: "Artist Pakistan",
      image: "https://i.scdn.co/image/ab6761610000e5ebc40600e02356cc86f0debe84",
    },
    {
      name: "Alan Walker",
      title: "Artist",
      image: "https://i.scdn.co/image/ab67706f000000027876fe166a29b8e6b8db14da",
    },
    {
      name: "Arijit Singh",
      title: "Artist",
      image: "https://i.scdn.co/image/ab67616d00001e02124dfaf81f71328e4361550e",
    },
    {
      name: "Atif Aslam",
      title: "Artist Pakistan",
      image: "https://i.scdn.co/image/ab6761610000e5ebc40600e02356cc86f0debe84",
    },
    {
      name: "Alan Walker",
      title: "Artist",
      image: "https://i.scdn.co/image/ab67706f000000027876fe166a29b8e6b8db14da",
    },
    {
      name: "Arijit Singh",
      title: "Artist",
      image: "https://i.scdn.co/image/ab67616d00001e02124dfaf81f71328e4361550e",
    },
    {
      name: "Atif Aslam",
      title: "Artist Pakistan",
      image: "https://i.scdn.co/image/ab6761610000e5ebc40600e02356cc86f0debe84",
    },
  ];

  return (
    <div className="w-full flex md:w-[28%] flex-col h-full p-2 space-y-2">
      <div className="parent p-5 bg-[#121212] rounded-lg border">
        <div className="w-full space-y-5">
          {items.map((item, index) => (
            <div
              key={index}
              className={clsx(
                "flex gap-4 items-center hover:opacity-100 transition-all duration-200 cursor-pointer",
                index == 0 ? "opacity-100" : "opacity-50"
              )}
            >
              {item.icon}
              <h6 className="text-sm">{item.label}</h6>
            </div>
          ))}
        </div>
      </div>
      <div className="parent px-5 py-2 pt-0 bg-[#121212] rounded-lg border flex-1 overflow-scroll no-scrollbar">
        <div className="sticky top-0 bg-[#121212] z-40 pt-2">
          <div className="flex justify-between items-center">
            <div className="left flex items-center gap-2">
              <Music4 />
              <h2 className="text-md font-bold">Your Library</h2>
            </div>
            <div className="right flex">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    variant="outline"
                    size="icon"
                    className="rounded-full border-none p-2 bg-transparent hover:bg-zinc-900 transition-all duration-200"
                  >
                    <Plus />
                  </div>
                </TooltipTrigger>
                <TooltipContent>Create a playlist</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-none p-2 bg-transparent hover:bg-zinc-900 transition-all duration-200"
                  >
                    <ArrowRight />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Show More</TooltipContent>
              </Tooltip>
            </div>
          </div>
          <div className="flex overflow-x-scroll gap-1 my-2 no-scrollbar">
            {badges.map((item, index) => (
              <Badge variant="secondary" className={"px-4 py-2"} key={index}>
                {item}
              </Badge>
            ))}
          </div>
        </div>
        <div className="artists space-y-2">
          {artists.map((item, index) => (
            <div className="flex hover:bg-zinc-800 rounded-lg transition-all duration-200 items-center gap-3 p-1">
              <img
                src={item.image}
                alt=""
                className="w-[60px] h-[60px] rounded-full object-cover"
              />
              <div className="right">
                <h1>{item.name}</h1>
                <p className="text-[13px] opacity-50">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
