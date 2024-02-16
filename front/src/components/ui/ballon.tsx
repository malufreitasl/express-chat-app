import React, { FC } from 'react';

interface BalloonProps {
  chatInfo: { content: string }[];
}

const Balloon: FC<BalloonProps> = ({ chatInfo }) => {
  return (
    <>
      {chatInfo.map((e) => (
        <div className="p-2 bg-zinc-950 rounded-xl flex ml-5 flex-col gap-2">
          <p className="text-white text-balance text-sm ">{e["content"]}</p>
          <p className="text-white text-end text-xs opacity-80 font-semibold">22:00</p>
        </div>
      ))}
    </>
  );
}

 export {Balloon};