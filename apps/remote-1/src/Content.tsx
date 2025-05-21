import { memo } from 'react'
import { CounterProvider } from 'host/useCounter'
import RemoteSharing from './FederationSharing/RemoteSharing'

const Content: React.FC = memo(() => {
    const date = new Date()

    return (
        <div>
            <CounterProvider>
                <h1>Remote App One</h1>
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
                <RemoteSharing />
            </CounterProvider>
        </div>
    )
})

export default Content
