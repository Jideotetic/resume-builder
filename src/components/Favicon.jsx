/**
 * Implementing a favicon that changes based on the user device color mode
 * Importing Helmet to store meta data in the head of index.html
 * Importing HelmetProvider to clear a console error produce by using Helmet
 * */

import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

/**
 * faviconHref variable to store the favicon path and setFaviconHref
 * to update the path if there is a change in color mode
 */
export default function Favicon() {
  const [faviconHref, setFaviconHref] = useState('/favicon/light-cv-icon.svg');

  /**
   * getFaviconPath changes the favicon path
   */
  const getFaviconPath = (isDarkMode = false) => {
    return `/favicon/${isDarkMode ? 'light-cv-icon' : 'dark-cv-icon'}.svg`;
  };

  useEffect(() => {
    /**
     * checks for the color mode on render
     */
    const themeMatcher = window.matchMedia('(prefers-color-scheme: dark)');

    /**
     * favicon path is updated based on the color mode
     */
    setFaviconHref(getFaviconPath(themeMatcher.matches));

    /**
     * favicon path is updated on change of the color mode
     */
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
