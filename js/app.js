// надписи и цвета на секторах
const characters = [
  {
    text: "1",
    img: "images/characters/1.jpg",
  },
  {
    text: "2",
    img: "images/characters/2.jpg",
  },
  {
    text: "3",
    img: "images/characters/3.jpg",
  },
  {
    text: "4",
    img: "images/characters/4.jpg",
  },
  {
    text: "5",
    img: "images/characters/5.jpg",
  },
  {
    text: "6",
    img: "images/characters/6.jpg",
  },
  {
    text: "7",
    img: "images/characters/7.jpg",
  },
  {
    text: "8",
    img: "images/characters/8.jpg",
  },
  {
    text: "9",
    img: "images/characters/9.jpg",
  },
  {
    text: "10",
    img: "images/characters/10.jpg",
  },
  {
    text: "11",
    img: "images/characters/11.jpg",
  },
  {
    text: "12",
    img: "images/characters/12.jpg",
  },
  {
    text: "13",
    img: "images/characters/13.jpg",
  },
  {
    text: "14",
    img: "images/characters/14.jpg",
  },
  {
    text: "15",
    img: "images/characters/15.jpg",
  },
  {
    text: "16",
    img: "images/characters/16.jpg",
  },
  {
    text: "17",
    img: "images/characters/17.jpeg",
  },
  {
    text: "18",
    img: "images/characters/18.jpg",
  },
  {
    text: "19",
    img: "images/characters/19.jpg",
  },
  {
    text: "20",
    img: "images/characters/20.jpg",
  },
  {
    text: "21",
    img: "images/characters/21.jpg",
  },
  {
    text: "22",
    img: "images/characters/22.jpg",
  },
  {
    text: "23",
    img: "images/characters/23.jpg",
  },
  {
    text: "24",
    img: "images/characters/24.jpg",
  },
  {
    text: "25",
    img: "images/characters/25.jpg",
  },
  {
    text: "26",
    img: "images/characters/26.jpg",
  },
  {
    text: "27",
    img: "images/characters/27.jpg",
  },
  {
    text: "28",
    img: "images/characters/28.jpg",
  },
  {
    text: "29",
    img: "images/characters/29.jpg",
  },
  {
    text: "30",
    img: "images/characters/30.jpg",
  },
  {
    text: "31",
    img: "images/characters/31.jpg",
  },
  {
    text: "32",
    img: "images/characters/32.jpg",
  },
  {
    text: "33",
    img: "images/characters/33.jpg",
  },
  {
    text: "34",
    img: "images/characters/34.jpg",
  },
  {
    text: "35",
    img: "images/characters/35.jpg",
  },
  {
    text: "36",
    img: "images/characters/36.jpg",
  },
  {
    text: "37",
    img: "images/characters/37.jpg",
  },
  {
    text: "38",
    img: "images/characters/38.jpg",
  },
  {
    text: "39",
    img: "images/characters/39.jpg",
  },
  {
    text: "40",
    img: "images/characters/40.jpg",
  },
  {
    text: "41",
    img: "images/characters/41.jpg",
  },
  {
    text: "42",
    img: "images/characters/42.jpg",
  },
  {
    text: "43",
    img: "images/characters/43.jpg",
  },
  {
    text: "44",
    img: "images/characters/44.jpg",
  },
  {
    text: "45",
    img: "images/characters/45.jpg",
  },
  {
    text: "46",
    img: "images/characters/46.jpg",
  },
  {
    text: "47",
    img: "images/characters/47.jpg",
  },
  {
    text: "48",
    img: "images/characters/48.jpg",
  },
  {
    text: "49",
    img: "images/characters/49.jpg",
  },
  {
    text: "50",
    img: "images/characters/50.jpg",
  },
  {
    text: "51",
    img: "images/characters/51.jpg",
  },
  {
    text: "52",
    img: "images/characters/52.jpg",
  },
  {
    text: "53",
    img: "images/characters/53.jpg",
  },
  {
    text: "54",
    img: "images/characters/54.jpg",
  },
  {
    text: "55",
    img: "images/characters/55.jpg",
  },
  {
    text: "56",
    img: "images/characters/56.jpg",
  },
  {
    text: "57",
    img: "images/characters/57.jpg",
  },
  {
    text: "58",
    img: "images/characters/58.jpg",
  },
  {
    text: "59",
    img: "images/characters/59.jpg",
  },
  {
    text: "60",
    img: "images/characters/60.jpg",
  },
  {
    text: "61",
    img: "images/characters/61.jpg",
  },
  {
    text: "62",
    img: "images/characters/62.jpg",
  },
  {
    text: "63",
    img: "images/characters/63.jpg",
  },
  {
    text: "64",
    img: "images/characters/64.jpg",
  },
  {
    text: "65",
    img: "images/characters/65.jpg",
  },
  {
    text: "66",
    img: "images/characters/66.jpg",
  },
];

