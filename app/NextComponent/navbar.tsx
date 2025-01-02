import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  interface navElement {
    name: string;
    path: string;
  }

  const navList: navElement[] = [
    { name: "Home", path: "/Home" },
    { name: "About", path: "/About" },
    { name: "Product", path: "/apiFetch" },
    { name: "Account", path: "/MyAccount" },
  ];

  return (
    <header className="text-gray-600 body-font bg-gray-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="text-2xl">
          <span className="text-4xl font-bold text-black">M</span>
          <span>arket</span>
        </div>
        
        <ul className="flex space-x-4">
          {navList.map((item: navElement, index: number) => (
            <li key={index} className="text-gray-700 hover:text-black">
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>

        {/* Search Box */}
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-neutral-100 rounded-[4px] p-1 pl-4 outline-none"
          />
          <FaSearch className="absolute text-gray-500 right-2 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
    </header>
  );
}
