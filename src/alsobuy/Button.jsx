


function Button({ listContent, bodyContent, listContentColor }) {  
  return (
    <div>
      <button className="inline-block bg-white  cursor-pointer font-medium text-[14px] text-[#253858] py-[7px] px-[12px] mr-[12px] mb-[16px] rounded-[8px] shadow-lg transition-all duration-200 ease-in">
        <div className="flex text-[10px] font-normal font-roboto pb-[3px]" style={{ color: listContentColor }}>
          <p 
            className="w-[4px] h-[4px] mr-[6px] mt-[7px] rounded-full" 
            style={{ backgroundColor: listContentColor }} 
          ></p>
          {listContent}
        </div>
        <div>{bodyContent}</div>
      </button>
    </div>
  );
}

export default Button;