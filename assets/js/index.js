const client3 = {
  fullName: "Ratushnyi Roman",
  clientLevel: "platinum",
};

const client2 = {
  fullName: "Ivanov Ivan",
  clientLevel: "pro",
};

const client1 = {
  fullName: "Petrov Petr",
  clientLevel: "basic",
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
    return cost - (cost * percent.discount) / 100;
  } else {
    return cost;
  }
}
