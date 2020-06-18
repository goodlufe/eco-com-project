const database = {
  "filters": [
    {
      "name": "Абсолютные фильтры",
      "description": "Применяются в помещениях с самыми высокими требованиями к чистоте воздуха: в операционных залах, в лабораториях, в цехах пищевой и т. д. ",
      "url": "../img/filters/absolute-filter.jpeg"
    },
    {
      "name": "Высокотемпературные фильтры",
      "description": "Высокотемпературные фильтры предназначены для эффективного очищения воздуха в помещениях с высокой температурой воздуха, достигающей 250 градусов.",
      "url": "../img/filters/hightemp-filter.jpeg"
    },
    {
      "name": "Жидкостные фильтры",
      "description": "С помощью жидкостных фильтров осуществляется очистка сточных и промышленных вод от растворителей, нефтепродуктов, микроорганизмов, органических соединений, агрессивных химических веществ.",
      "url": "../img/filters/liquid-filter.jpeg"
    },
    {
      "name": "Картонные фильтры",
      "description": "Предназначены для очистки воздуха от тяжелых частиц загрязнений, например от аэрозоля краски (в том числе и водорастворимой).",
      "url": "../img/filters/cardboard-filter.jpeg"
    },
    {
      "name": "Кассетные фильтры",
      "description": "Кассетные фильтры получили очень широкое распространение в самых разных отраслях.",
      "url": "../img/filters/cassete-filter.jpeg"
    },
    {
      "name": "Компактные фильтры",
      "description": "Компактные фильтры широко применяют в качестве 2 и 3 ступени очистки в сложных фильтровальных системах. Поэтому их используют в разных помещениях – промышленных и общественных",
      "url": "../img/filters/compact-filter.jpeg"
    },
    {
      "name": "Панельные фильтры",
      "description": "Панельные фильтры являются эффективным решением для систем приточной вентиляции. Они используются в качестве первой ступени в многоступенчатом фильтрующем оборудовании, но иногда применяются автономно.",
      "url": "../img/filters/panel-filter.jpeg"
    },
    {
      "name": "Патронные фильтры",
      "description": "Преимушество патронных фильтров - высокая производительность. Картридж данной конструкции, в сравнении с рукавными фильтрами, способен производить воздушную очистку больших объемов.",
      "url": "../img/filters/patron-filter.jpeg"
    },
    {
      "name": "Рукавные фильтры",
      "description": "Одним из наиболее эффективных и универсальных видов пылегазоочистного оборудования являются промышленные рукавные фильтры. Они относятся к пылеулавливающим устройствам «сухого» типа ",
      "url": "../img/filters/sleeve-filter.jpeg"
    },
    {
      "name": "Рулонные фильтры",
      "description": "Для предварительной очистки воздуха в вентиляционных и кондиционирующих системах часто используют рулонные фильтры. Также применяются как первая ступень очистки в многоступенчатых системах.",
      "url": "../img/filters/roll-filter.jpeg"
    }
  ]
};

const createCard = (path, name, description) => {
  return `
  <li class="filter catalog__filter">
    <div class="filter__content-wrapper">
      <div class="filter__front">
        <img src="${path}" width="320" height="200" alt="${name}" class="filter__img">
        <h3 class="filter__name">
          <span>${name}</span>
        </h3>
      </div>

      <div class="filter__back">
        <p class="filter__description">
          <span>
            ${description}
          </span>
        </p>
      </div>

    </div>
  </li>
  `
}

const showMore = document.querySelector(".catalog__show-more");
const filtersList = document.querySelector(".catalog__list");

let filters = document.querySelectorAll(".filter");

const fillCard = (index) => {
  let img = filters[index].querySelector(".filter__img");
  let name = filters[index].querySelector(".filter__name");
  let description = filters[index].querySelector(".filter__description");

  let databaseAsset = database.filters[index];

  img.src = databaseAsset.url;
  name.textContent = databaseAsset.name;
  description.textContent = databaseAsset.description;
}

const generateCards = () => {
  let index = 0;

  filters.forEach(element => {
    fillCard(index);
    index++;
  });

  index = 0;
}

const showMoreCards = () => {
  let showedCards = filters.length - 1;
  let filtersLocal = database.filters;

  for (let i = showedCards; i < filtersLocal.length; i++) {
    filtersList.insertAdjacentHTML('beforeend', createCard(filtersLocal[i].url, filtersLocal[i].name, filtersLocal[i].description));

  }

  showMore.remove();
}

showMore.addEventListener('click', (evt) => {
  evt.preventDefault();
  showMoreCards();
});

generateCards();
