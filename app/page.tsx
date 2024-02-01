import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='w-screen h-screen relative' >
      <div className='flex justify-center items-center w-full h-full bg-cover bg-center'>
        <div className='pb-40 md:pb-56 flex flex-col gap-5 z-[10] max-w-[750px]'>
          <h1 className='flex items-center justify-center flex-col text-[30px] text-white font-semibold md:text-[50px]'>
            <span className='text-center'> Portfolio</span>
            <span className='text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
              Natallia Shilova
            </span>
          </h1>
          <p className='text-grey-200 hidden md:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, suscipit.</p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My projects
            </Link>

          </div>
        </div>
      </div>

      <div className="absolute flex bottom-28 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>

      </div>
    </main>
  )
}
