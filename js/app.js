(function(){
	var app = angular.module('gemStore', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems= [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'new',
		canPurchase: true,
		soldOut: true
	},
	{
		name: "Pentagonal Gem",
		price: 5.95,
		description: 'valuable',
		canPurchase: false,
		soldOut: false
	},
	{
		name: 'Ruby',
		price: 9.95,
		description: 'refurbished',
		canPurchase: true,
		soldOut: false
	}
	];
})();

