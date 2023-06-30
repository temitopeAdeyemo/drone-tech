"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const DroneRepository_1 = __importDefault(require("../../modules/drone/models/repositories/DroneRepository"));
const dronenRepository = new DroneRepository_1.default();
const drones = [
    {
        serial_number: '82333372233',
        weight: '189',
        model: 'Middleweight',
        battery_capacity: '100',
        state: 'IDLE',
    },
    {
        serial_number: '8229572233',
        weight: '350',
        model: 'Middleweight',
        battery_capacity: '100',
        state: 'IDLE',
    },
    {
        serial_number: '82283742233',
        weight: '350',
        model: 'Lightweight',
        battery_capacity: '100',
        state: 'IDLE',
    },
    {
        serial_number: '828399737233',
        weight: '459',
        model: 'Middleweight',
        battery_capacity: '100',
        state: 'IDLE',
    },
    {
        serial_number: '822894742233',
        weight: '350',
        battery_capacity: '100',
        state: 'IDLE',
        model: 'Lightweight',
    },
    {
        serial_number: '8229346748233',
        weight: '350',
        battery_capacity: '100',
        state: 'IDLE',
        model: 'Lightweight',
    },
    {
        serial_number: '822933893233',
        weight: '60',
        model: 'Middleweight',
        battery_capacity: '100',
        state: 'IDLE',
    },
    {
        serial_number: '82239380233',
        weight: '283',
        model: 'Cruiserweight',
        battery_capacity: '100',
        state: 'IDLE',
    },
    {
        serial_number: '82293735233',
        weight: '243',
        model: 'Lightweight',
        battery_capacity: '100',
        state: 'IDLE',
    },
    {
        serial_number: '82383733233',
        weight: '250',
        model: 'Cruiserweight',
        battery_capacity: '100',
        state: 'IDLE',
    },
    {
        serial_number: '826363672823643',
        weight: '300',
        model: 'Heavyweight',
        battery_capacity: '100',
        state: 'IDLE',
    },
];
const seed = async () => {
    drones.forEach(async (drone) => {
        console.log(drones);
        await dronenRepository.create(drone).catch((err) => console.log(err));
    });
    console.log(`seeded drones data successfully`);
};
exports.seed = seed;
