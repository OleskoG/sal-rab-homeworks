function calcShipping(sum, min, shipping, delvry) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

       // Задание №2.1. Рассчитать доставку
      // создайте переменную shippingSum

    let shippingSum = delvry; // стоимость доставки конкретного заказа

      // если productsSum равно 0,
      // то shippingSum присвоить значение 0

    if (productsSum == 0)
    {
        shippingSum = 0;
    }
    // если productsSum Больше или равна freeShippingMinSum,
    // то shippingSum присвоить значение 0
           if (productsSum >= freeShippingMinSum)
           {
               shippingSum = 0;
           }
    // если productsSum больше 0   и меньше freeShippingMinSum,
    // то shippingSum присвоить значение shippingPrice
                   if ((productsSum > 0) && (productsSum < freeShippingMinSum))  
                    {
                      shippingSum = shippingPrice;
                    }
    // Конец решения задания №2.1.

    return shippingSum;
}