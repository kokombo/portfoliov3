import NavigationBar from "./NavigationBar";
import Hero from "./Hero";

const Header = () => {
  return (
    <header className="bg-[url('/assets/images/herobackground.png')] bg-no-repeat bg-center bg-cover">
      <NavigationBar />

      <Hero />
    </header>
  );
};

export default Header;
