document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger'); // Идентификатор вашей иконки бургера
    const mobileMenu = document.querySelector('.mobile-menu');
    const headerWrapper = document.querySelector('.header__wrapper');
  
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.toggle('active');
      
      // Проверяем, активно ли меню, и устанавливаем стиль для body
      if (mobileMenu.classList.contains('active')) {
        document.body.style.position = 'fixed';
        // Добавляем стили к header__wrapper, если меню активно
        headerWrapper.style.borderBottomRightRadius = '0';
        headerWrapper.style.borderBottomLeftRadius = '0';
      } else {
        document.body.style.position = ''; // Удаление стиля position: fixed
        // Возвращаем исходные стили к header__wrapper, если меню неактивно
        headerWrapper.style.borderBottomRightRadius = '30px';
        headerWrapper.style.borderBottomLeftRadius = '30px';
      }
    });
  });
  

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger'); // Идентификатор вашей иконки бургера

  hamburger.addEventListener('click', function () {
      if (!hamburger.classList.contains('clicked')) {
          hamburger.classList.add('clicked');
          
          setTimeout(function () {
              hamburger.classList.remove('reverse-animation');
          }, 600); // Длительность анимации
      } else {
          hamburger.classList.remove('clicked');
          
      }
  });
});











// скрипты регистрации -----------------------------

document.addEventListener('DOMContentLoaded', function() {
  const steps = document.querySelectorAll('.step');
  const continueBtns = document.querySelectorAll('.continue-btn');
  const backBtns = document.querySelectorAll('.back-btn');
  const progressBar = document.querySelector('.registration-form__progress-bar');
  const registrationFormTitle = document.querySelector('.registration-form__title'); // Выберите ваш элемент заголовка

  const inputs = document.querySelectorAll('.input');
  const genderBtns = document.querySelectorAll('.gender-btn');
  const answerBtns = document.querySelectorAll('.answer-btn');

  const registrationStepsText = [
    "Регистрация",
    "Личные данные",
    "Финансы",
    "Контактные данные",
    // Добавьте тексты для каждого этапа, если необходимо
  ];

  function calculateProgress() {
    const totalSteps = steps.length;
    let completedSteps = 0;

    steps.forEach(step => {
      if (step.classList.contains('active')) {
        completedSteps = Array.from(steps).indexOf(step);
      }
    });

    const progress = (completedSteps / (totalSteps - 0.5)) * 100;
    return progress;
  }

  function hideProgressBar() {
    progressBar.style.display = 'none';
  }

  function updateProgressBar() {
    const progress = calculateProgress();
    progressBar.style.backgroundSize = `${progress}% 100%`;
  }

  function updateRegistrationFormTitle(stepIndex) {
    registrationFormTitle.textContent = registrationStepsText[stepIndex];
  }

  function checkFormCompletion() {
    let allInputsFilled = true;

    inputs.forEach(input => {
      if (input.value.trim() === '') {
        allInputsFilled = false;
      }
    });

    genderBtns.forEach(btn => {
      if (!btn.classList.contains('selected')) {
        allInputsFilled = false;
      }
    });

    answerBtns.forEach(btn => {
      if (!btn.classList.contains('selected')) {
        allInputsFilled = false;
      }
    });

    return allInputsFilled;
  }

  function updateContinueButtonState(step) {
    const continueButton = step.querySelector('.continue-btn');
    // continueButton.disabled = !checkFormCompletion();
  }

  function activateStep(index) {
    steps.forEach(step => step.classList.remove('active'));
    steps[index].classList.add('active');
    updateRegistrationFormTitle(index); // Обновление заголовка при активации этапа
  }

  continueBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      if (index < steps.length - 1) {
        activateStep(index + 1);
        updateProgressBar();
        updateContinueButtonState(steps[index + 1]);
      } else {
        const registrationForm = document.querySelector('.registration-form');
        const finishedForm = document.querySelector('.registration-form-finished');
        registrationForm.style.display = 'none';
        finishedForm.style.display = 'flex';

        const progressBarFinished = document.querySelector('.registration-form-finished__progress-bar');
        const titleFinished = document.querySelector('.registration-form-finished__title');

        let progressFinished = 0;
        if (registrationForm.style.display === 'none') {
          progressBar.style.display = 'none';
          
          hideProgressBar(); // Скрыть прогресс-бар

          registrationFormTitle.style.display = 'none'; // Скрыть заголовок формы после завершения регистрации
        }

        const interval = setInterval(() => {
          progressFinished++;
          titleFinished.textContent = `${progressFinished}%`;

          if (progressFinished === 100) {
            clearInterval(interval);
            hideProgressBar(); // Функция для скрытия прогресс-бара
            
          }
        }, 50); // Увеличиваем процент каждые 100 миллисекунд
      }
    });
  });

  backBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      if (index > 0) {
        activateStep(index - 1);
        updateProgressBar();
        updateContinueButtonState(steps[index - 1]);
      }
    });
  });

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      const activeStep = input.closest('.step');
      updateContinueButtonState(activeStep);
      updateProgressBar();
    });
  });

  genderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeStep = btn.closest('.step');
      updateContinueButtonState(activeStep);
      updateProgressBar();
    });
  });

  answerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeStep = btn.closest('.step');
      updateContinueButtonState(activeStep);
      updateProgressBar();
    });
  });
  // Показать первый этап регистрации при загрузке страницы
  steps[0].classList.add('active');
  updateRegistrationFormTitle(0); // Обновление заголовка для первого этапа
  updateProgressBar(); // Обновить прогресс-бар для первого этапа
});


  
// скрипты регистрации -----------------------------










// скрипты поп апа отзыва -----------------------------


