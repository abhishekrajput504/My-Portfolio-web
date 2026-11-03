import { forwardRef } from 'react'
import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router-dom'

export type LinkBehaviorProps = Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }

/** External URLs (http:, mailto:, …) and static files like /resume/x.pdf must bypass the SPA router. */
function isNativeHref(href: RouterLinkProps['to']): href is string {
  return typeof href === 'string' && (/^[a-z][a-z\d+.-]*:/i.test(href) || /\.[a-z\d]+$/i.test(href.split(/[?#]/)[0]))
}

/**
 * Adapts react-router's <Link> (which takes `to`) to the `href`-based API that MUI's
 * Button/Link/IconButton expect for their `component`/`LinkComponent` slots — this sidesteps
 * MUI's polymorphic `component` generic-inference friction entirely: use `href="/x"` everywhere.
 * Downloads, external URLs, and static files render as a plain <a> so the browser handles them.
 */
export const LinkBehavior = forwardRef<HTMLAnchorElement, LinkBehaviorProps>(function LinkBehavior(
  { href, ...other },
  ref,
) {
  if (isNativeHref(href)) {
    return <a ref={ref} href={href} {...other} />
  }
  return <RouterLink ref={ref} to={href} {...other} />
})
