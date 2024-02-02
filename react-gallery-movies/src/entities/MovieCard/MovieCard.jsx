import './MovieCard.css'
import {ReactComponent as HeartIcon} from '../../shared/assets/icons/favourite.svg'
import {baseUrl} from '../../shared/consts/base';
import {useNavigate} from "react-router-dom";

export function MovieCard(props) {
    const {movie, onIconClick} = props;
    const {id, movieName, imageUrl, releaseYear, isFavourite} = movie;
    const heartIconClassName = isFavourite ? 'filled' : 'outlined';
    const navigate = useNavigate();

    const handleIconClick = () => {
        onIconClick(id);
    }

    const goToMoviePage = () => {
        navigate(`/${id}`);
    }

    return (
        <li>
            <img
                src={`${baseUrl}${imageUrl}`}
                alt={movieName}
                onClick={goToMoviePage}
            />
            <h4>{movieName}</h4>
            <strong>{releaseYear}</strong>
            <HeartIcon className={heartIconClassName} onClick={handleIconClick}/>
        </li>
    )
}