// Массив для хранения выпавших призов (максимум 5)
const yourTeam = [];
const enemyTeam = [];

// создаём переменные для быстрого доступа ко всем объектам на странице — блоку в целом, колесу, кнопке и язычку
const wheel = document.querySelector(".deal-wheel");
const spinner = wheel.querySelector(".spinner");
const trigger = wheel.querySelector(".btn-spin");
const ticker = wheel.querySelector(".ticker");
const image = wheel.querySelector(".image");
const vs = document.querySelector(".vs_block")



// на сколько секторов нарезаем круг
const prizeSlice = 360 / characters.length;
// на какое расстояние смещаем сектора друг относительно друга
const prizeOffset = Math.floor(180 / characters.length);
// прописываем CSS-классы, которые будем добавлять и убирать из стилей
const spinClass = "is-spinning";
const selectedClass = "selected";
// получаем все значения параметров стилей у секторов
const spinnerStyles = window.getComputedStyle(spinner);
// Создаем переменную для блока, где будет отображаться изображение
const resultImage = document.querySelector(".result-image");

// переменная для анимации
let tickerAnim;
// угол вращения
let rotation = 0;
// текущий сектор
let currentSlice = 0;
// переменная для текстовых подписей
let prizeNodes;
//переменная для смены команд
let switcher = false;


// ======================================== круг выбора колличества персонажей ====================================
// ======================================== круг выбора колличества персонажей ====================================
// ======================================== круг выбора колличества персонажей ====================================

// надписи и цвета на секторах
const prizes = [
  {
    text: "1 Боец",
    color: "hsl(197 30% 43%)",
  },
  {
    text: "2 Бойца",
    color: "hsl(173 58% 39%)",
  },
  {
    text: "3 Бойца",
    color: "hsl(43 74% 66%)",
  },
  {
    text: "4 Бойца",
    color: "hsl(27 87% 67%)",
  },
  {
    text: "5 Бойцов",
    color: "hsl(12 76% 61%)",
  }
];

// создаём переменные для быстрого доступа ко всем объектам на странице — блоку в целом, колесу, кнопке и язычку
const array_wheel = document.querySelector(".array-wheel");
const array_spinner = array_wheel.querySelector(".array-spinner");
const array_trigger = array_wheel.querySelector(".btn-spin");
const array_ticker = array_wheel.querySelector(".ticker");
const span = document.getElementById('my-span')
const array_circle = document.querySelector(".array-spinner");
const circle = document.querySelector(".spinner");

// на сколько секторов нарезаем круг
const array_prizeSlice = 360 / prizes.length;
// на какое расстояние смещаем сектора друг относительно друга
const array_prizeOffset = Math.floor(180 / prizes.length);
// прописываем CSS-классы, которые будем добавлять и убирать из стилей
const array_spinClass = "is-spinning";
const array_selectedClass = "selected";
// получаем все значения параметров стилей у секторов
const array_spinnerStyles = window.getComputedStyle(array_spinner);

// переменная для анимации
let array_tickerAnim;
// угол вращения
let array_rotation = 0;
// текущий сектор
let array_currentSlice = 0;
// переменная для текстовых подписей
let array_prizeNodes;

let yourTeamLength = null;
let enemyTeamLength = null;
let counter = 0;

