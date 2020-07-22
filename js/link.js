
  let target1 = document.getElementById('projects');
  let target2 = document.getElementById('contact');
  let  button1 = document.getElementById('link1');
  let  button2 = document.getElementById('link2');
  button1.addEventListener('click', function() {
    target1.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'nearest'
    });
  });

  button2.addEventListener('click', function() {
    target2.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'nearest'
    });
  });
