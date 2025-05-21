import { withModuleFederation } from '@nx/react/module-federation'

const config: Parameters<typeof withModuleFederation>[0] = {
    name: 'remoteTwo',
    exposes: {
        './RemoteSharing': './src/FederationSharing/RemoteSharing.tsx',
    },
    remotes: ['host', 'remoteOne'],
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
