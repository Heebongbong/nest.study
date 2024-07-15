import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMovieDto {
  @IsOptional()
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
}
