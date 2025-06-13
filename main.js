let x = 0;
      let targetX = 0;
      const speed = 0.1;

      const section01 = document.querySelectorAll(".section01 img");
      const image00 = section01[0];
      const image01 = section01[1];
      const image02 = section01[2];
      const image03 = section01[3];
      const image04 = section01[4]; 
      const image05 = section01[5];
      const image06 = section01[6];
      const image07 = section01[7];
      const image08 = section01[8];


      window.addEventListener("mousemove", (event) => {
        x = event.pageX - window.innerWidth / 2;
      });

      const loop = () => {
        targetX += (x - targetX) * speed;


        image01.style.transform = `translateX(${targetX / 40}px)`;
        image02.style.transform = `translateX(${targetX / 35}px)`;
        image03.style.transform = `translateX(${targetX / 25}px)`;
        image04.style.transform = `translateX(${targetX / 30}px)`;
        image05.style.transform =`translateX(${targetX / 20}px)`;
        image06.style.transform =`translateX(${targetX / 15}px)`;
        image07.style.transform =`translateX(${targetX / 40}px)`;
        image08.style.transform =`translateX(${targetX / 50}px)`;

        window.requestAnimationFrame(loop);
      };
      loop();