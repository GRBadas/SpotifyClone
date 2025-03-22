import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar() {
    return(
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'/>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'/>
            <div className='w-3 h-3 bg-green-500 rounded-full'/>
          </div>
          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap gap-3 text-xs font-semibold 
            text-zinc-300'>
              <HomeIcon></HomeIcon>
              Home</a>
            <a href="" className='flex items-center gap gap-3 text-xs font-semibold 
            text-zinc-300'>
            <Search></Search>
              Search</a>
            <a href="" className='flex items-center gap gap-3 text-xs font-semibold 
            text-zinc-300'>
              <Library></Library>
              Your Library</a>
          </nav>
          
          <nav className='mt-6 pt-6 border-t border-zinc-900 flex flex-col gap-1'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Músicas Curtidas </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Dopping Musical </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>2000'- 2010's Hits </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Músicas que mais marcaram minha </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Introdução a minha playlist </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Nathy + Badas </a>
          </nav>
        </aside>
    )
}