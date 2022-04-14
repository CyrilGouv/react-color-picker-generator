import { useEffect, useState } from 'react'
import './Colors.css'


const Colors = ({ colors }) => {
    const [show, setShow] = useState(false)

    const hex = `#${colors.hex}`
    const colorsDark = colors.type === 'shade' ? 'colors--dark' : ''

    useEffect(() => {
        const showTimeout = setTimeout(() => {
            setShow(false)
        }, 2500)

        return () => clearTimeout(showTimeout)
    }, [show])

    const handleClick = () => {
        navigator.clipboard.writeText(hex)

        setShow(true)
    }

    return (
        <div onClick={ handleClick } className={`colors ${colorsDark}`} style={{ backgroundColor: `${hex}` }}>
            <p>{ colors.weight }%</p>
            <p>{ hex }</p>
            <span className={ `${show ? 'show' : ''}` }>COPIED!</span>
        </div>
    )
}

export default Colors