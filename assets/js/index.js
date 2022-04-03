const client3 = {
  fullName: "Ratushnyi Roman",
  clientLevel: "platinum",
  money: 150000,
};

const client2 = {
  fullName: "Ivanov Ivan",
  clientLevel: "pro",
  money: 120000,
};

const client1 = {
  fullName: "Petrov Petr",
  clientLevel: "basic",
  money: 14000,
};

const bank = {
  bankName: "PrivatBank",
  clientLevels: {
    basic: {
      discount: 5,
    },
    pro: {
      discount: 10,
    },
    platinum: {
      discount: 15,
    },
  },
};

const map = new Map();
map.set("basic", bank.clientLevels.basic);
map.set("pro", bank.clientLevels.pro);
map.set("platinum", bank.clientLevels.platinum);

function costCalculate(client, cost) {
  if (map.has(client.clientLevel)) {
    const percent = map.get(client.clientLevel);
    return (cost - (cost * percent.discount) / 100).toFixed(2);
  } else {
    return cost;
  }
}

function buy(client, cost) {
  if (client.money >= costCalculate(client, cost)) {
    client.money -= costCalculate(client, cost);
    return `Покупка успешна! На Вашем счету осталось ${client.money.toFixed(
      2
    )}`;
  } else {
    return `Ошибка! Вам не хватает ${Math.abs(
      client.money - costCalculate(client, cost)
    ).toFixed(2)} для покупки этого товара! =(`;
  }
}
