particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,  /* कितने Particles होंगे */
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff" /* Particle का Color */
    },
    "shape": {
      "type": "circle",  /* Shape Type: circle, edge, triangle, polygon */
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" /* Effect on hover: grab, bubble, repulse */
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});
