import SearchSymbolsInput from "@/components/SearchSymbolsInput";
import { Link } from "react-router-dom";

const MainNavbar: React.FC = () => (
  <nav className="sticky top-0 z-10 bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <span className="text-xl font-bold">Stock Charts App</span>
        </div>

        {/* Navigation */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <Link
              to="/"
              className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
          </div>
        </div>

        {/* Search Input */}
        <div className="ml-4 flex items-center md:ml-6">
          <SearchSymbolsInput
            placeholder="Search Symbols"
            className="w-64"
          />
        </div>
      </div>
    </div>
  </nav>
);

export default MainNavbar;