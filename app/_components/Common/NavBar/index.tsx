import Logo from "@app/_components/Common/Logo";
import MainModules from "./MainModules";
import NavDrawer from "./NavDrawer";
import Others from "./Others";

export default async function NavBar() {
  return (
    <header className="bg-gray-100 py-6">
      <nav className="container flex !flex-row items-center justify-between overflow-hidden py-1.5">
        <Logo />

        <div className="max-md:hidden">
          <MainModules />
        </div>

        <div className="max-md:hidden">
          <Others />
        </div>

        <div className="flex items-center md:hidden">
          <NavDrawer />
        </div>
      </nav>
    </header>
  );
}