// расставляем текст по секторам
const array_createPrizeNodes = () => {
  // обрабатываем каждую подпись
  prizes.forEach(({ text, color, reaction }, i) => {
    // каждой из них назначаем свой угол поворота
    const array_rotation = ((array_prizeSlice * i) * -1) - array_prizeOffset;
    // добавляем код с размещением текста на страницу в конец блока spinner
    array_spinner.insertAdjacentHTML(
      "beforeend",
      // текст при этом уже оформлен нужными стилями
      `<li class="prize" data-reaction=${reaction} style="--rotate: ${array_rotation}deg">
        <span class="text">${text}</span>
      </li>`
    );
  });
};

// рисуем разноцветные секторы
const array_createConicGradient = () => {
  // устанавливаем нужное значение стиля у элемента spinner
  array_spinner.setAttribute(
    "style",
    `background: conic-gradient(
      from -90deg,
      ${prizes
      // получаем цвет текущего сектора
      .map(({ color }, i) => `${color} 0 ${(100 / prizes.length) * (prizes.length - i)}%`)
      .reverse()
    }
    );`
  );
};

// создаём функцию, которая нарисует колесо в сборе
const array_setupWheel = () => {
  // сначала секторы
  array_createConicGradient();
  // потом текст
  array_createPrizeNodes();
  // а потом мы получим список всех призов на странице, чтобы работать с ними как с объектами
  array_prizeNodes = array_wheel.querySelectorAll(".prize");
};

// определяем количество оборотов, которое сделает наше колесо
const array_spinertia = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// функция запуска вращения с плавной остановкой
const array_runTickerAnimation = () => {
  // взяли код анимации отсюда: https://css-tricks.com/get-value-of-css-rotation-through-javascript/
  const values = array_spinnerStyles.transform.split("(")[1].split(")")[0].split(",");
  const a = values[0];
  const b = values[1];
  let rad = Math.atan2(b, a);

  if (rad < 0) rad += (2 * Math.PI);

  const angle = Math.round(rad * (180 / Math.PI));
  const slice = Math.floor(angle / array_prizeSlice);

  // анимация язычка, когда его задевает колесо при вращении
  // если появился новый сектор
  if (array_currentSlice !== slice) {
    // убираем анимацию язычка
    array_ticker.style.animation = "none";
    // и через 10 миллисекунд отменяем это, чтобы он вернулся в первоначальное положение
    setTimeout(() => array_ticker.style.animation = null, 10);
    // после того, как язычок прошёл сектор - делаем его текущим 
    array_currentSlice = slice;
  }
  // запускаем анимацию
  array_tickerAnim = requestAnimationFrame(array_runTickerAnimation);
};

// функция выбора призового сектора
const array_selectPrize = () => {
  const selected = Math.floor(array_rotation / array_prizeSlice);
  array_prizeNodes[selected].classList.add(array_selectedClass);

  if (counter == 0) {
    yourTeamLength = selected + 1;
    console.log("yourTeamLength", yourTeamLength)
    span.textContent = 'Вторая команда';
  } else if (counter == 1) {
    enemyTeamLength = selected + 1;
    console.log("enemyTeamLength", enemyTeamLength)
    span.textContent = 'Выбор персонажей';
  }
  counter++;
};

const startArraySpinning = () => {
  if (counter < 2) {
    // делаем её недоступной для нажатия
    array_trigger.disabled = true;
    // задаём начальное вращение колеса
    array_rotation = Math.floor(Math.random() * 360 + array_spinertia(2000, 5000));
    // убираем прошлый приз
    array_prizeNodes.forEach((prize) => prize.classList.remove(array_selectedClass));
    // добавляем колесу класс is-spinning, с помощью которого реализуем нужную отрисовку
    array_wheel.classList.add(array_spinClass);
    // через CSS говорим секторам, как им повернуться
    array_spinner.style.setProperty("--rotate", array_rotation);
    // возвращаем язычок в горизонтальную позицию
    array_ticker.style.animation = "none";
    // запускаем анимацию вращение
    array_runTickerAnimation();
  } else {
    loadMainWheelScript();
  }
}

