export class filament {
  public id: number;
  public name: string;
  public color: string;
  public material: string;
  public status: string;

  constructor(
    id: number,
    name: string,
    color: string,
    material: string,
    status: string
  ) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.material = material;
    this.status = status;
  }
}
