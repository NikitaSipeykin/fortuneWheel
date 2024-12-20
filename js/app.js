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
    img: "images/characters/17.jpg",
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
  // Очищаем контейнер
  resultsContainer.innerHTML = "";

  // Добавляем обновленные результаты в контейнер
  yourTeam.forEach((prize) => {
    const slot = document.createElement("div");
    slot.classList.add("character_slot");

    slot.innerHTML = `<img src="images/characters/${prize}.jpg" alt="Result">`;
    resultsContainer.appendChild(slot);
  });

  //тоже самое для противников
  if (switcher == true) {
    if (enemyTeam.length < enemyTeamLength) {
      enemyTeam.push(character.text); // Добавляем только текст для примера
      console.log(`Добавлено: ${character.text}. Текущий массив: `, enemyTeam);
    } else {
      console.log("Массив заполнен: ", enemyTeam);
      trigger.disabled = true;
    }

    // Находим контейнер для отображения результатов
    const enemyContainer = document.querySelector(".your_enemy");
    // Очищаем контейнер
    enemyContainer.innerHTML = "";
    // Добавляем обновленные результаты в контейнер
    enemyTeam.forEach((prize) => {
      const slot = document.createElement("div");
      slot.classList.add("character_slot");
      slot.innerHTML = `<img src="images/characters/${prize}.jpg" alt="Result">`;
      enemyContainer.appendChild(slot);
    });
  }

  resultImage.classList.remove("hidden");
};

const startSpinning = () => {
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

// подготавливаем всё к первому запуску
setupWheel();