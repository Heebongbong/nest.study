import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update.movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  getMovies() {
    return this.moviesService.getAll();
  }
  @Get('/search')
  search(@Query('year') year: number) {
    return {
      year: year,
    };
  }
  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.moviesService.getOne(id);
  }
  @Post('')
  create(@Body() movieData: CreateMovieDto): boolean {
    return this.moviesService.create(movieData);
  }
  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.moviesService.deleteOne(id);
  }
  @Patch('/:id')
  path(@Param('id') id: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.modify(id, updateData);
  }
}
