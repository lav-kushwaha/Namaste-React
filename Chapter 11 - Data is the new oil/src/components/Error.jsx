import {useRouteError} from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    console.log(err)
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-icon" role="img" aria-label="Error">
          &#9888;
        </div>
        <h2>Oops! Something went wrong.</h2>
        <p>{err.status}:Page {err.statusText}</p>
        <p>{err.data}</p>
      </div>
    </div>
  );
};

export default Error;
