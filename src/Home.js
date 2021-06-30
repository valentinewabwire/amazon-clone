import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__Container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"
          alt="Amazon banner"
        />
        <div className="home__row">
          <Product
            id="14252425"
            title="“A home without daughters is like a spring without a source.” Published in 1994, The River and the Source traces the lives of three generations of women and the men who stood by them. It begins with the story of Akoko, set in her rich traditional Luo surroundings in Nyanza province of Kenya"
            price={29.99}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/81t45U3g5hL.jpg"
          />
          <Product
            id="14141524"
            title="Game boost
            Enjoy faster and smoother frame rates in select PS4 and PS VR games.            
            Upgrade PS4 games to digital PS5 games
            The PS5 console gives game publishers the ability to let players upgrade their disc and digital PS4 games to digital PS5 games"
            price={22.99}
            rating={2}
            image="https://mellowdeetechnologies.com/wp-content/uploads/2020/11/ps5-digital-edition.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="748754692"
            title="If you are the type that has a flare of techs and gadgets, getting a smartwatch is the final step you need to control your devices with a swagger like feel"
            price={40.99}
            rating={5}
            image="http://pngimg.com/uploads/watches/watches_PNG9901.png"
          />
          <Product
            id="20312541"
            title=" Shop from a wide selection of bluetooth portable speakers from top brands like JBL"
            price={16.0}
            rating={2}
            image="https://pngimg.com/uploads/football_boots/football_boots_PNG43.png"
          />
          <Product
            id="412474754"
            title="Enjoy high-quality sound, connect with one tap & listen all-day with powerful battery. Discover deals on a wide selection of HUAWEI headphones and speakers. Buy now. Free Gifts. Available Countrywide."
            price={85.0}
            rating={3}
            image="https://pngimg.com/uploads/aquarium/aquarium_PNG78.png"
          />
        </div>
        <div className="home__row">
          <Product
            id="12236635"
            title="Latest Samsung Smartphones ranging from Galaxy A32 to Galaxy A12. Best Samsung Prices in Kenya. Get upto 40% off Latest Smartphones. Galaxy A32, A12 etc. Revlon Plaza, Biashara st. Delivery Across Kenya. Pay on Delivery. "
            price={54.99}
            rating={6}
            image="https://images.samsung.com/africa_en/smartphones/galaxy-s21/buy/galaxy-s21-phantom-violet.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
