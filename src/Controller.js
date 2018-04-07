/* globals window document */
(function exportController() {
  function Controller(ship) {
    this.ship = ship;
    this.initialiseSea();

    document.querySelector('#sailbutton').addEventListener('click', () => {
      this.setSail();
    });
  }

  Controller.prototype = {
    initialiseSea() {
      const backgrounds = [
        './images/water0.png',
        './images/water1.png',
      ];

      let backgroundIndex = 0;

      setInterval(() => {
        const viewport = document.querySelector('#viewport');
        viewport.style.backgroundImage = `url('${backgrounds[backgroundIndex]}')`;

        backgroundIndex += 1;
        if (backgroundIndex === backgrounds.length) {
          backgroundIndex = 0;
        }
      }, 1000);
    },
    renderPorts(ports) {
      const portsElement = document.querySelector('#ports');
      portsElement.style.width = '0px';
      ports.forEach((port, index) => {
        const newPortElement = document.createElement('div');
        newPortElement.className = 'port';
        newPortElement.dataset.portIndex = index;

        portsElement.appendChild(newPortElement);
        const portsElementWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElementWidth + 256}px`;
      });
    },
    renderShip() {
      const ship = this.ship;

      const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);

      const shipElement = document.querySelector('#ship');
      shipElement.style.top = `${portElement.offsetTop + 32}px`;
      shipElement.style.left = `${portElement.offsetLeft - 32}px`;

      this.renderCurrentPortDisplay(`Current Port: ${ship.currentPort.name}`);
    },
    setSail() {
      const ship = this.ship;

      const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const nextPortIndex = currentPortIndex + 1;
      const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);
      if (!nextPortElement) {
        return this.renderMessage('End of the line!');
      }

      this.renderMessage(`Now departing ${ship.currentPort.name}`);
      this.renderNextPortDisplay(`Next Port: ${ship.itinerary.ports[nextPortIndex].name}`);

      const shipElement = document.querySelector('#ship');
      const sailInterval = setInterval(() => {
        const shipLeft = parseInt(shipElement.style.left, 10);
        if (shipLeft === (nextPortElement.offsetLeft - 32)) {
          ship.dock();
          clearInterval(sailInterval);
          this.renderMessage(`Now docking ${ship.currentPort.name}`);
          this.renderCurrentPortDisplay(`Current Port: ${ship.currentPort.name}`);
        }
        shipElement.style.left = `${shipLeft + 1}px`;
      }, 20);
      this.renderNextPortDisplay(`Next Port: ${ship.itinerary.ports[nextPortIndex].name}`);
    },
    renderMessage(message) {
      const messageElement = document.createElement('div');
      messageElement.id = 'message';
      messageElement.innerHTML = message;

      const viewport = document.querySelector('#viewport');
      viewport.appendChild(messageElement);

      setTimeout(() => {
        viewport.removeChild(messageElement);
      }, 2000);
    },
    renderCurrentPortDisplay(currentPortMsg) {
      const currentPortElement = document.querySelector('#current-port');

      // currentPortElement.id = 'current-port';
      currentPortElement.innerHTML = currentPortMsg;

      const headup = document.querySelector('#headup');
      headup.appendChild(currentPortElement);
    },
    renderNextPortDisplay(nextPortMsg) {
      const nextPortElement = document.querySelector('#next-port');
      nextPortElement.innerHTML = '';

      // nextPortElement.id = 'next-port';
      nextPortElement.innerHTML = nextPortMsg;

      /* const headup = document.querySelector('#headup');
      headup.appendChild(nextPortElement); */
    },
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
}());
