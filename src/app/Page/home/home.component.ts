// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { VideogameService } from 'src/app/videogame.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videoGames: any[] = [];
  filteredGames: any[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private videoGameService:VideogameService ) {}

  ngOnInit(): void {
    this.videoGameService.getVideoGames()
      .subscribe({
        next: (response: { data: any[]; }) => {
          this.videoGames = response.data;
          this.filteredGames = this.videoGames;
          this.loading = false;
          this.error = null;
        },
        error: (error: any) => {
          console.error('Error fetching video games:', error);
          this.loading = false;
          this.error = 'An error occurred while fetching video games';
        }
      });
      console.log(this.filteredGames)
  }

  filterGames(searchTerm: string): void {
    if (!searchTerm) {
      this.filteredGames = this.videoGames;
    } else {
      this.filteredGames = this.videoGames.filter(game =>
        game.attributes.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
}
