const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// console.log(Object.values(order.address));

const customerInfo = (order) => {
  return `Olá ${
    Object.values(Object.entries(order.order)[2][1])[0]
  }, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${
    Object.values(order.address)[0]
  }, Nº: ${Object.values(order.address)[1]}, AP ${
    Object.values(order.address)[2]
  }.`;
};

console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
};

orderModifier(order);
