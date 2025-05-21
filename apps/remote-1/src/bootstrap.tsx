import { createRoot } from 'react-dom/client'
import Content from './Content'

const root = createRoot(document.querySelector('#react-body')!)
root.render(<Content />)
