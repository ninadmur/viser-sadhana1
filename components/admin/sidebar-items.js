import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SidebarItems = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();
  return (
    <div className="px-8">
      <div className="w-full flex justify-center items-center h-8 my-4">
        <div className="w-[10%]">
          <i className={item.icon}></i>
        </div>
        <div className="flex justify-start py-1 pl-4 flex-1">
          <span>{item.title}</span>
        </div>
        <div className="w-[10%]">
          {item.dropdown && (
            <i
              onClick={() => setDropdown(!dropdown)}
              className="fa-solid fa-caret-down ml-1"
            ></i>
          )}
        </div>
      </div>
      <div className="pl-6">
        {dropdown &&
          item.dropdown &&
          item.dropdown.map((i, index) => {
            return (
              <li key={index}>
                <Link href={i.link}>
                  <p
                    className={`${
                      router.pathname == i.link ? 'bg-[#E5F4F8]' : ''
                    } py-2 px-2 rounded-full`}
                  >
                    {i.title}
                  </p>
                </Link>
              </li>
            );
          })}
      </div>
    </div>
  );
};
export default SidebarItems;
