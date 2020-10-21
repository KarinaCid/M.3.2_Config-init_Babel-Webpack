const one = () => {

const numbers = [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415];

const numbersAmplify = numbers.map(x => parseInt(x) * 4);
//console.log(numbersAmplify);


const filterEight = numbersAmplify.filter(number => number >= 8);
//console.log(filterEight);
return filterEight;

}

export default one;
