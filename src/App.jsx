import { Route, Routes } from 'react-router'
import Layout from './Layout'
import Home from './assets/Page/Home'
import LibraryCatigory from './assets/Page/LibraryCatigory'
import Login from './assets/Page/Login'
import News from './assets/Page/News'
import AboutUs from './assets/Page/AboutUs'
import ShablonManba from './assets/Page/Shablon'
import Shablon from './assets/Page/Shablon'
import LibraryCategoryDetail from './assets/Page/LibraryCatigoryDeteyl'
import CardDeteil from './assets/Page/CardDeteil'
// import '../node_modules/leaf';


function App() {
  return (
    <>
      <div>
        {/* <CursorAnim /> */}
        <Routes>
          <Route path="/" Component={Layout}>
            <Route path="/" Component={Home} />
            <Route path="/news" Component={News} />
            <Route path="/aboutus" Component={AboutUs} />
            {/* <Route path="/newsDetail/:id" Component={NewsDetail} /> */}
            <Route path="/library" Component={LibraryCatigory} />
            <Route path="/libraryDetail/:id" Component={LibraryCategoryDetail} />
            <Route path="/cardDetail/:id" Component={CardDeteil} />
            {/* <Route path="/media" Component={Media} /> */}
            <Route path="/login" Component={Login} />
            <Route path="/sources/:type/:id" Component={Shablon} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
