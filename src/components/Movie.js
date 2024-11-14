import propTypes from "prop-types";

export default function Movie({ coverImg, title, summary, genres }) {
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                <li>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </li>
            </ul>
        </div>
    );
}

Movie.propTypes = {
    coverImg: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
}