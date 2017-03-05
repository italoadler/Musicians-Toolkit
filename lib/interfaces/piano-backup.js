'use strict';

let svg = require('../util/svg');
let Interface = require('../core/interface');
let ButtonTemplate = require('../components/buttontemplate');

class PianoKey extends ButtonTemplate {

  constructor() {

    let options = ['value','note'];

    let defaults = {
      'size': [80,80],
      'target': false,
      'value': 0
    };

    super(arguments,options,defaults);

    this.note = this.settings.note;

    this.init();
    this.render();

  }

  buildFrame() {
    this.element = svg.create('svg');
    this.element.setAttribute('width',this.width);
    this.element.setAttribute('height',this.height);
    this.parent.appendChild(this.element);
  }

  buildInterface() {

    //let radius = Math.min(this.width,this.height) / 5;
    let radius = 5;

    this.pad = svg.create('rect');
    this.pad.setAttribute('x',1);
    this.pad.setAttribute('y',1);
    this.pad.setAttribute('width', this.width - 2);
    this.pad.setAttribute('height', this.height - 2);
    this.pad.setAttribute('rx', radius);
    this.pad.setAttribute('ry', radius);
    this.pad.setAttribute('fill', '#e7e7e7');

    this.element.appendChild(this.pad);

    this.element.addEventListener('mouseover', () => {
      if (this.piano.interacting) {
        this.turnOn();
        this.piano.drag(this.note,true);
      }
    });
    this.element.addEventListener('mouseout', () => {
      if (this.piano.interacting) {
        this.turnOff();
        this.piano.drag(this.note,false);
      }
    });
    this.element.addEventListener('mouseup', () => {
      if (this.piano.interacting) {
        this.turnOff();
        this.piano.drag(this.note,false);
      }
    });
  }

  render() {
    if (!this.state) {
      this.pad.setAttribute('fill', '#e7e7e7');
    } else {
      this.pad.setAttribute('fill', '#d18');
    }
  }

//  click() {
  //  this.turnOn();
  //  this.emit('change',this.state);
  //}

}

export default class Piano extends Interface {

  constructor() {

    let options = ['value'];

    let defaults = {
      'size': [500,150],
      'target': false,
      'value': 0
    };

    super(arguments,options,defaults);

    this.keyPattern = ['w','b','w','b','w','w','b','w','b','w','b','w'];

    this.range = {
      low: 24,
      high: 60
    };

    this.range.size = this.range.high - this.range.low;

    this.keys = [];
    this.active = -1;

    this.init();
    this.render();

  }

  buildFrame() {
    this.element = document.createElement('div');
    this.element.style.position = 'relative';
    this.element.style.display = 'block';
    this.element.style.width = '100%';
    this.element.style.height = '100%';
    this.parent.appendChild(this.element);
  }

  buildInterface() {

    let keyX = 0;

    let keyPositions = [];

    for (let i=0;i<this.range.high - this.range.low;i++) {

      keyPositions.push(keyX);

      let scaleIndex = (i+this.range.low) % this.keyPattern.length;
      let nextScaleIndex = (i+1+this.range.low) % this.keyPattern.length;
      if (this.keyPattern[scaleIndex] === 'w' && this.keyPattern[nextScaleIndex] === 'w') {
        keyX += 1;
      } else {
        keyX += 0.5;
      }
    }

    let buttonWidth = this.width / keyX;
    let buttonHeight = this.height/2;


    for (let i=0;i<this.range.high - this.range.low;i++) {

      let container = document.createElement('span');
      let scaleIndex = (i+this.range.low) % this.keyPattern.length;
      container.style.position = 'absolute';
      container.style.left = keyPositions[i]*buttonWidth + 'px';
      if (this.keyPattern[scaleIndex] === 'w') {
        container.style.top = buttonHeight + 'px';
      } else {
        container.style.top = '0px';
      }

      let key = new PianoKey(container, {
          size:[buttonWidth, buttonHeight],
          component: true,
          note: i+this.range.low
        }, this.keyChange.bind(this,i+this.range.low));

      key.piano = this;

      this.keys.push(key);
      this.element.appendChild(container);

    }
  }

//  update(index,v) {
//    this.active = index;


    //  this.buttons[i].turnOn();
    //  this.buttons[i].turnOff();

  //  this.emit('change',this.active);
  //}

  keyPress() {
    // turn on "hover" for other keys

  }

  keyRelease() {
    // if mouse up, then turn off hover for other keys
  }

  keyChange(i,v) {
    // emit data for any key turning on/off
    console.log(this,i,v);
    if (v) {
      this.interacting = true;
    } else {
      this.interacting = false;
    }
  }

  drag(note,on) {
    this.emit('change',note,on);
  }

  render() {
  /*  if (!this.state) {
      this.pad.setAttribute('fill', '#e7e7e7');
      this.pad.setAttribute('stroke', '#ccc');
    } else {
      this.pad.setAttribute('fill', '#d18');
      this.pad.setAttribute('stroke', '#d18');
    } */
  }

}