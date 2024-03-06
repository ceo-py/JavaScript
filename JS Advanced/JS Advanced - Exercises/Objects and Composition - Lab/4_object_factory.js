function objectFactory(library, orders) {
    return orders.map(order => {
        let product = Object.assign({}, order.template);
        order.parts.forEach(part => {
            if (library[part]) {
                product[part] = library[part];
            }
        });
        return product;
    });
}