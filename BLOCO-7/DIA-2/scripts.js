const order = {
	name: 'Rafael Andrade',
	phoneNumber: '11-98763-1416',
	address: {
		street: 'Rua das Flores',
		number: '389',
		apartment: '701',
	},
	order: {
		pizza: {
			muzzarella: {
				amount: 1,
				price: 20,
			},
			calabresa: {
				amount: 1,
				price: 15,
			},
		},
		drinks: {
			coke: {
				type: 'Coca-Cola Zero',
				price: 10,
				amount: 1,
			},
		},
		delivery: {
			deliveryPerson: 'Ana Silveira',
			price: 5,
		},
	},
	payment: {
		total: 50,
	},
};

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
	order.name = 'Luiz Silva';

	return `Olá ${order.name}, o total do seu pedido de ${Object.keys(
		order.order.pizza)} e ${Object.values(order.order.drinks.coke)[0]
	} é R$ ${order.payment.total},00.`;
};

console.log(orderModifier(order));
