let objectToJson = () => {

let dragon = { name: "Toothless", race: "Night Fury", island: "Berk" };
let objJson = JSON.stringify(dragon);

return objJson;
};

export default objectToJson;