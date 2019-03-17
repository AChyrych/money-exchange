// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	let arr = [50, 25, 10, 5, 1];
	let exchange ={
		'H': 0,
		'Q': 0,
		'D': 0,
		'N': 0,
		'P': 0
	};
	var i = 0;
	if (currency < 10001 && currency > 0) {
		for ( var key in exchange) {
			for ( ; i < arr.length; i ++) {
				let r = parseInt(currency/arr[i]);
				currency = (currency - r*arr[i]);
				if( r == 0) {
					i++;
					delete exchange[key];
					break;
				} else {
					exchange[key] = r;
					i++;
					break;
				} 
			}
		}
	} else {
		for (key in exchange){
			delete exchange[key];
		} if (currency > 10000) {
		exchange.error = 'You are rich, my friend! We don\'t have so much coins for exchange';
		return exchange;
	}else {
			return exchange;
		}
	}
	return exchange;
}
