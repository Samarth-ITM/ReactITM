import RandomUser from './components/EffectHook';

const App = () => {
  return (
    <>
      <div className="App flex gap-10 p-10" >
        <h1 className="text-2xl font-bold">React Hooks</h1>
        <RandomUser />
      </div>
    </>
  )
}

export default App
