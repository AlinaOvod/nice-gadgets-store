import { createRoot } from 'react-dom/client';
import { AppWithContext } from './AppWithContext';

const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(<AppWithContext />);
