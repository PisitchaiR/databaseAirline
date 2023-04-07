export class PlaneDto {
  id: string;
  name: string;
  seat: number;
  airlineId: string;
}

export class UpdatePlane {
  name?: string;
  seat?: number;
}
