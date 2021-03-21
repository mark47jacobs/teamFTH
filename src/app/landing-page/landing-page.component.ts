import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
  CurQuote: string;
  femaleicons = [{
    "src": "../../assets/madonna.jpg",
    "name": "Madonna",
    "bio": "A pop icon for over 30 years, Madonna is known for pushing the boundaries of what was acceptable for women in the entertainment industry. The third of six children, she actually dreamed of becoming a ballet dancer. Before her first top-10 hit in 1984, she moved to New York with just $35 in her pocket. Determined to make it, she worked a few lousy jobs along the way – including one at Dunkin’ Donuts. At 60, she continues to make popular music and redefine gender roles into the new Millenium.\“I’m tough, I’m ambitious, and I know exactly what I want. If that makes me a bitch, okay.\” "
  },
  {
    "src": "../../assets/hattieMcDaniel.jpg",
    "name": "Hattie McDaniel",
    "bio": "In 1940 Hattie McDaniel became the first African American woman to win an Academy Award. Unfortunately, the industry was shrouded with controversy because of the racism of the time. In fact, not only did she require an escort to the awards and the hotel at which the event was held, Hattie and her escort were obligated to sit at segregated tables. She went on to become an inspiration for African American entertainers and her legacy continues to be celebrated almost 80 years later.\“Putting a little time aside for clean fun and good humor is very necessary to relieve the tension of our time.\”"
  },
  {
    "src": "../../assets/jkrowling.jpg",
    "name": "J K Rowling",
    "bio": "The author of the world-famous Harry Potter novel series, Joanne Rowling built a near billion dollar empire of the success of her characters. But that wasn’t always her story: she started out broke, and began writing out the ideas for her bestselling series on the back of napkin while on a train to London. Granted an OBE (Order of the British Empire) by the Queen in 2001, Rowling now lives quietly with her family and continues to write. She dabbles in philanthropy while continuing to solidify her legacy as one of the greatest female novelists of all time.\“Happiness can be found, even in the darkest times, if one only remembers to turn on the light.\”"
  },
  ];
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
