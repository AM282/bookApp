import React from 'react';
import Dashboard from './Components/dashboard/Dashboard';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect,} from 'react-router-dom';
import SearchResult from './Components/searchResult/SearchResult';
import LandingPage from './Components/landingPage/LandingPage';
import Login from './Components/login/Login'
import Navbar from './Components/navbar/Navbar'
import Footer from './Components/footer/Footer'
import AuthorProfile from './Components/authorProfile/AuthorProfile'
import BlogPost from './Components/blogPost/BlogPost';
import BlogList from './Components/blogList/BlogList';
import UserProfile from './Components/userProfile/UserProfile';
 
function App()
{
    return (
    <div className = 'main-content' >
    
      <Router>
        <Switch>
          <Route path="/" exact >
            <>
              <Navbar />
              <LandingPage />
              <Footer />
            </>
          </Route>
  
          <Route path="/login" exact component={ () => localStorage.getItem("token") ? <Redirect to="/login" /> : <Login />
          } />

          <Route path="/blogpost/:id" exact >
            <Navbar />
            <BlogPost />
            <Footer />
          </Route>

          <Route path="/blog" exact >
            <Navbar />
            <BlogList />
            <Footer />
          </Route>


          <Route path="/dashboard" exact component={() =>  localStorage.getItem("token") ?
          <> 
            <Navbar />
            <Dashboard />
            <Footer />
          </> : <Redirect to="/login" />
          } />

          
          <Route path="/search/:searchTerm" exact  component={() => localStorage.getItem("token") ? 
          <> 
            <Navbar />
            <SearchResult /> 
            
          </> 
          : <Redirect to="/login" />
          } />

          <Route path="/author/:id" exact  component={() => localStorage.getItem("token") ? 
          <> 
            <Navbar />
            <AuthorProfile /> 
            <Footer />
          </> 
          : <Redirect to="/login" />
          } />
          <Route path="/user/:name" exact  component={() => localStorage.getItem("token") ? 
          <> 
            <Navbar />
            <UserProfile /> 
            <Footer />
          </> 
          : <Redirect to="/login" />
          } />

        </Switch>
      </Router>
    </div>
    )
   
  
}
export default App;
