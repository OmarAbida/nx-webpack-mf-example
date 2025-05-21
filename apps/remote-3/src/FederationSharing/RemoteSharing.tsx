import { memo, useState } from 'react'
import { environment } from '@env/environment'

const RemoteSharing: React.FC = memo(() => {
    const [count, setCount] = useState(0)

    function handleIncrement() {
        setCount(pevState => ++pevState)
    }

    return (
        <div
            style={{
                padding: '.625rem',
                border: '1px solid #2196f3',
                borderRadius: '.625rem',
                background: '#2196f380',
                justifyContent: 'space-between',
            }}
        >
            <div>
                <div style={{ marginBottom: '.25rem' }}>
                    <b>Current counter:</b> {count}
                </div>
                <div style={{ marginBottom: '.25rem' }}>
                    <b>Mode:</b> {environment.production ? 'production' : 'development'}
                </div>
                <button onClick={handleIncrement}>Increment Remote Three</button>
            </div>
        </div>
    )
})

export default RemoteSharing
