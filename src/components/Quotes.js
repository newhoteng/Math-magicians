import React, { useState, useEffect } from 'react';

const apiBaseUrl = 'https://api.api-ninjas.com/v1/quotes?category=';
const apiKey = 'rcNcFyL381es18NmZtOhqw==XBo7l4TOWSCGXij1';
const category = 'learning';

function Quote() {
  const [quoteobj, setData] = useState({});
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
        setData(json[0]);
        setIsLoading(false);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (hasError) {
    return (
      <div className="quote-div">
        <blockquote className="quote-wrapper">
          <p className="quote">Something went wrong!</p>
        </blockquote>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="quote-div">
        <blockquote className="quote-wrapper">
          <p className="quote">Loading...</p>
        </blockquote>
      </div>
    );
  }

  return (
    <div className="quote-div">
      <blockquote className="quote-wrapper">
        <p className="quote">
          &quot;
          {quoteobj.quote}
          &quot;
        </p>
        <cite className="author">{quoteobj.author}</cite>
      </blockquote>
    </div>
  );
}

export default Quote;
