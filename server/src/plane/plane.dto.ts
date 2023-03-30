export class PlaneDto {
  id: string;
  name: string;
  airlineId: string;
}

export class CreatePlaneDto extends PlaneDto {
  airlineId: string;
}
