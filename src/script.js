  var options = {
      chart: {
            type: 'pie'
      },
      series: [50, 40, 60, 10],
      labels: ['CSS3', 'HTML5', 'JavaScript', 'React JS'],
    
    }

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  let sliderContent = document.querySelector('.slider_content');

  let leftBtn = document.getElementById('slider-left');
  let rightBtn = document.getElementById('slider-right');

  const objImg = document.getElementById('obj-img');
  const objName = document.getElementById('obj-name');
  const objRepLink = document.getElementById('obj-repLink');
  const objAppLink = document.getElementById('obj-appLink');


  const data = [
   obj0 = {
    appImg: './image/slider/battery.png',
    appName: 'Battery status',
    repLink: 'https://github.com/FocUUsMe/battery',
    appLink: 'https://focuusme.github.io/battery/'
  },

   obj1 = {
    appImg: './image/slider/dragon.png',
    appName: 'Dragon combat',
    repLink: 'https://github.com/FocUUsMe/dragoncombat',
    appLink: 'https://focuusme.github.io/dragoncombat/'
  },

  obj2 = {
      appImg: './image/slider/list.png',
      appName: 'To-do list',
      repLink: 'https://github.com/FocUUsMe/web.To-doList',
      appLink: 'https://focuusme.github.io/web.To-doList/'
  },

  obj3 = {
      appImg: './image/slider/coffee.png',
      appName: 'Coffee machine',
      repLink: 'https://github.com/FocUUsMe/coffeemachine',
      appLink: 'https://focuusme.github.io/coffeemachine/'
  }  
  ];

  var typed = new Typed('#element', {
    strings: ['Создание веб сайтов.', 'Создание веб игр.', 'Создание дизайна.'],
    typeSpeed: 50,
    loop: true,
    backDelay: 1700,
  });

  let currentSlide = Math.floor(data.length / 2);

  function loadSliderData(obj){
    const {appImg, appName, repLink, appLink} = obj;

    objImg.src = appImg;    
    objName.innerHTML = appName;
    objRepLink.href = repLink;
    objAppLink.href = appLink;

    
  }   

  function handleLeft(){
    if(currentSlide > 0){
      currentSlide--;
      
      loadSliderData(data[currentSlide]);
    }else{
      currentSlide = data.length - 1;
      loadSliderData(data[currentSlide]);
    }
  }

  function handleRight(){
    if(currentSlide < data.length - 1){
      currentSlide++;
      loadSliderData(data[currentSlide])
    }else{
      currentSlide = 0;
      loadSliderData(data[currentSlide])
    }
  }

  chart.render();




  const bot = document.getElementById('bot');
  const closeFormBtn = document.getElementById('close_form');

  let isVisible = false;

  function openForm(){
    let form = document.querySelector('.bot_form');

    if(isVisible){
      isVisible = false;
      
      form.style.display = 'none';
    }else{
      form.style.display = 'flex';
      isVisible = true;
    }

    
  }

  //Events

  bot.addEventListener('click', openForm);
  leftBtn.addEventListener('click', handleLeft);
  rightBtn.addEventListener('click', handleRight);