document.addEventListener('DOMContentLoaded', function() {
  const ratingButton = document.querySelector('.offer__rating-button');
  const popupOverlay = document.getElementById('popupOverlay');
  const popup = document.getElementById('popup');
  const popupCloseButtons = document.querySelectorAll('.offer__popup-close');
  const successButton = document.querySelector('.offer__popup-success-button');
  const successMessage = popup.querySelector('.success-message');

  ratingButton.addEventListener('click', () => {
    popupOverlay.style.display = 'flex';
    popupOverlay.classList.add('show');
    popup.querySelector('.rating-form').classList.add('show');
  });

  popupCloseButtons.forEach(button => {
    button.addEventListener('click', () => {
      hidePopup();
    });
  });

  popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
      hidePopup();
    }
  });

  successButton.addEventListener('click', () => {
    hidePopup();
  });

  const hidePopup = () => {
    popupOverlay.style.display = 'none';
    popupOverlay.classList.remove('show');
    popup.querySelectorAll('.offer__popup-content').forEach(content => {
      content.classList.remove('show');
    });
  };

  const showSuccessMessage = () => {
    hidePopup();
    successMessage.classList.add('show');
    popupOverlay.style.display = 'flex';
    popupOverlay.classList.add('show');
  };

  const ratingForm = document.getElementById('ratingForm');
  ratingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Место для логики отправки данных формы, например, через AJAX

    // После успешной отправки показываем сообщение об успешной отправке
    showSuccessMessage();
  });
});




// скрипты поп апа отзыва -----------------------------







// pagination blog-list.html 


document.addEventListener('DOMContentLoaded', function() {
  const blogContents = document.querySelectorAll('.blog-list__content');
  const paginationContainer = document.getElementById('blog-list__pagination');

  const itemsPerPage = 1; // Количество блог-листов на одной странице
  const totalItems = blogContents.length; // Общее количество блог-листов
  const pageCount = Math.ceil(totalItems / itemsPerPage); // Общее количество страниц

  let currentPage = 1; // Текущая страница

  function showPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
  
    blogContents.forEach((content, index) => {
      if (index >= start && index < end) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  
    // Получаем элемент с id="blog-list"
    const blogListElement = document.getElementById('blog-list');
  
    // Плавный скролл к элементу с id="blog-list"
    blogListElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  

  function createPagination() {
    const maxVisiblePages = 5; // Максимальное количество видимых кнопок пагинации

    for (let i = 1; i <= pageCount; i++) {
      const button = document.createElement('button');
      button.innerText = i;

      button.addEventListener('click', function() {
        currentPage = i;
        showPage(currentPage);
        highlightActiveButton(this);
        updateArrows();
      
        const contentBlock = document.querySelector('.blog-list__content');
        contentBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      

      paginationContainer.appendChild(button);

      if (i === currentPage) {
        button.classList.add('active');
      }

      if (i > maxVisiblePages && i < currentPage) {
        button.style.display = 'none';
      }

      if (i > currentPage + 2 && i <= pageCount) {
        button.style.display = 'none';
      }
    }

    updateArrows();
  }

  function highlightActiveButton(selectedButton) {
    const buttons = paginationContainer.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove('active'));
    selectedButton.classList.add('active');
  }

  function updateArrows() {
    const buttons = paginationContainer.querySelectorAll('button');
  
    // Уберем установку disabled для кнопок
    // buttons[0].disabled = currentPage === 1;
    // buttons[buttons.length - 1].disabled = currentPage === pageCount;
  
    buttons[0].classList.toggle('disabled', currentPage === 1);
    buttons[buttons.length - 1].classList.toggle('disabled', currentPage === pageCount);
  
    for (let i = 1; i < buttons.length - 1; i++) {
      const buttonValue = parseInt(buttons[i].innerText);
  
      if (buttonValue <= currentPage - 2 || buttonValue > currentPage + 2) {
        buttons[i].style.display = 'none';
      } else {
        buttons[i].style.display = 'inline-block';
      }
    }
  }
  

  createPagination();
  showPage(1);

  const prevInactiveArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 12H5" stroke="#B5C3D1" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 19L5 12L12 5" stroke="#B5C3D1" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const prevActiveArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 12H5" stroke="#002956" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 19L5 12L12 5" stroke="#002956" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const nextInactiveArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5.00024 12H19.0002" stroke="#B5C3D1" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5L19 12L12 19" stroke="#B5C3D1" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const nextActiveArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5.00024 12H19.0002" stroke="#002956" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5L19 12L12 19" stroke="#002956" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  const nextArrow = document.createElement('button');
  
  nextArrow.innerHTML = nextActiveArrow;
  nextArrow.addEventListener('click', function() {
    if (currentPage < pageCount) {
      currentPage++;
    }
    showPage(currentPage);
    highlightActiveButton(paginationContainer.querySelector(`button:nth-child(${currentPage})`));
    updateArrows();

    const contentBlock = document.querySelector('.blog-list__content');
    contentBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  paginationContainer.appendChild(nextArrow);

  const prevArrow = document.createElement('button');
  prevArrow.innerHTML = prevActiveArrow;
  // Уберем установку disabled для кнопки назад
  // prevArrow.disabled = true;
  prevArrow.addEventListener('click', function() {
    if (currentPage > 1) {
      currentPage--;
    }
    showPage(currentPage);
    highlightActiveButton(paginationContainer.querySelector(`button:nth-child(${currentPage})`));
    updateArrows();

    const contentBlock = document.querySelector('.blog-list__content');
    contentBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  paginationContainer.insertBefore(prevArrow, paginationContainer.firstChild);

  updateArrows();

});






