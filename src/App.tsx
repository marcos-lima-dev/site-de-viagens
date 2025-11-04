import Header from '@/components/Header'
import { Button } from '@/components/ui' // ← LIMPO!

function App() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-0">
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gradient-to-br from-primary to-highlight p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Header com Import Limpo!
          </h1>
          <Button size="lg" variant="secondary">
            Testar Scroll
          </Button>
        </div>
      </main>
    </>
  )
}

export default App