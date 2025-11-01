import { useEffect, useRef } from 'react'
import type { BotProps } from 'osmi-ai-embed'

type Props = BotProps & {
  style?: React.CSSProperties
  className?: string
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'osmi-ai-fullchatbot': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { class?: string }
    }
  }
}

type FullPageChatElement = HTMLElement & Props

export const FullPageChat = ({ style, className, ...assignableProps }: Props) => {
  const ref = useRef<FullPageChatElement | null>(null)

  useEffect(() => {
    ;(async () => {
      await import('osmi-ai-embed/dist/web.js')
    })()
  }, [])

  useEffect(() => {
    if (!ref.current) return
    Object.assign(ref.current, assignableProps)
  }, [assignableProps])

  return <osmi-ai-fullchatbot ref={ref} style={style} class={className} />
}
