// AppRouter.js
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AboutPage from './Pages/AboutPage/AboutPage'
import HomePage from './Pages/HomePage/HomePage'
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage.jsx'
import ServicesPage from './Pages/ServicesPage/ServicesPage'

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/services" component={ServicesPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default AppRouter;
