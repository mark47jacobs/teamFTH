import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
  CurQuote: string;
  femaleicons = { "src": "../../assets", "name": "Madonna", "bio": "lorem20" };
  public isCollapsed = false;
  ngOnInit(): void {
    var carousels = document.querySelectorAll('.carousel');
    for (var i = 0; i < carousels.length; i++) {
      this.carousel(carousels[i]);
    }
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



  carousel(root) {
    var
      figure = root.querySelector('figure'),
      nav = root.querySelector('nav'),
      images = figure.children,
      n = images.length,
      gap = root.dataset.gap || 0,
      bfc = 'bfc' in root.dataset,

      theta = 2 * Math.PI / n,
      currImage = 0
      ;

    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener('resize', () => {
      setupCarousel(n, parseFloat(getComputedStyle(images[0]).width))
    });

    setupNavigation();

    function setupCarousel(n, s) {
      var
        apothem = s / (2 * Math.tan(Math.PI / n))
        ;

      figure.style.transformOrigin = `50% 50% ${- apothem}px`;

      for (var i = 0; i < n; i++)
        images[i].style.padding = `${gap}px`;
      for (i = 1; i < n; i++) {
        images[i].style.transformOrigin = `50% 50% ${- apothem}px`;
        images[i].style.transform = `rotateY(${i * theta}rad)`;
      }
      if (bfc)
        for (i = 0; i < n; i++)
          images[i].style.backfaceVisibility = 'hidden';

      rotateCarousel(currImage);
    }

    function setupNavigation() {
      nav.addEventListener('click', onClick, true);

      function onClick(e) {
        e.stopPropagation();

        var t = e.target;
        if (t.tagName.toUpperCase() != 'BUTTON')
          return;

        if (t.classList.contains('next')) {
          currImage++;
        }
        else {
          currImage--;
        }

        rotateCarousel(currImage);
      }

    }

    function rotateCarousel(imageIndex) {
      figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    }

  }

}
