
import { HomeContainer } from "./components/HomeContainer";
import { NavBar } from "./components/NavBar";


export default function Home() {
  return (
    <>
      <div className="mainContainer">
        <NavBar />
        <HomeContainer />
      </div>
    </>
  )
}
