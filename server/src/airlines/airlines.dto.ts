export class AirlinesDto {
  id: string;
  nameTh: string;
  nameEn: string;
  phone: string;
}

export class CreateAirline extends AirlinesDto {
  ownerId: string;
}
