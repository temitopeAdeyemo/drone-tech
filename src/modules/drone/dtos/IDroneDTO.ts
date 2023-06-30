export default interface IDroneDTO {
  serial_number: string;
  model: string;
  weight: string;
  battery_capacity: string;
  state: string;
  load_weight?: string;
  charging?: boolean;
}
