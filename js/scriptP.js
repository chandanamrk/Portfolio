 let stars = [];
        
          class Star {
            constructor() {
              this.reset();
            }
        
            reset() {
              this.x = Math.random() * canvas.width;
              this.y = Math.random() * canvas.height;
              this.size = Math.random() * 1.2 + 0.3;
              this.alpha = Math.random() * 0.5 + 0.3;
              this.fade = Math.random() * 0.02 + 0.005;
              this.color = `rgba(255, 255, 255, ${this.alpha})`;
            }
        
            update() {
              this.alpha += this.fade;
              if (this.alpha >= 1 || this.alpha <= 0.3) {
                this.fade = -this.fade;
              }
              this.color = `rgba(255, 255, 255, ${this.alpha})`;
            }
        
            draw() {
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
              ctx.fillStyle = this.color;
              ctx.fill();
            }
          }
        
          function initStars() {
            stars = [];
            for (let i = 0; i < 200; i++) {
              stars.push(new Star());
            }
          }
        
          function animateStars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(star => {
              star.update();
              star.draw();
            });
            requestAnimationFrame(animateStars);
          }
        
          window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
          });
        
          initStars();
          animateStars();
        
          const toggleBtn = document.getElementById("themeToggle");
          toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
          });
        
        

  

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  
          tsParticles.load("tsparticles", {
            background: {
              color: "#1a1819"
            },
            particles: {
              number: {
                value: 80
              },
              color: {
                value: "#950597"
              },
              shape: {
                type: "circle"
              },
              opacity: {
                value: 0.7,
                random: true
              },
              size: {
                value: 3,
                random: true
              },
              links: {
                enable: true,
                distance: 120,
                color: "#c13795",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 1.2,
                direction: "none",
                outModes: "bounce"
              }
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab"
                }
              },
              modes: {
                grab: {
                  distance: 150,
                  links: {
                    opacity: 0.8
                  }
                }
              }
            },
            fullScreen: { enable: false }
          });
          
          
