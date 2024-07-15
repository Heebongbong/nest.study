import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movies.entities';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];
  getAll(): Movie[] {
    return this.movies;
  }
  getOne(id: number): Movie {
    const m = this.movies.find(movie => movie.id === +id);
    if (!m) {
      throw new NotFoundException('not Found Error');
    }
    return m;
  }
  deleteOne(id: number): boolean {
    this.movies = this.movies.filter(movie => movie.id !== +id);
    return true;
  }
  create(movieData: any) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
    return true;
  }
  modify(id: number, updateData: any) {
    const one = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({
      ...one, ...updateData,
    });
    return true;
  }
}
