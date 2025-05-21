# About

This repository demonstrates a micro-frontend architecture built with the following technologies:

-   PNPM (Package Manager)
-   NX (Build System)
-   Webpack Module Federation
-   React

## The repository

The repository consists of four micro-frontend applications that interact with each other through module federation:

1.  **host**:  
    **Role:** Both a host and remote application

    -   **Exposes:**
        -   `CounterProvider` component
        -   `useCounter` hook
    -   **Consumes:**  
        Counter components from all remote applications

2.  **remoteOne**:  
     **Role:** Both a host and remote application

    -   **Exposes:**
        -   Counter component (consumed by `host`)
    -   **Consumes:**
        -   `CounterProvider` component from `host`
        -   `useCounter` hook from `host`

3.  **remoteTwo**:  
     **Role:** Both a host and remote application

    -   **Exposes:**
        -   Counter component (consumed by `host`)
    -   **Consumes:**
        -   `CounterProvider` component from `host`
        -   `useCounter` hook from `host`

4.  **remoteThree**:
    **Role:** Remote application only

    -   **Exposes:**
        -   Counter component (consumed by `host`)
    -   **Consumes:**
        -   None

## Serving the applications

### Expected Behavior

When serving a host application, the development environment should provide the following features:

We expect to:  
| Requirement | Description |
| -------- | ------- |
| ✅ Host Application | The host application successfully runs and is accessible via browser |
| ✅ Remote Applications | All required remote applications automatically start and are available to the host |
| ✅ Hot Reloading | Changes to source code are detected and trigger automatic rebuilds |
| ✅ TypeScript Error Reporting | Real-time TypeScript errors appear in the CLI during development |
| ✅ Error Tolerance | The application continues to run despite TypeScript errors for uninterrupted development |

These requirements ensure a smooth development experience when working with micro-frontend applications in this monorepo architecture.

### Serve

To serve any application in development mode:

```sh
npx --filter=<applicationName> serve
```

For example:

```sh
npx --filter=host serve
npx --filter=remoteOne serve
```

This command performs the following sequence:

1. Builds all remote dependencies required by the application
2. Builds the application itself
3. Serves the application using **webpack-dev-server**
4. Serves the remotes using a **static file server**
