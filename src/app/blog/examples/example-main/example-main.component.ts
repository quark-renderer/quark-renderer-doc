import { Component, OnInit } from "@angular/core";
import { flyIn } from "../../../shared/animations/fly-in";

let qr = null;
let containerTop = 0;
let containerLeft = 0;

let elementMapping = {
  "visio": QuarkRenderer.VisioLink,
  "line": QuarkRenderer.Line
};

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

      if (dragged.dataset && dragged.dataset.type === "visio") {
        let Clazz = elementMapping[dragged.dataset.type];
        let el = new Clazz({
          position: [offsetX, offsetY],
          draggable: true,
          isCable: true,
          style: {
              lineWidth: 2,
              text: "This is Visio link."
          },
          shape: {
              points: [
                  [10, 10],
                  [500, 10]
              ]
          }
        });
        qr.add(el);
      } else {
          let image = new QuarkRenderer.Image({
              position: [offsetX, offsetY],
              scale: [1, 1],
              style: {
                  x: 0,
                  y: 0,
                  image: dragged.src,
                  width: 64,
                  height: 64
              },
              draggable: true,
              linkable: true
          });
          qr.add(image);
      }
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
