import { withModuleFederation } from '@nx/react/module-federation'

const config: Parameters<typeof withModuleFederation>[0] = {
    name: 'host',
    exposes: {
        './useCounter': './src/FederationSharing/useCounter.tsx',
    },
    remotes: ['remoteOne', 'remoteTwo', 'remoteThree', 'host'],
    additionalShared: [
        {
            libraryName: 'react',
            sharedConfig: {
                singleton: true,
                eager: true,
            },
        },
        {
            libraryName: 'react-dom',
            sharedConfig: {
                singleton: true,
                eager: true,
            },
        },
    ],
}

export default config
