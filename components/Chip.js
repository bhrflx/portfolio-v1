import { useState } from "react";
import { MdDone } from "react-icons/md";

const Chip = ({ title, onSelect }) => {
    const [active, setActive] = useState(false);
    return (
        <div role='button' className={`w-min px-3 py-1 mb-2 mr-2 ${active ? 'bg-gray-800 hover:bg-gray-900' : 'hover:bg-gray-400'} border border-gray-800 rounded-full whitespace-nowrap flex flex-row justify-center items-center transition-all`} 
            onClick={() => {
                setActive(prevActive => !prevActive);
                onSelect();
                }}>
            {active && <span>
                <MdDone size={20} style={{color: '#D4D4D4', paddingRight: '0.5rem'}}/>
            </span>}
            <span className={`text-sm ${active ? 'text-gray-300' : 'text-gray-800'}`}>{title}</span>
        </div>
    )
}

export default Chip
