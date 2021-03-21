import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
  index = 0;
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
  {
    "src": "../../assets/mayaAngelou.jpg",
    "name": "Maya Angelou",
    "bio": "A civil rights activist, poet and singer, Maya Angelou is best known for her autobiography I Know Why the Caged Bird Sings. Her career in the creative arts spans over 50 years, and she has received more than 50 honorary degrees. In her early life she was a sex worker, and early in her life, she received sexual abuse from her mother’s boyfriend. After revealing the incident to her family, the man was murdered, and Angelou became a mute for 5 years. It is believed it was these 5 years that crafted her extraordinary mind, memory and creativity. Her story is an inspiration to young women everywhere who suffer the brutality of assault, and who are able to build remarkable lives in spite of it.\“I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.\”"
  },
  {
    "src": "../../assets/malalaYousafzai.jpg",
    "name": "Malala Yousafzai",
    "bio": "At 12 years old she was a blogger for the BBC, at 15 she survived an assassination by the Taliban, and at 17 she became the youngest Nobel Prize laureate of all time. Malala Yousafzai is a human rights advocate and a champion for education in her native Pakistan. She has since become a well known and popular philanthropist and an example of peace and empowerment for young people \“I think of it often and imagine the scene clearly. Even if they come to kill me, I will tell them what they are trying to do is wrong, that education is our basic right.\”"
  },
  {
    "src": "../../assets/anneFrank.jpg",
    "name": "Anne Frank",
    "bio": "Anne Frank was a German-born Jew who became one of the most well-known victims of the Holocaust after a journal she kept while in hiding became a huge success after being posthumously published as The Diary of a Young Girl. The diary gives a raw and real look into the life of Jews in Nazi Germany, but what is most shocking is her strength of character and unbelievable maturity for a young girl at the time of writing (just 13 when she started, and 15 at the end of her short life.) A consistent theme throughout her entries is the importance for woman to have a voice.\“In spite of everything, I still believe that people are really good at heart.\”"
  },
  {
    "src": "../../assets/serenaWilliams.png",
    "name": "Serena Williams",
    "bio": "Unanimously hailed as the greatest female Tennis player, and maybe athlete, of all time, Serena Williams has become a strong representative for women both on and off the field. She and her sister Venus have dominated international tennis for over 15 years, despite having to deal with a series of media controversies, serious injuries, racism and sexism. She has built a brand and a legacy, and she truly embodies what it means to be a strong and empowered woman.\“I’ve grown most not from victories, but setbacks. If winning is God’s reward, then losing is how he teaches us.\”"
  },
  {
    "src": "../../assets/virginiaWoolf.jpg",
    "name": "Virginia Woolf",
    "bio": "Considered one of the most important authors of the 20th century, Virginia Woolf was an outspoken advocate for women rights. She was strongly anti-colonialist, and the themes of her novels sought to go against the misogyny of the time. At a time where speaking out as a feminist in a public position could be dangerous, she was an inspiration to creative women everywhere.\“If you do not tell the truth about yourself you cannot tell it about other people.\”"
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
  changeBio(index) {
    this.index = index;
  }
  decreaseBio() {
    if (this.index == 0)
      this.index = 7;
    else
      this.index--;
  }
  increaseBio() {
    if (this.index == 7)
      this.index = 0;
    else
      this.index++;
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
      let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    //Animate In
    container.addEventListener("mouseenter", (e: MouseEvent) => {
      card.style.transition = "none";
      card.classList.add("gradient_class");
      //Popout
      if (index != 3) {
        title.style.transform = "translateZ(100px)";
        description.style.transform = "translateZ(75px)";
        purchase.style.transform = "translateZ(4px)";
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
