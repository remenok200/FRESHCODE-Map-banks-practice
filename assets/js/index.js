const client3 = {
  fullName: "Ratushnyi Roman",
  bankName: "PrivatBank",
  money: 150000,
  clientLevel: "platinum",
};

const client2 = {
  fullName: "Ivanov Ivan",
  bankName: "Industrial Bank",
  money: 120000,
  clientLevel: "hard",
};

const client1 = {
  fullName: "Petrov Petr",
  bankName: "OschadBank",
  money: 14000,
  clientLevel: "simple",
};

const PrivatBank = {
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

const IndustrialBank = {
  bankName: "Industrial Bank",
  clientLevels: {
    light: {
      discount: 3,
    },
    medium: {
      discount: 5,
    },
    hard: {
      discount: 6,
    },
  },
};

const Oschadbank = {
  bankName: "Oschadbank",
  clientLevels: {
    simple: {
      discount: 4,
    },
    advanced: {
      discount: 8,
    },
    maximum: {
      discount: 12,
    },
  },
};

const PrivatBankMap = new Map();
PrivatBankMap.set("basic", PrivatBank.clientLevels.basic);
PrivatBankMap.set("pro", PrivatBank.clientLevels.pro);
PrivatBankMap.set("platinum", PrivatBank.clientLevels.platinum);

const IndustrialBankMap = new Map();
IndustrialBankMap.set("light", IndustrialBank.clientLevels.light);
IndustrialBankMap.set("medium", IndustrialBank.clientLevels.medium);
IndustrialBankMap.set("hard", IndustrialBank.clientLevels.hard);

const OschadBankMap = new Map();
OschadBankMap.set("simple", Oschadbank.clientLevels.simple);
OschadBankMap.set("advanced", Oschadbank.clientLevels.advanced);
OschadBankMap.set("maximum", Oschadbank.clientLevels.maximum);

const Banks = new Map();
Banks.set("PrivatBank", PrivatBankMap);
Banks.set("Industrial Bank", IndustrialBankMap);
Banks.set("OschadBank", OschadBankMap);

function costCalculate(client, cost) {
  if (Banks.has(client.bankName)) {
    const bankName = Banks.get(client.bankName);
    const percent = bankName.get(client.clientLevel);
    return (cost - (cost * percent.discount) / 100).toFixed(2);
  } else {
    throw new Error(
      "Такого банка не сущетсвует. Есть вероятность использования поддельной карты!"
    );
  }
  //   if (map.has(client.clientLevel)) {
  //     const percent = map.get(client.clientLevel);
  //     return (cost - (cost * percent.discount) / 100).toFixed(2);
  //   } else {
  //     return cost;
  //   }
}

function buy(client, cost) {
  try {
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
  } catch (e) {
    return e;
  }
}
