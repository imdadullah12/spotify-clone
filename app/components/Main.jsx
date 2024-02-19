import React from "react";

const Main = () => {
  const musics = [
    {
      title: "Spotify Playlists",
      items: [
        {
          image:
            "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
          title: "Lofi Beats",
          description: "Sung by ABS",
          url: "",
        },
        {
          image:
            "https://i.scdn.co/image/ab67706f00000002cef8ac8b3a702dfba2ae85a9",
          title: "Seri ala gaan",
          description: "Sung by Abbasi",
          url: "",
        },
        {
          image:
            "https://i.scdn.co/image/ab67706f00000002dec17246891b5b4eb97bdb0d",
          title: "Oo tunir ma",
          description: "Sung by Maksed and Sadek",
          url: "",
        },
        {
          image:
            "https://i.scdn.co/image/ab67706f00000002d771dc645afe9b87978b1d3e",
          title: "Machar Khedau",
          description: "Sung by Ashad and Mustafizur",
          url: "",
        },
        {
          image:
            "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
          title: "Lofi Beats",
          description: "Sung by ABS",
          url: "",
        },
        {
          image:
            "https://i.scdn.co/image/ab67706f00000002cef8ac8b3a702dfba2ae85a9",
          title: "Seri ala gaan",
          description: "Sung by Abbasi",
          url: "",
        },
        {
          image:
            "https://i.scdn.co/image/ab67706f00000002dec17246891b5b4eb97bdb0d",
          title: "Oo tunir ma",
          description: "Sung by Maksed and Sadek",
          url: "",
        },
        {
          image:
            "https://i.scdn.co/image/ab67706f00000002d771dc645afe9b87978b1d3e",
          title: "Machar Khedau",
          description: "Sung by Ashad and Mustafizur",
          url: "",
        },
      ],
    },
    {
      title: "Made for Pen Programmer",
      items: [
        {
          image:
            "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
          title: "Lofi Beats",
          description: "Sung by ABS",
          url: "",
        },
        {
          image:
            "https://i.scdn.co/image/ab67706f00000002cef8ac8b3a702dfba2ae85a9",
          title: "Seri ala gaan",
          description: "Sung by Abbasi",
          url: "",
        },
        {
          image:
            "https://i.scdn.co/image/ab67706f00000002dec17246891b5b4eb97bdb0d",
          title: "Oo tunir ma",
          description: "Sung by Maksed and Sadek",
          url: "",
        },
        {
          image:
            "https://i.scdn.co/image/ab67706f00000002d771dc645afe9b87978b1d3e",
          title: "Machar Khedau",
          description: "Sung by Ashad and Mustafizur",
          url: "",
        },
        {
          image:
            "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
          title: "Lofi Beats",
          description: "Sung by ABS",
          url: "",
        },
        {
          image:
            "https://i.scdn.co/image/ab67706f00000002cef8ac8b3a702dfba2ae85a9",
          title: "Seri ala gaan",
          description: "Sung by Abbasi",
          url: "",
        },
        {
          image:
            "https://i.scdn.co/image/ab67706f00000002dec17246891b5b4eb97bdb0d",
          title: "Oo tunir ma",
          description: "Sung by Maksed and Sadek",
          url: "",
        },
        {
          image:
            "https://i.scdn.co/image/ab67706f00000002d771dc645afe9b87978b1d3e",
          title: "Machar Khedau",
          description: "Sung by Ashad and Mustafizur",
          url: "",
        },
      ],
    },
    {
      title: "Songs of the day",
      items: [
        {
          image:
            "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
          title: "Lofi Beats",
          description: "Sung by ABS",
          url: "",
        },
        {
          image:
            "https://i.scdn.co/image/ab67706f00000002cef8ac8b3a702dfba2ae85a9",
          title: "Seri ala gaan",
          description: "Sung by Abbasi",
          url: "",
        },
        {
          image:
            "https://i.scdn.co/image/ab67706f00000002dec17246891b5b4eb97bdb0d",
          title: "Oo tunir ma",
          description: "Sung by Maksed and Sadek",
          url: "",
        },
        {
          image:
            "https://i.scdn.co/image/ab67706f00000002d771dc645afe9b87978b1d3e",
          title: "Machar Khedau",
          description: "Sung by Ashad and Mustafizur",
          url: "",
        },
        {
          image:
            "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
          title: "Lofi Beats",
          description: "Sung by ABS",
          url: "",
        },
        {
          image:
            "https://i.scdn.co/image/ab67706f00000002cef8ac8b3a702dfba2ae85a9",
          title: "Seri ala gaan",
          description: "Sung by Abbasi",
          url: "",
        },
        {
          image:
            "https://i.scdn.co/image/ab67706f00000002dec17246891b5b4eb97bdb0d",
          title: "Oo tunir ma",
          description: "Sung by Maksed and Sadek",
          url: "",
        },
        {
          image:
            "https://i.scdn.co/image/ab67706f00000002d771dc645afe9b87978b1d3e",
          title: "Machar Khedau",
          description: "Sung by Ashad and Mustafizur",
          url: "",
        },
      ],
    },
  ];
  return (
    <div className="flex-1 h-full md:overflow-y-scroll p-2 space-y-2">
      <div className="parent space-y-5 p-5 bg-[#121212] rounded-lg border">
        {musics.map((item, index) => (
          <div className="box" key={index}>
            <h1 className="text-2xl font-bold mb-3 hover:underline cursor-pointer">
              {item.title}
            </h1>
            <div className="grid grid-cols-2 items-start gap-5 md:grid-cols-4 lg:grid-cols-5">
              {item.items.map((song, songIndex) => (
                <div className="p-4 bg-[#1c1c1c] rounded-lg" key={songIndex}>
                  <img
                    src={song.image}
                    className="w-full h-auto rounded-lg object-cover"
                    alt=""
                  />
                  <h1 className="font-bold mt-4 mb-1">{song.title}</h1>
                  <p className="text-[13px] opacity-50 truncate ">
                    {song.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
