import spinner from '../assets/spinner.gif'

export const Spinner = () => {
    return <img src={spinner} alt="loading..."
        style={{
            width: '100px',
            margin: '0 auto',
            display: 'block'
        }}
    />
}