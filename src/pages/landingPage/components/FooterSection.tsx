
import Logo from "../../../assets/Logo2.png";

export const FooterSection = () => {
  return (
    <>
      <footer className="bg-secondary">
        <div className="px-4 pb-16 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-row justify-between items-center py-7 border-b border-[#D9D9D996] ">
            <img src={Logo} alt="" className="ml-6" />
            <p className="text-[#D9D9D996] font-medium">
              © 2025 PayInfra. All rights reserved. The infrastructure behind
              modern corporate fuel ecosystems.
            </p>
          </div>
          <p className="text-[#D9D9D996] text-center font-medium mt-2">© 2025 PayInfra. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};
