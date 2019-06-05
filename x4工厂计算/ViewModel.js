(function(){
	"use strict";

	if(!window.factoryCalculator){
		window.factoryCalculator={};
	}
	window.factoryCalculator.viewModel={
		factoryData:window.factoryCalculator.factoryModel.GetFactoryData(),
		productListO:window.factoryCalculator.factoryModel.GetProductListO(),
		materialLIstO:window.factoryCalculator.factoryModel.GetMaterialListO(),
		factoryListO:window.factoryCalculator.factoryModel.GetFactoryListO
	};
	
})();

