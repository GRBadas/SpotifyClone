import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return(
        <footer className="bg-zinc-900 border-t border-zinc-700 p-6 flex items-center justify-between">
      <div className='flex items-center gap-4'>
      <Image src="/album.jpeg" className='w-full' width={56} height={56} alt="Capa do album"/>
      <div className='flex flex-col gap-1'>
        <strong className='font-normal'> 3X4 </strong>
        <span className='text-xs'> Engenheiros do Hawaii </span>
      </div>
      </div >
      <div className='flex flex-col items-center gap-2'>
        <div className='flex items-center gap-4'>
          <Shuffle className='size={20}text-zinc-300'></Shuffle>
          <SkipBack className='size={20}text-zinc-300'></SkipBack>
            <button className='size={20}text-zinc-300 w-12 h-12 flex items-center justify-center rounded-full bg-white text-black'>
              <Play fill='bg-black'/>
            </button>
          <SkipForward className='size={20}text-zinc-300'></SkipForward>
          <Repeat className='size={20}text-zinc-300'></Repeat>
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-xs text-zinc-400'>0:31</span>
          <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-30 h-1 rounded-full'></div>
          </div>
          <span className='text-xs text-zinc-400'>2:14</span>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Mic2 size={20}></Mic2>
        <LayoutList size={20}></LayoutList>
        <Laptop2 size={20}></Laptop2>
        <div className='flex items-center gap-2'>
          <Volume size={20}></Volume>
          <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-20 h-1 rounded-full'></div>
          </div>
        </div>
        <Maximize2 size={20}></Maximize2>
      </div>
      </footer>
    )
}