import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


title = "Mi link bio"
darkMode = false;

myRedes = [
  {name:"twitch", image: "twitch.svg", enlace:"https://www.twitch.tv/dannylm22"},
  {name:"github", image: "github.svg", enlace:"https://github.com/danidaw22"},
  {name:"discord", image: "discord.svg", enlace:"https://discord.gg/K7hgCYQc"},
  {name:"twitter", image: "twitter.svg", enlace:"https://twitter.com/DanielLandete"}
]

changeMode(data: any){

  this.darkMode = !this.darkMode;

  if(this.darkMode){
    data.src="assets/images/light.png"
  }else{
    data.src="assets/images/dark-light.svg"
  }
}

}
