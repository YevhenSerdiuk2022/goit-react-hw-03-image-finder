import { RotatingLines } from 'react-loader-spinner';
import { Div } from './Loader.styled';

export const Loader = () => {
    return (
        <Div>
            <RotatingLines
            strokeColor="#3f51b5"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
/>
        </Div>
    )
}