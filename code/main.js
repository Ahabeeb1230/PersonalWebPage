$('a').on('click', function() {
    $('#hamburger').prop('checked', false);
  });
  
  $(function() {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    window.addEventListener('scroll', e => {
      let topOffset = window.scrollY + 25;
      for (let link of navLinks) {
        let section = document.querySelector(link.hash);
        if (section.offsetTop <= topOffset && section.offsetTop + section.offsetHeight > topOffset) {
          link.setAttribute('state', 'active');
          document.title = `${link.innerText} | Abdurrahman Habeeb`;
        } else {
          link.setAttribute('state', 'inactive');
        }
      }
    });
  
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    window.addEventListener('mousemove', e => {
      cursor.classList.add("active");
      cursorDot.classList.add("active");
      cursor.classList.remove("inactive");
      cursorDot.classList.remove("inactive");
      cursor.style.top = e.clientY + "px";
      cursorDot.style.top = e.clientY + "px";
      cursor.style.left = e.clientX + "px";
      cursorDot.style.left = e.clientX + "px";
    });
  
    window.addEventListener('mouseout', e => {
      cursor.classList.add("inactive");
      cursorDot.classList.add("inactive");
    });
  
    window.addEventListener('mousedown', e => {
      if (cursor.classList.contains("hovered")) {
        cursor.classList.add("hclicked");
        cursorDot.classList.add("hclicked");
      } else {
        cursor.classList.add("clicked");
      }
    });
  
    window.addEventListener('mouseup', e => {
      cursor.classList.remove("clicked");
      cursor.classList.remove("hclicked");
      cursorDot.classList.remove("hclicked");
    });
  
    const links = document.querySelectorAll('a, .hamburger-icon, .field, button, .stroke');
    links.forEach(link => {
      link.addEventListener('mouseover', e => {
        cursor.classList.add("hovered");
        cursorDot.classList.add("hovered");
      });
  
      link.addEventListener('mouseout', e => {
        cursor.classList.remove("hovered");
        cursorDot.classList.remove("hovered");
      });
    });
  
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { 
      cursor.style.display = "none";
      cursorDot.style.display = "none";
    }
  
    document.querySelector('footer p').innerHTML = "© " + new Date().getFullYear() + " | Designed and built by Abdurrahman Habeeb";
  });
  