import "./Sunglass.css"
import Watch from '../Watch/Watch';
import { add, multiply } from '../../Utilities/calculate';
// import add from '../../Utilities/calculate';

const Sunglass = () => {
    const first = 55;
    const second = 45;
    const sum = add(first + second)
    const multi = multiply(first, second);

    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;