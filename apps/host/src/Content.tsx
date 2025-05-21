import { memo, useState } from 'react'
import { CounterProvider, useCounter } from 'host/useCounter'
import { environment } from '@env/environment'
import RemoteSharingOne from 'remoteOne/RemoteSharing'
import RemoteSharingTwo from 'remoteTwo/RemoteSharing'
import RemoteSharingThree from 'remoteThree/RemoteSharing'

const Content: React.FC = memo(() => (
    <CounterProvider>
        <Header />

        <div>
            <h2 style={{ marginBottom: '.5rem' }}>Host button</h2>
            <HostCounter />
        </div>

        <div>
            <h2 style={{ marginBottom: '.5rem' }}>Remote One button</h2>
            <RemoteSharingOne />
        </div>

        <div>
            <h2 style={{ marginBottom: '.5rem' }}>Remote Two button</h2>

            <RemoteSharingTwo />
        </div>

        <div>
            <h2 style={{ marginBottom: '.5rem' }}>Remote Three button</h2>
            <RemoteSharingThree />
        </div>
    </CounterProvider>
))

const Header: React.FC = memo(() => {
    const date = new Date()

    return (
        <>
            <h1>Host App</h1>
            <p />
            <div>🛠️ Mode: {environment.production ? 'production' : 'development'}</div>
            Last page:&nbsp;
            {new Intl.DateTimeFormat('fr-FR', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            }).format(date)}
            <p />
        </>
    )
})

const HostCounter: React.FC = memo(() => {
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
                border: '1px solid grey',
                borderRadius: '.625rem',
            }}
        >
            <div style={{ marginBottom: '.25rem' }}>
                <b>Current counter:</b> {count}
                <br />
            </div>
            <div style={{ marginBottom: '.25rem' }}>
                <b>Host counter:</b>
                {counter.count}
            </div>
            <button onClick={handleIncrement}>Increment Host</button>
        </div>
    )
})

export default Content
