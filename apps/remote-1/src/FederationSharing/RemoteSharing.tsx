import { memo, useState } from 'react'
import { useCounter } from 'host/useCounter'
import { environment } from '@env/environment'

const RemoteSharing: React.FC = memo(() => {
    const [count, setCount] = useState(0)
    const counter = useCounter()

    function handleIncrement() {
        setCount(pevState => ++pevState)
        counter.setCount(++counter.count)
    }

    return (
        <div
            style={{
                padding: '.625rem',
                border: '1px solid #89ff00',
                borderRadius: '.625rem',
                background: '#89ff0061',
            }}
        >
            <div style={{ marginBottom: '.25rem' }}>
                <b>Current counter:</b> {count}
            </div>
            <div style={{ marginBottom: '.25rem' }}>
                <b>Mode:</b> {environment.production ? 'production' : 'development'}
            </div>
            <div style={{ marginBottom: '.25rem' }}>
                <b>Host counter:</b>
                {counter.count}
            </div>
            <button onClick={handleIncrement}>Increment Remote One</button>
        </div>
    )
})

export default RemoteSharing
