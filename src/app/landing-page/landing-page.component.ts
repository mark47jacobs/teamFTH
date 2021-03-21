import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
  CurQuote: string;
  ngOnInit(): void {
    this.animate();
  }
  animate() {
    this.addFunnyAnimation(0);
  }
  //Movement Animation to happen
  addFunnyAnimation(index) {
    const card: HTMLElement = document.querySelector(".card" + String(index));
    const container: HTMLElement = document.querySelector(".container" + String(index));
    //Items
    const title: HTMLElement = document.querySelector(".title" + String(index));
    const purchase: HTMLElement = document.querySelector(".purchase" + String(index));
    const description: HTMLElement = document.querySelector(".info" + String(index) + " h3");

    //Moving Animation Event
    container.addEventListener("mousemove", (e: MouseEvent) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    //Animate In
    container.addEventListener("mouseenter", (e: MouseEvent) => {
      card.style.transition = "none";
      card.classList.add("gradient_class");
      //Popout
      if (index != 3) {
        title.style.transform = "translateZ(190px)";
        description.style.transform = "translateZ(165px)";
        purchase.style.transform = "translateZ(45px)";
      }
    });
    //Animate Out
    container.addEventListener("mouseleave", (e: MouseEvent) => {
      card.style.transition = "all 0.5s ease";
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      card.classList.remove("gradient_class");
      //Popbac
      title.style.transform = "translateZ(0px)";
      description.style.transform = "translateZ(0px)";
      purchase.style.transform = "translateZ(0px)";
    });
  }

}
