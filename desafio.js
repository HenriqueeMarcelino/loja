const products = [
    {
        images: {
            main: "https://cdn.awsli.com.br/800x800/1890/1890260/produto/164177288/871ef6045e.jpg",
            alt: "https://cdn.performa.ai/assets/teste/test-product.jpg"
        },
        discount: 20,
        name: "Shorts West Ham",
        price: 'R$ 200,00',
        installment: {
            quantity: "10x",
            value: "R$ 20,00"
        }
    },
    {
        images: {
            main: "https://cdn.awsli.com.br/800x800/1890/1890260/produto/151770072/1d8323da60.jpg",
            alt: "https://cdn.performa.ai/assets/teste/test-product.jpg"
        },
        discount: 10,
        name: "Shorts Universidad Católica",
        price: 'R$ 250,00',
        installment: {
            quantity: "10x",
            value: "R$ 25,00"
        }
    },
    {
        images: {
            main: "https://cdn.awsli.com.br/800x800/1890/1890260/produto/143213686/1087801c14.jpg",
            alt: "https://cdn.performa.ai/assets/teste/test-product.jpg"
        },
        discount: 25,
        name: "Shorts Liverpool 2",
        price: 'R$ 200,00',
        installment: {
            quantity: "10x",
            value: "R$ 20,00"
        }
    },
    {
        images: {
            main: "https://cdn.awsli.com.br/800x800/1890/1890260/produto/147607929/678f4da046.jpg",
            alt: "https://cdn.performa.ai/assets/teste/test-product.jpg"
        },
        discount: 40,
        name: "Regata NBA Philadelphia 76ers",
        price: 'R$ 150,00',
        installment: {
            quantity: "10x",
            value: "R$ 15,00"
        }
    }
];

products.forEach(function(product) {

    document.getElementById('produtos').innerHTML += `<div class="card"  style="width: 20rem;"><img id="imagem" class="card-img-top" src="${product.images.main}" alt="Card image cap"><div class="card-body"><h5 class="card-title">${product.name}</h5><b class="card-text">${product.price} </b><br><p><strong>${product.installment.quantity}</strong> de ${product.installment.value} sem juros.</p><button type="button" class="btn btn-outline-warning">Comprar</button></div>`

})
    