// отслеживаем нажатие на кнопку
array_trigger.addEventListener("click", startArraySpinning);
// отслеживаем нажатие на кнопку
array_circle.addEventListener("click", startArraySpinning);

// отслеживаем, когда закончилась анимация вращения колеса
array_spinner.addEventListener("transitionend", () => {
  // останавливаем отрисовку вращения
  cancelAnimationFrame(array_tickerAnim);
  // получаем текущее значение поворота колеса
  array_rotation %= 360;
  // выбираем приз
  array_selectPrize();
  // убираем класс, который отвечает за вращение
  array_wheel.classList.remove(array_spinClass);
  // отправляем в CSS новое положение поворота колеса
  array_spinner.style.setProperty("--rotate", array_rotation);
  // делаем кнопку снова активной
  array_trigger.disabled = false;
});

function loadMainWheelScript() {
  // Находим все элементы с классом array
  const arrayElements = document.querySelectorAll('.array');
  // Скрываем их
  arrayElements.forEach(element => {
    element.style.display = 'none';
  });
  // Показываем все элементы с классом hidden
  document.querySelectorAll('.hidden').forEach(element => {
    element.classList.remove('hidden');
  });

  console.log("change to main wheel")
}

// подготавливаем всё к первому запуску
array_setupWheel();

// ======================================== основной круг с персонажами ==========================================
// ======================================== основной круг с персонажами ==========================================
// ======================================== основной круг с персонажами ==========================================


// расставляем текст по секторам
const createPrizeNodes = () => {
  // обрабатываем каждую подпись
  characters.forEach(({ text, color, reaction }, i) => {
    // каждой из них назначаем свой угол поворота
    const rotation = ((prizeSlice * i) * -1) - prizeOffset;
    // добавляем код с размещением текста на страницу в конец блока spinner
    spinner.insertAdjacentHTML(
      "beforeend",
      // текст при этом уже оформлен нужными стилями
      `<li class="prize" data-reaction=${reaction} style="--rotate: ${rotation}deg">
        <span class="text">${text}</span>
      </li>`
    );
  });
};

// рисуем разноцветные секторы
const createConicGradient = () => {
  // устанавливаем нужное значение стиля у элемента spinner
  spinner.setAttribute(
    "style",
    `background: conic-gradient(
      from -90deg,
      ${characters
      // получаем цвет текущего сектора
      .map(({ color }, i) => `${color} 0 ${(100 / characters.length) * (characters.length - i)}%`)
      .reverse()
    }
    );`
  );
};

// создаём функцию, которая нарисует колесо в сборе
const setupWheel = () => {
  // сначала секторы
  createConicGradient();
  // потом текст
  createPrizeNodes();
  // а потом мы получим список всех призов на странице, чтобы работать с ними как с объектами
  prizeNodes = wheel.querySelectorAll(".prize");
};

// определяем количество оборотов, которое сделает наше колесо
const spinertia = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// функция запуска вращения с плавной остановкой
const runTickerAnimation = () => {
  // взяли код анимации отсюда: https://css-tricks.com/get-value-of-css-rotation-through-javascript/
  const values = spinnerStyles.transform.split("(")[1].split(")")[0].split(",");
  const a = values[0];
  const b = values[1];
  let rad = Math.atan2(b, a);

  if (rad < 0) rad += (2 * Math.PI);

  const angle = Math.round(rad * (180 / Math.PI));
  const slice = Math.floor(angle / prizeSlice);

  // анимация язычка, когда его задевает колесо при вращении
  // если появился новый сектор
  if (currentSlice !== slice) {
    // убираем анимацию язычка
    ticker.style.animation = "none";
    // и через 10 миллисекунд отменяем это, чтобы он вернулся в первоначальное положение
    setTimeout(() => ticker.style.animation = null, 10);
    // после того, как язычок прошёл сектор - делаем его текущим 
    currentSlice = slice;
  }
  // запускаем анимацию
  tickerAnim = requestAnimationFrame(runTickerAnimation);
};

