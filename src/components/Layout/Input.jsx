import React from 'react';

// components
import Button from "../Layout/Button";



const Input = () => {
    return (
        <div className=''>
            <form className='px-0 md:px-[78px] flex flex-col '>
                <input className='w-[347px] md:w-[392px] h-[48px] border rounded-[10px] mt-[41px] px-[30px] ' placeholder='Adınız' type="text" />
                <input className='w-[347px] md:w-[392px] h-[48px] border rounded-[10px] mt-[16px] px-[30px]' placeholder='Soyadınız' type="text" />
                <input className='w-[347px] md:w-[392px] h-[48px] border rounded-[10px] mt-[16px] px-[30px]' placeholder='Əlaqə nömrəniz və ya mailiniz' type="text" />
                <input className='w-[347px] md:w-[392px] h-[207px] border rounded-[10px] mt-[16px] px-[30px]  ' placeholder='Sizə necə kömək edə bilərik?' type="textarea" />
                <Button />

            </form>

        </div>
    )
}

export default Input;