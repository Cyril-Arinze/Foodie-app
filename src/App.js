import PageSummary from './Components/Header/PageSummary';
import SideBar from './Components/Sidebar/SideBar';
import classes from "./App.css"
import MealsSection from './Components/Meals/MealsSection';
function App() {
  return (
    <>
      <SideBar />
      <main className={classes.main}>
        <PageSummary />
        <MealsSection />
      </main>
    </>
  );
}

export default App;
