import { forwardRef } from 'react'
import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router-dom'

export type LinkBehaviorProps = Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }

/**
 * Adapts react-router's <Link> (which takes `to`) to the `href`-based API that MUI's
 * Button/Link/IconButton expect for their `component`/`LinkComponent` slots — this sidesteps
 * MUI's polymorphic `component` generic-inference friction entirely: use `href="/x"` everywhere.
 */
export const LinkBehavior = forwardRef<HTMLAnchorElement, LinkBehaviorProps>(function LinkBehavior(
  { href, ...other },
  ref,
) {
  return <RouterLink ref={ref} to={href} {...other} />
})
