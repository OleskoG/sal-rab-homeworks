// Задание 4.1. Вывод карточек товаров
// Аргументом функции является JSON

    // Преобразуйте строку json, переданную как аргумент функции,
    // в объект с помощью функции JSON.parse(json)
    // и запишите в переменную data
    // Верните как результат функции свойство products объекта data

function parseProducts(json) {
let data = JSON.parse(json);
let products = data.products;
return products;

}
function renderProductsCards(json) {
  clearProducts ();
     let products = parseProducts (json);
     let length = (products.length);
        for (let i=0; i < length; i++) 
          {
            addProduct (products[i]);
          }
}
