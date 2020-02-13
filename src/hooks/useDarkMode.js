import {localStorage} from '../hooks/useLocalStorage';

export default function useDarkMode() {
    const [darkMode, setDarkMode] = localStorage ('darkmode');
}