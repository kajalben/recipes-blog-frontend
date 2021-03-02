import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Category from "./components/Category";
import RecipeDetail from "./components/RecipeDetail";
import Loader from "./components/Loader";
import useContentful from "./hook/use-contentful";
import { Route, Switch } from "react-router-dom";
import Recipes from './components/Recipes';

function App() {
  const { isLoading, breakfast, salad, appetizer, errors } = useContentful();

  const displayloader = () => {
    if (errors) {
      return <span className="error-message">{errors.map((error) => `Try Again ! ${error.message}`).join(",")}</span>;
    }
    if (isLoading) {
      return <div><Loader /></div>
    }
  };

  return (
    <div className="App">
      <Header />
      <Main>
        {displayloader()}
        {breakfast && salad && appetizer && (
          <Switch>
            <Route exact path="/">
              <Category
                breakfast={breakfast}
                salad={salad}
                appetizer={appetizer}
              />
            </Route>
            <Route  exact path="/:category">
              <Recipes
                breakfast={breakfast}
                salad={salad}
                appetizer={appetizer}
              />
            </Route>
            <Route path="/:category/:id">
              <RecipeDetail
                breakfast={breakfast}
                salad={salad}
                appetizer={appetizer}
              />
            </Route>
          </Switch>
        )}
      </Main>

      <Footer />
    </div>
  );
}

export default App;
