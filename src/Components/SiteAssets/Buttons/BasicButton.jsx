import {colors} from '@mui/material';
export default function BasicButton(props) {
  return (
    <button
      onClick={props.handleClick}
      className={`
                border-2 
                border-[#e7107e] 
                ${props.filled ? 'bg-[#e90e7f] text-white' : 'bg-transparent text-[#e90e7f]'}
                hover:bg-[#e90e7f] 
                hover:text-white 
                font-semibold
                transition-colors 
                min-w-40
                duration-300
                rounded-3xl
                lg:py-2
                lg:px-10
                lg:text-xl
                md:py-4
                md:px-16
                md:text-xl
            `}
    >
      {props.ButtonText}
    </button>
  );
}
