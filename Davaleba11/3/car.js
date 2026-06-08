const fs = require("fs").promises;
const path = require("path");

const CARS_FILE = path.join(__dirname, "cars.json");

async function readCars() {
  try {
    const data = await fs.readFile(CARS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function saveCars(cars) {
  await fs.writeFile(CARS_FILE, JSON.stringify(cars), "utf-8");
}

async function addCar(carName, carReleaseDate, carColor) {
  if (!carName || !carReleaseDate || !carColor) {
    return;
  }

  const cars = await readCars();

  const newCar = {
    carName,
    carReleaseDate,
    carColor,
  };

  cars.push(newCar);
  await saveCars(cars);
}

async function showCars(filterParam) {
  const cars = await readCars();

  if (cars.length === 0) {
    return;
  }

  let filteredCars = cars;
  if (filterParam) {
    filteredCars = cars.filter(
      (car) =>
        car.carReleaseDate === filterParam ||
        car.carColor.toLowerCase() === filterParam.toLowerCase(),
    );
  }

  if (filteredCars.length === 0) {
    return;
  }

  filteredCars.forEach((car) => {
    console.log(car);
  });
}

const [, , arg1, arg2, arg3] = process.argv;

async function main() {
  if (arg1 === "show") {
    await showCars(arg2);
  } else {
    await addCar(arg1, arg2, arg3);
  }
}

main();
