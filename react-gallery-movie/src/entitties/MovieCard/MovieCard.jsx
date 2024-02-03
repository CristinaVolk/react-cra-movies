import './MovieCard.css'
import { ReactComponent as HeartIcon } from '../../shared/assets/icons/favourite.svg';

export function MovieCard(props) {
    const {movie, onIconHandler} = props;
    const {id, imageUrl, movieName, isFavourite} = movie;
    const heartIconClassName = isFavourite ? "filled" : "outlined";

    function onIconClick() {
        onIconHandler(id);
    }

    return (
        <li>
            <img src={imageUrl} />
            <h4>{movieName}</h4>
            <HeartIcon className={heartIconClassName} onClick={onIconClick} />
        </li>
    )
}
