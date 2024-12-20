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
    span.textContent = 'Ваша команда';
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

  console.log("change to app.js")
  const script = document.createElement("script");
  script.src = "js/app.js";
  document.body.appendChild(script);
}

// подготавливаем всё к первому запуску
array_setupWheel();