import Cursor from "./components/Cursor"
import Home from "./components/Home"
import Splash from "./components/Splash"


const App = () => {
  return (
    <div>
      <Home />
      <Cursor />
      <Splash
        DENSITY_DISSIPATION={5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.25}
        CURL={30}
        SPLAT_RADIUS={0.25}
        SPLAT_FORCE={1000}
        COLOR_UPDATE_SPEED={1}
        SHADING
        RAINBOW_MODE={false}
        COLOR="black"
      />
    </div>

  )
}

export default App
