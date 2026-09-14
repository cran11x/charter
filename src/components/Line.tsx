type Props = {
  nl: string
  en: string
  as?: 'span' | 'p' | 'div' | 'h1' | 'h2'
  className?: string
}

/** Dutch first, English under it — the house never speaks English only. */
export default function Line({ nl, en, as: Tag = 'span', className }: Props) {
  return (
    <Tag className={className ? `line ${className}` : 'line'}>
      <span className="nl">{nl}</span>
      <span className="en">{en}</span>
    </Tag>
  )
}
