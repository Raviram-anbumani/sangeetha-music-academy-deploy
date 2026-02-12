import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: Page not found");
  }, []);

  return (
    <div className="notfound">
      <div className="notfound-content">
        <h1>404</h1>
        <p>Oops! Page not found</p>
        <a href="/">Return to Home</a>
      </div>
    </div>
  );
};

export default NotFound;
