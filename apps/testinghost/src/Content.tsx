import { memo, useState } from 'react'
import { CounterProvider, useCounter } from 'testinghost/useCounter'
import RemoteSharingOne from 'testingremote/RemoteSharing'
import RemoteSharingTwo from 'testingremotetwo/RemoteSharing'

const Content: React.FC = memo(() => (
    <CounterProvider>
        <Header />

        <div>
            <h2>Host button</h2>
            <HostCounter />
        </div>

        <div>
            <h2>Remote One button</h2>
            <RemoteSharingOne />
        </div>

        <div>
            <h2>Remote Two button</h2>
            <RemoteSharingTwo />
        </div>
    </CounterProvider>
))

const Header: React.FC = memo(() => {
    const date = new Date()

    return (
        <>
            <h1>Host App</h1>
            <p />
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