// функция выбора призового сектора
const selectPrize = () => {
  // Определяем выигрышный сектор
  const selected = Math.floor(rotation / prizeSlice);
  // Подсвечиваем текущий сектор
  prizeNodes[selected].classList.add(selectedClass);
  // Устанавливаем изображение, соответствующее выигрышному сектору
  const character = characters[selected];
  resultImage.innerHTML = `<img src="${character.img}" alt="Prize">`;

  // Добавляем приз в массив, если он еще не заполнен
  if (yourTeam.length < yourTeamLength) {
    yourTeam.push(character.text); // Добавляем только текст для примера
    console.log(`Добавлено: ${character.text}. Текущий массив: `, yourTeam);
  } else {
    console.log("Массив заполнен: ", yourTeam);
    switcher = true;
  }


  // Находим контейнер для отображения результатов
  const resultsContainer = document.querySelector(".your_team");
  const resultsContainerVS = document.querySelector(".vs_team");
  // Очищаем контейнер
  resultsContainer.innerHTML = "";
  resultsContainerVS.innerHTML = "";

  // Добавляем обновленные результаты в контейнер
  yourTeam.forEach((prize) => {
    const slot = document.createElement("div");
    const slotVS = document.createElement("div");

    if (prize == 17) {
      slot.classList.add("character_slot");
      slot.innerHTML = `<img src="images/characters/${prize}.jpeg" alt="Result">`;
      resultsContainer.appendChild(slot);

      slotVS.classList.add("vs_slot");
      slotVS.innerHTML = `<img src="images/characters/${prize}.jpeg" alt="Result">`;
      resultsContainerVS.appendChild(slotVS);
    } else {
      slot.classList.add("character_slot");
      slot.innerHTML = `<img src="images/characters/${prize}.jpg" alt="Result">`;
      resultsContainer.appendChild(slot);

      slotVS.classList.add("vs_slot");
      slotVS.innerHTML = `<img src="images/characters/${prize}.jpg" alt="Result">`;
      resultsContainerVS.appendChild(slotVS);
    }
  });

  //тоже самое для противников
  if (switcher == true) {
    if (enemyTeam.length < enemyTeamLength) {
      enemyTeam.push(character.text); // Добавляем только текст для примера
      console.log(`Добавлено: ${character.text}. Текущий массив: `, enemyTeam);
    } else {
      console.log("Массив заполнен: ", enemyTeam);
    }

    // Находим контейнер для отображения результатов
    const enemyContainer = document.querySelector(".your_enemy");
    const enemyContainerVS = document.querySelector(".vs_enemy");
    // Очищаем контейнер
    enemyContainer.innerHTML = "";
    enemyContainerVS.innerHTML = "";
    // Добавляем обновленные результаты в контейнер
    enemyTeam.forEach((prize) => {
      const slot = document.createElement("div");
      const slotVS = document.createElement("div");

      slot.classList.add("character_slot");
      slot.innerHTML = `<img src="images/characters/${prize}.jpg" alt="Result">`;
      enemyContainer.appendChild(slot);

      slotVS.classList.add("vs_slot");
      slotVS.innerHTML = `<img src="images/characters/${prize}.jpg" alt="Result">`;
      enemyContainerVS.appendChild(slotVS);
    });
  }

  resultImage.classList.remove("hidden");
};

const startSpinning = () => {
  //проверка если второй массив заполнен то скрывает все элементы
  if (enemyTeam.length < enemyTeamLength) {
    // скрываем изображение
    resultImage.classList.add("hidden");
    // делаем кнопку недоступной для нажатия
    trigger.disabled = true;
    // задаём начальное вращение колеса
    rotation = Math.floor(Math.random() * 360 + spinertia(2000, 5000));
    // убираем прошлый приз
    prizeNodes.forEach((prize) => prize.classList.remove(selectedClass));
    // добавляем колесу класс is-spinning, с помощью которого реализуем нужную отрисовку
    wheel.classList.add(spinClass);
    // через CSS говорим секторам, как им повернуться
    spinner.style.setProperty("--rotate", rotation);
    image.style.setProperty("--rotate", rotation);
    // возвращаем язычок в горизонтальную позицию
    ticker.style.animation = "none";
    // запускаем анимацию вращения
    runTickerAnimation();
  } else {
    // Находим все элементы с классом main
    const mainElement = document.querySelectorAll('.main');
    // Скрываем их
    mainElement.forEach(element => {
      element.style.display = 'none';
    });

    document.querySelectorAll('.location_hidden').forEach(element => {
      element.classList.remove('location_hidden');
    });
  }

};

