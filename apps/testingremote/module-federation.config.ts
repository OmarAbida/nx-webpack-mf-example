import { withModuleFederation } from '@nx/react/module-federation'

const config: Parameters<typeof withModuleFederation>[0] = {
    name: 'testingremote',
    exposes: {
        './RemoteSharing': './src/FederationSharing/RemoteSharing.tsx',
    },
    remotes: ['testinghost'],
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
