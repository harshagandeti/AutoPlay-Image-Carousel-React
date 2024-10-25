import "./App.css";
import Header from "./components/Header";
import ImageCarousel from "./components/ImageCarousel";

function App() {
  const data = [
    " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8AAxAr9ZNr9JCwn2QZ35rSWWuiayhh0ayQ&s",
    " https://img.freepik.com/premium-photo/pink-chameleon-with-green-background_542670-9681.jpg",
    " https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUb4vfga1cGpYWIlcSUbzZDUEP3Zcc-kRhWghLjoPIXX3N_6jS3QhNhog22usxYjmKVDI&usqp=CAU",
    " https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    " https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ8ltbYIEFZd_6rm80iUkGI-2_w1YglZpLWv935dACG4_5o63WIzhfevNrJ4yLIyfdvrg&usqp=CAU",
  ];
  return (
    <div className="App">
      <Header />
      <ImageCarousel data={data} />
    </div>
  );
}

export default App;
