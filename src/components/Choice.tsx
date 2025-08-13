import Link from 'next/link'

export default function Choice({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link 
      href={`/story/${to}`}
      className="block p-4 my-4 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
    >
      {children}
    </Link>
  )
}