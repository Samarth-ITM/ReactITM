import HookEx from './components/One';
import Theme from './components/theme';

const App = () => {
  return (
    <>
      <div className="App flex gap-10 p-10" >
        <h1 className="text-2xl font-bold">React Hooks</h1>
        <HookEx />
        <Theme />
      </div>
    </>
  )
}

export default App
