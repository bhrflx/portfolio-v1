import { useState, useEffect } from 'react'
import { usePopper } from 'react-popper'
import { Popover, Transition } from '@headlessui/react'
import { FaCat } from 'react-icons/fa'
import { CatFacts } from './CatFacts'

const Fab = () => {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [catFact, setCatFact] = useState('');

    useEffect(() => {
        setCatFact(CatFacts[Math.floor(Math.random() * CatFacts.length)]);
    }, [popperElement])

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: 'left',
        strategy: 'fixed',
        modifiers: [
            { name: 'offset', options: { offset: [0, 15] }},
            { name: 'preventOverflow', options: { padding: 8 }},
        ],
        });
    return (
        /*<div className="fixed z-50 right-5 bottom-5 h-16 w-16 flex justify-center items-center bg-gray-800 rounded-full shadow-lg cursor-pointer transition-all transform hover:scale-105">
            <FaCat size={25} style={{color: '#c7c7c7', marginBottom: '0.2rem', marginRight: '0.1rem'}}/>
        </div>*/
        <div className="fixed z-50 w-[50vw] right-5 bottom-5 flex flex-row justify-end items-center">
            <Popover className="relative">
                <Popover.Button ref={setReferenceElement} className="z-20 h-16 w-16 inline-flex justify-center items-center bg-gray-800 rounded-full shadow-lg cursor-pointer transition-all transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <FaCat size={25} style={{color: '#c7c7c7', marginBottom: '0.2rem', marginRight: '0.1rem'}}/>
                </Popover.Button>
    
                <Transition
                    enter="transition-opacity duration-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Popover.Panel         
                        ref={setPopperElement}
                        style={styles.popper}
                        {...attributes.popper}
                        className="w-screen max-w-sm px-3 py-2 bg-gray-100 ring-1 rounded-lg ring-black ring-opacity-5 shadow-lg">
                        <p className="text-gray-800">{catFact}</p>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    )
}

export default Fab
