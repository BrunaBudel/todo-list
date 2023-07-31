import rocket from '../assets/rocket.svg'

export function Header() {
  return (
    <header className="bg-gray-700 w-screen h-20 flex items-center justify-center font-inter gap-[12px] py-[75px]">
      <img src={rocket} alt="logo" className="h-[36px] w-[20px]" />
      <h1 className="text-blue font-bold text-5xl">
        to<span className="text-purple-dark">do</span>
      </h1>
    </header>
  )
}
