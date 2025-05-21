import { createContext, useContext, useState } from 'react'

interface ICounterContext {
    count: number
    setCount: (nbr: number) => void
}

const CounterContext = createContext<ICounterContext | null>(null)

export function CounterProvider({ children }: { children: React.ReactNode }) {
    const [count, setCount] = useState<number>(1000)

    return <CounterContext value={{ count, setCount }}>{children}</CounterContext>
}

export function useCounter() {
    const context = useContext(CounterContext)

    if (!context) throw 'CounterProvider is missing in the tree'

    return {
        count: context.count,
        setCount: context.setCount,
    }
}
