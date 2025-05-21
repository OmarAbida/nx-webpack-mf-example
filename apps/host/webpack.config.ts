import { composePlugins, withNx } from '@nx/webpack'
import { withReact } from '@nx/react'
import { withModuleFederation } from '@nx/react/module-federation'
import { Configuration } from 'webpack'
import moduleFederationConfig from './module-federation.config'

const config = composePlugins(
    withNx(),
    withReact(),
    withModuleFederation(moduleFederationConfig, { dts: false }),
    async (config: Configuration, { configuration }) => {
        console.clear()
        console.log('\x1b[32m%s\x1b[0m', `🔨 Bundling host using 🐬 NX for ${configuration} environment.`)

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
