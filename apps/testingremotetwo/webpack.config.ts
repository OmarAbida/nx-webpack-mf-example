import { composePlugins, withNx } from '@nx/webpack'
import { withReact } from '@nx/react'
import { withModuleFederation } from '@nx/react/module-federation'
import { Configuration } from 'webpack'
const path = require('path')
import moduleFederationConfig from './module-federation.config'

const dev = process.env.NODE_ENV!.trim() === 'development'

console.clear()
console.log(
    '\x1b[32m%s\x1b[0m',
    `🔨 Bundling testingremotetwo using 🐬 NX for ${dev ? 'development' : 'production'} environment.`,
)

const config = composePlugins(
    withNx(),
    withReact(),
    withModuleFederation(moduleFederationConfig, {
        dts: {
            consumeTypes: {
                typesFolder: path.resolve(__dirname, '@mf-types'), // Directory to create and store remotes declarations in.
                remoteTypesFolder: '@mf-types',
                abortOnError: false,
                maxRetries: 3,
            },
            generateTypes: {
                typesFolder: '@mf-types',
                deleteTypesFolder: true,
                abortOnError: false,
                generateAPITypes: true,
                tsConfigPath: path.resolve(__dirname, 'tsconfig.build.json'),
            },
            tsConfigPath: path.resolve(__dirname, 'tsconfig.build.json'),
        },
    }),
    async (config: Configuration) => {
        config.output!.clean = false
        config.watchOptions = {
            ignored: /node_modules/,
        }

        config.optimization = {
            ...config.optimization,
            runtimeChunk: false,
        }

        return config
    },
)

module.exports = config
