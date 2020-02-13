import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

const useDarkMode = (key, initialValue) => {
    const [darkValue, setDarkValue] = useLocalStorage (key, initialValue);

    useEffect(() => {

        if(darkValue == true){
            document.body.classList.add('dark-mode');
        } else{
            document.body.classList.remove('dark-mode');
        }
    }, [darkValue]);

    return [darkValue, setDarkValue]
}
export default useDarkMode;