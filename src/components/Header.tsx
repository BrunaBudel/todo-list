import rocket from '../assets/rocket.svg'

export function Header() {
  return (
    <header className="bg-gray-700 w-screen h-20 flex items-center justify-center font-inter gap-[0.75rem] py-[4.6rem]">
      <img src={rocket} alt="logo" className="h-[2.25rem] w-[1.25rem]" />
      <h1 className="text-blue font-bold text-5xl">
        to<span className="text-purple-dark">do</span>
      </h1>
    </header>
  )
}
