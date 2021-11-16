function sendRequest(name, phone, address [street, house, entrance, floor, flat], goods, sum) {
    let data = {client: '', order {address: '', sum: ''}, goods: ''}; 
}

    let countOfGoods = goods.length;

    for (let i = 0; i < countOfGoods; i += 1) {
        data.goods.push ({title: goods[i].title, count: goods[i].count});
        
    }

    data.order.address = "ул. ${street}, дом ${house}, подъезд ${entrance}, этаж ${floor}, кв. ${flat}" ;
    data.order.sum = sum;

    data.client = '${name} ${phone}';

    let jsonData = JSON.stringify({data: data}); 

    return jsonData;
