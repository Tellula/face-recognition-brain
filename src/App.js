import React, { Component } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import "./App.css";

window.process = {
  env: {
      NODE_ENV: 'development'
  }
}

const Clarifai =  require('clarifai')

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: ""
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({input: event.target.value})
  };

  onButtonSubmit = () => {
    let app = new Clarifai.App({
      apiKey: process.env.REACT_APP_CLARIFAI_KEY,
    });
    this.setState({imageUrl: this.state.input})
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input
      )
      .then((response) => {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  particlesLoaded = (container) => {
    console.log(container);
  };

  render() {
    return (
      <div className="App">
        <Particles
          className="particles"
          id="tsparticles"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          options={{
            background: {},
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 75,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "polygon",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
