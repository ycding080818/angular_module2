(function () {
	'use strict';
	angular.module('ShoppingListCheckOff', [])
		.controller('ToBuyController', ToBuyController)
		.controller('AlreadyBoughtController', AlreadyBoughtController)
		.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController (ShoppingListCheckOffService) {
		var toBuy = this;
		toBuy.buyItems = ShoppingListCheckOffService.getItems("buy");
		toBuy.getBought = function (itemIndex, itemName, quantity) {
			ShoppingListCheckOffService.getBought(itemIndex, itemName, quantity);
		}
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController (ShoppingListCheckOffService) {
		var bought = this;
		bought.boughtItems = ShoppingListCheckOffService.getItems("bought");
	}

	function ShoppingListCheckOffService () {
		var service = this;
		var buyItems = [{
		    name: "Milk",
		    quantity: "2"
		  },
		  {
		    name: "Donuts",
		    quantity: "200"
		  },
		  {
		    name: "Cookies",
		    quantity: "300"
		  },
		  {
		    name: "Chocolate",
		    quantity: "5"
		  }];

		  var boughtItems = [];
		  service.getItems = function (itemCatagory) {
		  	return itemCatagory == "buy" ? buyItems : boughtItems;
		  };

		  service.getBought = function (itemIndex, itemName, quantity) {
		  	buyItems.splice(itemIndex, 1);
		  	var item = {
		  		name: itemName, 
		  		quantity: quantity
		  	};
		  	boughtItems.push(item);
		  }
	}

})();