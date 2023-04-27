import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

const apiBaseUrl = 'https://api.api-ninjas.com/v1/quotes?category=';
const apiKey = 'rcNcFyL381es18NmZtOhqw==XBo7l4TOWSCGXij1';
const category = 'learning';

function Quote() {
  const [quoteobj, setData] = useState({});
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${apiBaseUrl}${category}`, {
          method: 'GET',
          headers: { 'X-Api-Key': `${apiKey}` },
          contentType: 'application/json',
        });
        const json = await res.json();
        // console.log(json[0]);
        setData(json[0]);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  // setData, setIsLoading

  if (hasError) {
    return (
      <div className="quote-wrapper">
        <p className="quote">Something went wrong!</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="quote-wrapper">
        <p className="quote">Loading...</p>
      </div>
    );
  }

  return (
    <div className="quote-wrapper">
      <p className="quote">{quoteobj.quote}</p>
      <p className="author">{quoteobj.author}</p>
    </div>
  );
}

export default Quote;
