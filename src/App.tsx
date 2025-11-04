import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-0">
        <div className="flex h-screen items-center justify-center bg-gradient-to-r from-primary to-highlight">
          <h1 className="text-4xl font-bold text-white underline">
            Journey Travel – Header Pronto! ✅
          </h1>
        </div>
      </main>
    </>
  );
}

export default App;