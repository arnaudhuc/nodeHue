require("dotenv").config();
const axios = require("axios");

const ids = [6, 7];
const controlLight = async (
  lightId: number,
  isOn: boolean,
  hue?: number,
  saturation?: number,
  brightness?: number
) => {
  console.log(
    `http://${process.env.HUE_ADRESS}/api/${process.env.HUE_USER}/lights/${lightId}/state`
  );
  try {
    return await axios.put(
      `http://${process.env.HUE_ADRESS}/api/${process.env.HUE_USER}/lights/${lightId}/state`,
      {
        on: isOn,
        ...(hue && { hue: hue }),
        ...(saturation && { sat: saturation }),
        ...(brightness && { bri: brightness }),
      }
    );
  } catch (err) {
    console.error(err);
  }
};

const controlAllLight = (on: boolean) => {
  ids.forEach((id) => controlLight(id, on));
};

const setRandomColor = async () => {
  ids.forEach((id) => {
    const hue = Math.floor(Math.random() * 65535) + 1;
    controlLight(id, true, hue);
  });
};
setRandomColor();
