import { Footer } from '@/components/footer';
import { MadeForYou } from '@/components/madeFor';
import { Sidebar } from '@/components/sidebar';
import { Suggestions } from '@/components/suggestions';
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, PlayIcon, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2} from 'lucide-react'
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">

        <Sidebar></Sidebar>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft/>
              </button>
            <button className='rounded-full bg-black/50 p-1'>
              <ChevronRight/>
              </button>
          </div>
          <Suggestions></Suggestions>
          <MadeForYou></MadeForYou>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}
