var count = (()=> {
	var counter = {};

	return v=> counter[v] = (counter[v] || 0) + 1;

})();

const c =()=> count() - 1;

export default c;