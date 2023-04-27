import React, { useState, useEffect } from 'react';

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
      <blockquote className="quote-wrapper">
        <p className="quote">Something went wrong!</p>
      </blockquote>
    );
  }

  if (isLoading) {
    return (
      <blockquote className="quote-wrapper">
        <p className="quote">Loading...</p>
      </blockquote>
    );
  }

  return (
    <blockquote className="quote-wrapper">
      <p>{quoteobj.quote}</p>
      <cite className="author">{quoteobj.author}</cite>
    </blockquote>
  );
}

export default Quote;
