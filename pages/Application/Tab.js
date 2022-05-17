import React, { useState } from "react";

const Tab = () => {
  const [data, setData] = useState();

  const tabs = [
    {
      title: "TAB1",
      data: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      title: "TAB2",
      data: "Lorem Ipsum has been the , when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      title: "TAB3",
      data: "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
  ];

  return (
    <div>
      <div className="w-full h-14">
        <div className="flex w-full h-12 justify-center items-center space-x-16  ">
          <h6 className="text-cyan-600 font-bold">FITNESS</h6>
          <div className="space-x-12 ">
            {tabs.map((x) => {
              return (
                <button key={x.title} onClick={() => setData(x.data)}>
                  {x.title}
                </button>
              );
            })} 
          </div>
        </div>
      </div>

      <div>
        <img className="w-full h-full" src="/images/ssss.jpg" alt="" />
      </div>
      <div className="h-52">{data}123</div>
    </div>
  );
};
  
export default Tab;
