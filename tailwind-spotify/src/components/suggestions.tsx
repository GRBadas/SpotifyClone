import { Play } from "lucide-react";
import Image from "next/image";

export function Suggestions(){
    return(
        <div>
        <h1 className='font-semibold text-3xl mt-10'> Good Afternoon </h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href="H" className='bg-white/5 group hover:bg-white/10 transition-colors rounded flex items-center overflow-hidden'>
              <Image src="/album.jpeg" width={104} height={104} alt="Capa do album"/>
              <strong>Engenheiros do Hawaii</strong>
              <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-400 text-black ml-auto mr-8  invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
             </a>
            <a href="H" className='bg-white/5 group hover:bg-white/10 transition-colors rounded flex items-center overflow-hidden'>
              <Image src="/album.jpeg" width={104} height={104} alt="Capa do album"/>
              <strong>Engenheiros do Hawaii</strong>
              <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-400 text-black ml-auto mr-8  invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
             </a>
            <a href="H" className='bg-white/5 group hover:bg-white/10 transition-colors rounded flex items-center overflow-hidden'>
              <Image src="/album.jpeg" width={104} height={104} alt="Capa do album"/>
              <strong>Engenheiros do Hawaii</strong>
              <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-400 text-black ml-auto mr-8  invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
             </a>
            <a href="H" className='bg-white/5 group hover:bg-white/10 transition-colors rounded flex items-center overflow-hidden'>
              <Image src="/album.jpeg" width={104} height={104} alt="Capa do album"/>
              <strong>Engenheiros do Hawaii</strong>
              <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-400 text-black ml-auto mr-8  invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
             </a>
            <a href="H" className='bg-white/5 group hover:bg-white/10 transition-colors rounded flex items-center overflow-hidden'>
              <Image src="/album.jpeg" width={104} height={104} alt="Capa do album"/>
              <strong>Engenheiros do Hawaii</strong>
              <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-400 text-black ml-auto mr-8  invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
             </a>
            <a href="H" className='bg-white/5 group hover:bg-white/10 transition-colors rounded flex items-center overflow-hidden'>
              <Image src="/album.jpeg" width={104} height={104} alt="Capa do album"/>
              <strong>Engenheiros do Hawaii</strong>
              <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-400 text-black ml-auto mr-8  invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>
             </a>
          </div>
          </div>
    )
}