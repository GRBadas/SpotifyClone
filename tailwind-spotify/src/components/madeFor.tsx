import Image from "next/image"

export function MadeForYou() {
    return(
        <div>
            <h2 className='font-semibold text-2xl mt-10'> Made for Badas </h2>
            
            <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href="#" className='bg-white/5 flex flex-col gap-2 p-2 rounded-md hover:bg-white/10'>
                <Image src="/album.jpeg" className='w-full' width={104} height={104} alt="Capa do album"/>
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-300'>Humberto Guessinguer</span>
            </a>
            <a href="#" className='bg-white/5 flex flex-col gap-2 p-2 rounded-md hover:bg-white/10'>
                <Image src="/album.jpeg" className='w-full' width={104} height={104} alt="Capa do album"/>
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-300'>Humberto Guessinguer</span>
            </a>
            <a href="#" className='bg-white/5 flex flex-col gap-2 p-2 rounded-md hover:bg-white/10'>
                <Image src="/album.jpeg" className='w-full' width={104} height={104} alt="Capa do album"/>
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-300'>Humberto Guessinguer</span>
            </a>
            <a href="#" className='bg-white/5 flex flex-col gap-2 p-2 rounded-md hover:bg-white/10'>
                <Image src="/album.jpeg" className='w-full' width={104} height={104} alt="Capa do album"/>
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-300'>Humberto Guessinguer</span>
            </a>
            <a href="#" className='bg-white/5 flex flex-col gap-2 p-2 rounded-md hover:bg-white/10'>
                <Image src="/album.jpeg" className='w-full' width={104} height={104} alt="Capa do album"/>
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-300'>Humberto Guessinguer</span>
            </a>
            </div>
        </div>
    )
}