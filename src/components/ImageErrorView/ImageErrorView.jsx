import errorImage from '../../images/images.jpg';
import { Div } from './ImageErrorView.styled';

export default function ImageErrorView({ message }) {
    return (
        <Div role="alert">
            <img src={errorImage} width="300" alt="sadmonkey" />
           <p> {message}</p>
        </Div>
    );
}