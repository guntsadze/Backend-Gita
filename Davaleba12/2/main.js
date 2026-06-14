#!/usr/bin/env node

import { Command } from "commander";
import axios from "axios";
import chalk from "chalk";

const program = new Command();

program
  .name("weather-cli")
  .description("CLI tool to check current weather in any city")
  .version("1.0.0");

program.argument("<cityName>", "ქალაქი").action(async (cityName) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;

  try {
    const response = await axios.get(url);
    const weatherData = response.data;

    const city = weatherData.name;
    const country = weatherData.sys.country;
    const temp = weatherData.main.temp;
    const desc = weatherData.weather[0].description;
    const humidity = weatherData.main.humidity;

    console.log(chalk.cyan.bold(city, country));
    console.log(chalk.green.bold(temp));
    console.log(chalk.magenta(desc));
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log(chalk.red.bold("ქალაქი ვერ მოიძებნა!"));
    } else {
      console.log(chalk.red.bold(error.message));
    }
  }
});

program.parse();
