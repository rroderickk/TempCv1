import { Link } from "react-router-dom"

/**
 * It returns a @link element with the @href and @children -> props <- set to the values passed in.
 */
export const UseLink =({ anchor, children })=>
  <Link to={anchor}>{children}</Link>


/**
 * It returns a React component that renders the @children passed to it, and adds an @anchor to the top
 * of the page.
 */
export const UseAnchor =({ anchor, c, children, })=>
  <a href={anchor} target="_blank" className={c}>{children}</a>


/**
 * @Deprecated -> Dont show hovering references, It opens a new tab in the browser.
 * @link The url to open.
 */
export const openTab =link=> window.open(link);