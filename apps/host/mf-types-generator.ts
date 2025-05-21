import { ModuleFederationPlugin } from '@module-federation/enhanced'
import remoteProject from '../remote-1/project.json'
import remoteTwoProject from '../remote-2/project.json'
import remoteThreeProject from '../remote-3/project.json'

const config: ConstructorParameters<typeof ModuleFederationPlugin>[0] = {
    remoteType: 'script',
    remotes: {
        remoteOne: `remoteOne@http://localhost:${remoteProject.targets.serve.options.port}/remoteEntry.js`,
        remoteTwo: `remoteTwo@http://localhost:${remoteTwoProject.targets.serve.options.port}/remoteEntry.js`,
        remoteThree: `remoteTwo@http://localhost:${remoteThreeProject.targets.serve.options.port}/remoteEntry.js`,
    },
    dts: {
        consumeTypes: {
            typesFolder: '@mf-types',
            remoteTypesFolder: '@mf-types',
            abortOnError: false,
            maxRetries: 3,
        },
        tsConfigPath: 'tsconfig.build.json',
    },
}

export default config
