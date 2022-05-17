import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import SidebarItems from './sidebar-items';

const Sidebar = () => {
  const router = useRouter();
  const [dropdown, setDropdown] = useState(false);
  const showMenu = () => setDropdown(!dropdown);
  const dashBoardItems = [
    {
      title: 'Home',
      icon: 'fa-solid fa-house',
      link: '/admin',
    },
    {
      title: 'User',
      icon: 'fa-solid fa-user',
      dropdown: [
        { title: 'Add User', link: '/admin/users/create-user' },
        { title: 'All Users', link: '/admin/users/get-users' },
      ],
    },
    {
      title: 'Blogs',
      icon: 'fa-solid fa-comment',
      dropdown: [
        { title: 'Add new blog', link: '/admin/blogs/create-blog' },
        { title: 'All blog', link: '/admin/blogs/get-blog' },
      ],
    },
    {
      title: 'Symptoms',
      icon: 'fa-solid fa-comment',
      dropdown: [
        { title: 'Add new Symptom', link: '/admin/symptoms/create-symptom' },
        { title: 'All blog', link: '/admin/symptoms/get-symptoms' },
      ],
    },
  ];

  return (
    <div className="w-1/4 h-screen flex flex-col justify-between bg-bg-admin-sidebar">
      <div className="flex justify-between bg-bg-admin-sidebar-top py-2 px-4">
        <Link href="/admin">
          <h1 className="cursor-pointer text-sidebar-title text-2xl font-bold">
            Sadhna
          </h1>
        </Link>
        <button className="flex justify-center items-center bg-bg-sidebar-button py-1 px-2 text-sm font-medium rounded-lg">
          Varun <i className="fa-solid fa-caret-down ml-1"></i>
        </button>
      </div>
      <div className="p-3 mt-8 h-full">
        <ul className="cursor-pointer">
          {dashBoardItems.map((item, index) => {
            return <SidebarItems key={index} item={item} />;
          })}
        </ul>
      </div>
      <div className="bg-bg-admin-sidebar-top">
        <button className="bg-transparent px-3 py-1 border-2 border-gray-600 my-2 mx-5 hover:bg-gray-600">
          Logout
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