// отслеживаем нажатие на кнопку
trigger.addEventListener("click", startSpinning);
// отслеживаем нажатие на колесо
circle.addEventListener("click", startSpinning);

// отслеживаем, когда закончилась анимация вращения колеса
spinner.addEventListener("transitionend", () => {
  // останавливаем отрисовку вращения
  cancelAnimationFrame(tickerAnim);
  // получаем текущее значение поворота колеса
  rotation %= 360;
  // выбираем приз
  selectPrize();
  // убираем класс, который отвечает за вращение
  wheel.classList.remove(spinClass);
  // отправляем в CSS новое положение поворота колеса
  spinner.style.setProperty("--rotate", rotation);
  image.style.setProperty("--rotate", rotation);
  // делаем кнопку снова активной
  trigger.disabled = false;
});

// vs.addEventListener("click", () =>{
//   location.reload();
// })

// подготавливаем всё к первому запуску
setupWheel();


// ======================================== круг выбора локации ====================================
// ======================================== круг выбора локации ====================================
// ======================================== круг выбора локации ====================================


// надписи и цвета на секторах
const locations = [
  {
    text: "Ветер",
    color: "hsl(168, 100%, 50%)",
    img: "images/wind.jpg",
  },
  {
    text: "Земля",
    color: "hsl(30, 100%, 20%)",
    img: "images/earth.jpg",
  },
  {
    text: "Огонь",
    color: "hsl(27, 100%, 50%)",
    img: "images/fire.jpg",
  },
  {
    text: "Вода",
    color: "hsl(216, 100%, 50%)",
    img: "images/water.jpg",
  }
];

// создаём переменные для быстрого доступа ко всем объектам на странице — блоку в целом, колесу, кнопке и язычку
const location_wheel = document.querySelector(".location-wheel");
const location_spinner = location_wheel.querySelector(".location-spinner");
const location_trigger = location_wheel.querySelector(".btn-spin");
const location_ticker = location_wheel.querySelector(".ticker");
const location_span = document.getElementById('location-span')
const location_circle = document.querySelector(".location-spinner");

// на сколько секторов нарезаем круг
const location_prizeSlice = 360 / locations.length;
// на какое расстояние смещаем сектора друг относительно друга
const location_prizeOffset = Math.floor(180 / locations.length);
// прописываем CSS-классы, которые будем добавлять и убирать из стилей
const location_spinClass = "is-spinning";
const location_selectedClass = "selected";
// получаем все значения параметров стилей у секторов
const location_spinnerStyles = window.getComputedStyle(location_spinner);
const locationContainerVS = document.querySelector(".vs_block");


let bgNumber;

// переменная для анимации
let location_tickerAnim;
// угол вращения
let location_rotation = 0;
// текущий сектор
let location_currentSlice = 0;
// переменная для текстовых подписей
let location_prizeNodes;

// расставляем текст по секторам
const location_createPrizeNodes = () => {
  // обрабатываем каждую подпись
  locations.forEach(({ text, color, reaction }, i) => {
    // каждой из них назначаем свой угол поворота
    const location_rotation = ((location_prizeSlice * i) * -1) - location_prizeOffset;
    // добавляем код с размещением текста на страницу в конец блока spinner
    location_spinner.insertAdjacentHTML(
      "beforeend",
      // текст при этом уже оформлен нужными стилями
      `<li class="prize" data-reaction=${reaction} style="--rotate: ${location_rotation}deg">
        <span class="text">${text}</span>
      </li>`
    );
  });
};

// рисуем разноцветные секторы
const location_createConicGradient = () => {
  // устанавливаем нужное значение стиля у элемента spinner
  location_spinner.setAttribute(
    "style",
    `background: conic-gradient(
      from -90deg,
      ${locations
      // получаем цвет текущего сектора
      .map(({ color }, i) => `${color} 0 ${(100 / locations.length) * (locations.length - i)}%`)
      .reverse()
    }
    );`
  );
};

