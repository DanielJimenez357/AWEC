
import styles from './Component1.module.css'

export default function Component1 () {
    return (
        <>
            <div className='div' style={styles}>
                <input type='text' placeholder="username"/>
                <ul>
                    <li>
                        1 lowecase character
                    </li>
                    <li>
                        1 uppercase character
                    </li>
                    <li>
                        6 minimun characters
                    </li> 
                </ul>
                <input type="submit" value={"Submit"}/>
            </div>
        </>
    )
}