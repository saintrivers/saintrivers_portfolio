export default function CVLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        body { background-image: none !important; background-color: #fff; color: #111; }
        @media print { @page { margin: 0.45in; size: A4; } }
      `}</style>
      {children}
    </>
  )
}
