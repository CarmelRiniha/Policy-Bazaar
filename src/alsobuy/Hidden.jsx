
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';
function Hidden() {
    return (
        <div className='flex justify-center item-center sm:hidden'>
            <div className="w-full  h-20 p-[18px] gap-4 flex item-center justify-center bg-[#f2f7ff]">
                <button className="inline-block  flex justify-center w-full h-10 bg-[#fff] cursor-pointer font-medium text-[14px] text-sm py-[7px] px-[12px] rounded-[8px]">
                    <p className='p-[2px] text-[#0065ff]'><FontAwesomeIcon className="pr-2" icon={faRotate} />Renew a Policy </p></button>
                <button className="inline-block flex justify-center w-full h-10 bg-[#fff]  cursor-pointer font-medium text-[14px] text-sm py-[7px] px-[12px]   rounded-[8px]">
                    <p className=' p-[2px] text-[#0065ff]'><FontAwesomeIcon className="pr-2" icon={faShieldHalved} />File a Claim</p></button>
            </div>
        </div>
    )
}
export default Hidden;