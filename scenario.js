document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');
    const contentText = document.getElementById('content-text');
    const contactInfo = document.getElementById('contact-info');
    const interactiveBtn = document.getElementById('interactive-btn');
    
    const defaultContent = "Bachelor of Science in Information Technology and Bachelor of Library and Information Science students.";
    
    const aboutContent = "A Bachelor of Science in Information Technology (BSIT) degree program typically takes four years to complete. This degree is primarily focused on subjects such as software development, databases, networking, and information systems. The program equips students with the technical skills and knowledge needed to design, implement, and manage computer-based information systems in various organizational settings.";
    
    const contactContent = `
      <h3>Contact Information</h3>
      <p><strong>Email:</strong> kenntgabriel.arguelles@hcdc.edu.ph</p>
      <p><strong>Facebook:</strong> <a href="https://www.facebook.com/arguelleskennt " target="_blank">facebook.com/MyAccount</a></p>
      <p><strong>Phone:</strong> (63+) 09810957809</p>
    `;
    
    homeLink.addEventListener('click', function(e) {
      e.preventDefault();
      contentText.textContent = defaultContent;
      contactInfo.style.display = 'none';
    });
    
    aboutLink.addEventListener('click', function(e) {
      e.preventDefault();
      contentText.textContent = aboutContent;
      contactInfo.style.display = 'none';
    });
    
    contactLink.addEventListener('click', function(e) {
      e.preventDefault();
      contentText.textContent = defaultContent;
      contactInfo.innerHTML = contactContent;
      contactInfo.style.display = 'block';
    });
    
    let clickCount = 0;
    const messages = [
      "You clicked me!",
      "Keep clicking!",
      "Just keep more clicking!.",
      "One more time!",
      "Congratulations! 🎉",
      "Let's do it again!"
    ];
    
    interactiveBtn.addEventListener('click', function() {
      clickCount++;
      
      if (clickCount <= messages.length) {
        interactiveBtn.textContent = messages[clickCount - 1];
      } else {
        clickCount = 1;
        interactiveBtn.textContent = messages[0];
      }
      
      interactiveBtn.classList.add('animate-pulse');
      
      setTimeout(() => {
        interactiveBtn.classList.remove('animate-pulse');
      }, 1500);
      
      const colors = ['#4299e1', '#48bb78', '#9f7aea', '#ed8936', '#e53e3e'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      interactiveBtn.style.background = randomColor;
    });
    
    const heroImage = document.querySelector('.hero-image');
    heroImage.addEventListener('mouseenter', function() {
      this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
  });