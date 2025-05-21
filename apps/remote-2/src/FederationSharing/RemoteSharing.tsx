import { memo, useState } from 'react'
import { useCounter } from 'host/useCounter'
import { environment } from '@env/environment'
import RemoteSharingOne from 'remoteOne/RemoteSharing'

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
                display: 'flex',
                flexDirection: 'row',
                gap: '.625rem',
                padding: '.625rem',
                border: '1px solid #ff0000',
                borderRadius: '.625rem',
                background: '#ff000063',
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
                <div style={{ marginBottom: '.25rem' }}>
                    <b>Host counter:</b>
                    {counter.count}
                </div>
                <button onClick={handleIncrement}>Increment Remote Two</button>
            </div>
            <div style={{ width: '50%' }}>
                <h3 style={{ marginBottom: '.5rem', marginTop: 0 }}>Remote One inside of remote Two</h3>
                <RemoteSharingOne />
            </div>
        </div>
    )
})

export default RemoteSharing
