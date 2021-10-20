// Задание 4.1. Вывод карточек товаров
// Аргументом функции является JSON

    // Преобразуйте строку json, переданную как аргумент функции,
    // в объект с помощью функции JSON.parse(json)
    // и запишите в переменную data
    // Верните как результат функции свойство products объекта data

function parseProducts(json) {
}

//clearProducts ();

function renderProductsCards(json) {
  //clearProducts ();
     let products = parseProducts (json);
     let length = (products.length);
        for (let i=0; i < 5; i++) 
          {
            addProduct (products[i]);
          }
}
