export default function CVLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`body { background-image: none !important; background-color: #fff; color: #111; }`}</style>
      {children}
    </>
  )
}
