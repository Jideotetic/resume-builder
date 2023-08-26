/**
 * Implementing a favicon that changes based on the user device color mode
 * Importing Helmet to store meta data in the head of index.html
 * Importing HelmetProvider to clear a console error produce by using Helmet
 * */

import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Favicon() {
  const [faviconHref, setFaviconHref] = useState('/favicon/light-cv-icon.svg');

  const getFaviconPath = (isDarkMode = false) => {
    return `/favicon/${isDarkMode ? 'light-cv-icon' : 'dark-cv-icon'}.svg`;
  };

  useEffect(() => {
    const themeMatcher = window.matchMedia('(prefers-color-scheme: dark)');

    setFaviconHref(getFaviconPath(themeMatcher.matches));

    themeMatcher.addEventListener('change', () => {
      setFaviconHref(getFaviconPath(themeMatcher.matches));
    });
  }, [faviconHref]);

  return (
    <HelmetProvider>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href={faviconHref} />
      </Helmet>
    </HelmetProvider>
  );
}
