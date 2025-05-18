import { ModuleFederationPlugin } from '@module-federation/enhanced'
import remoteProject from '../testingremote/project.json'
import remoteTwoProject from '../testingremotetwo/project.json'

const config: ConstructorParameters<typeof ModuleFederationPlugin>[0] = {
    remoteType: 'script',
    remotes: {
        testingremote: `testingremote@http://localhost:${remoteProject.targets.serve.options.port}/remoteEntry.js`,
        testingremotetwo: `testingremotetwo@http://localhost:${remoteTwoProject.targets.serve.options.port}/remoteEntry.js`,
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