// создаём функцию, которая нарисует колесо в сборе
const location_setupWheel = () => {
  // сначала секторы
  location_createConicGradient();
  // потом текст
  location_createPrizeNodes();
  // а потом мы получим список всех призов на странице, чтобы работать с ними как с объектами
  location_prizeNodes = location_wheel.querySelectorAll(".prize");
};

// определяем количество оборотов, которое сделает наше колесо
const location_spinertia = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// функция запуска вращения с плавной остановкой
const location_runTickerAnimation = () => {
  // взяли код анимации отсюда: https://css-tricks.com/get-value-of-css-rotation-through-javascript/
  const values = location_spinnerStyles.transform.split("(")[1].split(")")[0].split(",");
  const a = values[0];
  const b = values[1];
  let rad = Math.atan2(b, a);

  if (rad < 0) rad += (2 * Math.PI);

  const angle = Math.round(rad * (180 / Math.PI));
  const slice = Math.floor(angle / location_prizeSlice);

  // анимация язычка, когда его задевает колесо при вращении
  // если появился новый сектор
  if (location_currentSlice !== slice) {
    // убираем анимацию язычка
    location_ticker.style.animation = "none";
    // и через 10 миллисекунд отменяем это, чтобы он вернулся в первоначальное положение
    setTimeout(() => location_ticker.style.animation = null, 10);
    // после того, как язычок прошёл сектор - делаем его текущим 
    location_currentSlice = slice;
  }
  // запускаем анимацию
  location_tickerAnim = requestAnimationFrame(location_runTickerAnimation);
};

// функция выбора призового сектора
const location_selectPrize = () => {
  const selected = Math.floor(location_rotation / location_prizeSlice);
  location_prizeNodes[selected].classList.add(location_selectedClass);

  bgNumber = selected;
};

const startLocationSpinning = () => {
  if (bgNumber != null) {
    const bgVS = locations[bgNumber].img
    // Находим все элементы с классом location
    const locationElement = document.querySelectorAll('.location');
    // Скрываем их
    locationElement.forEach(element => {
      element.style.display = 'none';
    });

    //добавляем фон соответственно числу
    locationContainerVS.setAttribute(
      "style",
      `background: url("${bgVS}") no-repeat;
      );`
    );

    document.querySelectorAll('.vs_hidden').forEach(element => {
      element.classList.remove('vs_hidden');
    });
  } else {
    // делаем её недоступной для нажатия
    location_trigger.disabled = true;
    // задаём начальное вращение колеса
    location_rotation = Math.floor(Math.random() * 360 + location_spinertia(2000, 5000));
    // убираем прошлый приз
    location_prizeNodes.forEach((prize) => prize.classList.remove(location_selectedClass));
    // добавляем колесу класс is-spinning, с помощью которого реализуем нужную отрисовку
    location_wheel.classList.add(location_spinClass);
    // через CSS говорим секторам, как им повернуться
    location_spinner.style.setProperty("--rotate", location_rotation);
    // возвращаем язычок в горизонтальную позицию
    location_ticker.style.animation = "none";
    // запускаем анимацию вращение
    location_runTickerAnimation();
  }
}

// отслеживаем нажатие на кнопку
location_trigger.addEventListener("click", startLocationSpinning);
// отслеживаем нажатие на кнопку
location_circle.addEventListener("click", startLocationSpinning);

// отслеживаем, когда закончилась анимация вращения колеса
location_spinner.addEventListener("transitionend", () => {
  // останавливаем отрисовку вращения
  cancelAnimationFrame(location_tickerAnim);
  // получаем текущее значение поворота колеса
  location_rotation %= 360;
  // выбираем приз
  location_selectPrize();
  // убираем класс, который отвечает за вращение
  location_wheel.classList.remove(location_spinClass);
  // отправляем в CSS новое положение поворота колеса
  location_spinner.style.setProperty("--rotate", location_rotation);
  // делаем кнопку снова активной
  location_trigger.disabled = false;
});


// подготавливаем всё к первому запуску
location_setupWheel();