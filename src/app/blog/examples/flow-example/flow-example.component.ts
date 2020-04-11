import { Component, OnInit } from "@angular/core";

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

function validateTarget(target) {
  const dropZone = parkingSimulation.dropZone;
	return (target.parentNode === dropZone || target === dropZone) ? dropZone : null;
}

function onDragLeave(event) {
  const target = validateTarget(event.target);
	target.style.background = "";
}

function contains(list, value) {
    for (let i = 0; i < list.length; ++i) {
      if (list[i] === value) { return true; }
    }
    return false;
}

function onDragEnter(event) {
	const target = validateTarget(event.target);
	const dragged = parkingSimulation.dragged;
	if (dragged && target) {
		const isLink = contains(event.dataTransfer.types, "text/uri-list");
		const vehicleType = dragged.alt;
		if (isLink && canPark(vehicleType)) {
			event.preventDefault();
			event.dataTransfer.dropEffect = "copy"
      target.style.background = "#1f904e";
    } else {
      target.style.background = "#d51c00";
		}
	}
}

function onDrop(event) {
	const target = validateTarget(event.target);
	const dragged = parkingSimulation.dragged;
	if (dragged && target) {
		const isLink = contains(event.dataTransfer.types, "text/uri-list");
		const vehicleType = dragged.alt;
		target.style.background = "";
		if (isLink && canPark(vehicleType)) {
      event.preventDefault();
      dragged.style.opacity = "";
      target.appendChild(dragged.cloneNode(true));
    }
	}
}

function canPark(vehicle) {
    return true;
}

@Component({
  selector: "flow-example",
  templateUrl: "./flow-example.component.html",
  styleUrls: ["./flow-example.component.scss"]
})
export class FlowExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    parkingSimulation.dropZone = document.querySelector("#dropZone");
    this.initCanvas();
  }

  initCanvas() {
    const elements = document.querySelector(".elements");
    const dropZone = parkingSimulation.dropZone;

    elements.addEventListener("dragstart", onDragStart);
    elements.addEventListener("dragend", onDragEnd);
    
    dropZone.addEventListener("dragenter", onDragEnter);
    dropZone.addEventListener("dragleave", onDragLeave);
    dropZone.addEventListener("dragover", onDragOver);
    dropZone.addEventListener("drop", onDrop);

    let qr = QuarkRenderer.init(document.getElementById("dropZone"));
    let rect = new QuarkRenderer.Rect({
        draggable: true,
        position: [200, 200],
        shape: {
            r: 0,
            width: 100,
            height: 100
        },
        style: {
            fill: "#ff0000",
            lineWidth: 5,
            text: "矩形",
            textPosition: "inside"
        }
    });
    qr.add(rect);

    rect.animate()
        .when(1000, {
            scale: [1, 1],
            skew: [0, 0],
            rotation: 0
        })
        .when(2000, {
            scale: [2, 2],
            skew: [0, 0],
            rotation: 0
        })
        .when(3000, {
            scale: [3, 2],
            skew: [0.5, 0],
            rotation: 0
        })
        .when(4000, {
            scale: [2, 2],
            skew: [0, 0],
            rotation: 60 * Math.PI / 180
        })
        .when(5000, {
            scale: [2, 2],
            skew: [2, 0],
            rotation: -Math.PI / 2
        })
        .start(true);
  }
}
