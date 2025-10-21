
import Logo from "../../../assets/Logo.png"

interface HeaderProps {
  openModal: (value: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ openModal }) => {
  return (
    <>
    <header className="border-b border-[#0000008C]">
        <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Logo" className="w-auto h-8" />
            </div>
            <nav className="items-center hidden gap-8 font-medium md:flex">
              <a href="#" className="hover:text-gray-700">Problem</a>
              <a href="#" className="hover:text-gray-700">Infrastructure</a>
              <a href="#" className="hover:text-gray-700">Case Study</a>
              <a href="#" className="hover:text-gray-700">White-Label</a>
              <button className="px-4 py-1 text-white transition-all duration-300 rounded-md bg-primary hover:bg-green-800 hover:scale-105 hover:shadow-lg active:scale-95" onClick={()=>openModal(true)}> 
                Request Demo
              </button>
            </nav>
          </div>
        </div>
      </header>
      </>
  )
}
