import { SITE_URL } from '@/utils/constants'

interface SeoHeadProps {
  title: string
  description: string
  path?: string
  image?: string
}

/**
 * Renders per-page <title>/<meta> tags. React 19 hoists title/meta/link elements
 * rendered anywhere in the tree into <head> automatically — no react-helmet needed.
 */
export function SeoHead({ title, description, path = '/', image }: SeoHeadProps) {
  const url = `${SITE_URL}${path}`
  const ogImage = image ?? `${SITE_URL}/og-image.png`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </>
  )
}
