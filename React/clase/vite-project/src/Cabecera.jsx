
import styles from './components/Cabecera.module.css'


export default function ({children}) {
    return (
        <h1 style={styles}>{children}</h1>
    )
}