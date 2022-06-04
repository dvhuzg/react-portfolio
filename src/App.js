import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyles"
import { LightTheme,DarkTheme } from "./components/Themes"
import {Switch} from 'react-router-dom'
import { Route } from "react-router-dom"

// Components
import Main from './components/Main'
import AboutPage from './components/AboutPage'
import BlogPage from './components/BlogPage'
import WorkPage from './components/WorkPage'
import MySkillsPage from './components/MySkillsPage'

function App() {
  return <div>
    <GlobalStyle/>

    <ThemeProvider theme={LightTheme}>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path='/about' component={AboutPage}/>
          <Route exact path='/blog' component={BlogPage}/>
          <Route exact path='/work' component={WorkPage}/>
          <Route exact path='/skills' component={MySkillsPage}/>

        </Switch>
    </ThemeProvider>
   
    </div>
    
}

export default App

