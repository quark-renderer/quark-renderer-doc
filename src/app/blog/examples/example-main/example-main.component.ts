import { Component, OnInit } from "@angular/core";
import { flyIn } from "../../../shared/animations/fly-in";

let qr = null;
let containerTop = 0;
let containerLeft = 0;

let elementMapping = {
  "visio": QuarkRenderer.VisioLink,
  "line": QuarkRenderer.Line,
  "image": QuarkRenderer.Image
};

let defautConfigMapping = {
  "visio": {
    position: [0, 0],
    draggable: true,
    isCable: true,
    style: {
        lineWidth: 2,
        text: "This is Visio link."
    },
    shape: {
        points: [
            [10, 10],
            [100, 10]
        ]
    }
  },
  "line": {
      position: [0, 0],
      draggable: true,
      isCable: true,
      style: {
          lineWidth: 2,
          text: "text on line"
      },
      shape: {
          x1: 0,
          y1: 0,
          x2: 100,
          y2: 0,
          percent: 1
      }
  },
  "image": {
      position: [0, 0],
      scale: [1, 1],
      style: {
          x: 0,
          y: 0,
          image: null,
          width: 64,
          height: 64
      },
      draggable: true,
      linkable: true
  }
}

const parkingSimulation = {
    dropZone: null,
    dragged: null
};

function onDragStart(event) {
	let target = event.target;
	if (target && target.nodeName == "IMG") {
    const imgSrc = target.src;
    parkingSimulation.dragged = target;
    event.dataTransfer.effectAllowed = "copy";
    event.dataTransfer.setData("text/uri-list", imgSrc);
    event.dataTransfer.setData("text/plain", imgSrc);
    event.target.style.opacity = .5;
	}
}

function onDragEnd(event) {
	if (event.target && event.target.nodeName == "IMG") {
    event.target.style.opacity = "";
	}
}

function onDragOver(event) {
  event.preventDefault();
}

function onDragLeave(event) {
  const target = event.target;
	target.style.background = "";
}

function contains(list, value) {
    for (let i = 0; i < list.length; ++i) {
      if (list[i] === value) { return true; }
    }
    return false;
}

function onDragEnter(event) {
	const target = event.target;
	const dragged = parkingSimulation.dragged;
	if (dragged && target) {
		const isLink = contains(event.dataTransfer.types, "text/uri-list");
		if (isLink) {
			event.preventDefault();
			event.dataTransfer.dropEffect = "copy"
      target.style.background = "#1f904e";
    } else {
      target.style.background = "#d51c00";
		}
	}
}

function onDrop(event) {
	const target = event.target;
	const dragged = parkingSimulation.dragged;
	if (dragged && target) {
		const isLink = contains(event.dataTransfer.types, "text/uri-list");
    target.style.background = "";
		if (isLink) {
      event.preventDefault();
      dragged.style.opacity = "";

      let offsetX = event.clientX - containerLeft;
      let offsetY = event.clientY - containerTop;
      if (!dragged.dataset || !dragged.dataset.type) { return; }
      let Clazz = elementMapping[dragged.dataset.type];
        let config = defautConfigMapping[dragged.dataset.type];
        config.position = [offsetX, offsetY];
        if (dragged.src) {
          config.style.image = dragged.src
        }
        let instance = new Clazz(config);
        qr.add(instance);
    }
	}
}

function offset(el) {
  let rect = el.getBoundingClientRect();
  let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

@Component({
  selector: "example-main",
  templateUrl: "./example-main.component.html",
  styleUrls: ["./example-main.component.scss"],
  animations: [
    flyIn
  ]
})
export class ExampleMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    parkingSimulation.dropZone = document.querySelector("#dropZone");
    let position = offset(parkingSimulation.dropZone);
    containerLeft = position.left;
    containerTop = position.top;
    const elements = document.querySelector(".elements");
    const dropZone = parkingSimulation.dropZone;

    elements.addEventListener("dragstart", onDragStart);
    elements.addEventListener("dragend", onDragEnd);
    
    dropZone.addEventListener("dragenter", onDragEnter);
    dropZone.addEventListener("dragleave", onDragLeave);
    dropZone.addEventListener("dragover", onDragOver);
    dropZone.addEventListener("drop", onDrop);

    qr = QuarkRenderer.init(document.getElementById("dropZone"));
  }
}
