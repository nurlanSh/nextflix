import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }

    baseUrl = "https://api.themoviedb.org/3/";
    apikey = "57e687d66136bac0335b01a02af8c1d2";

    //bannerapi
    bannerApiData():Observable<any>{
      return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apikey}`)
    }

    //trendingmovieapi
    trendingMovieApiData():Observable<any>{
      return this.http.get(`${this.baseUrl}trending/movie/day?api_key=${this.apikey}`);
    }
    
    //searchmovie
    getSearchMovie(data:any):Observable<any>{
      console.log(data,'movie#')
      return this.http.get(`${this.baseUrl}search/movie?api_key=${this.apikey}&query=${data.movieName}`)
    }

    //moviedaetails
    getMovieDetails(data: any):Observable<any>{
      return this.http.get(`${this.baseUrl}movie/${data}?api_key=${this.apikey}&language=en-US`);
    }

    //movievideo
    getMovieVideo(data:any):Observable<any>{
      return this.http.get(`${this.baseUrl}movie/${data}/videos?api_key=${this.apikey}&language=en-US`);
    }

    //moviecast
    getMovieCast(data:any):Observable<any>{
      return this.http.get(`${this.baseUrl}movie/${data}/credits?api_key=${this.apikey}&language=en-US`);
    }


    
    //action
    fetchActionMovies():Observable<any>{
      return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
    }

    //adventure
    fetchAdventureMovies():Observable<any>{
      return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
    }

    //animation
    fetchAnimationMovies():Observable<any>{
      return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
    }

    //comedy
    fetchComedyMovies():Observable<any>{
      return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
    }

    //documentary
    fetchDocumentaryMovies():Observable<any>{
      return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
    }

    //sci-fi
    fetchSciFiMovies():Observable<any>{
      return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
    }

    //thriller
    fetchThrillerMovies():Observable<any>{
      return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
    }

}
