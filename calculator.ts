import { takeInput } from "./input.ts";

const watts: number = parseFloat(await takeInput("Enter W of device"));
const time: number = parseFloat(
  await takeInput("Enter the time that you intend to use the device for")
);
const efficiency: number = parseFloat(
  await takeInput("Enter the efficiency of the inverter")
);
const voltage: number = parseFloat(
  await takeInput(
    "Enter the total voltage of the batteries that power your inverter"
  )
);
const whDevice: number = watts * time;
const whBattery: number = whDevice / efficiency;
console.log(`Wh of device: ${whDevice}`);
console.log(`Wh of battery: ${whBattery}`);
console.log(`Ah of battery: ${whBattery / voltage}`);
