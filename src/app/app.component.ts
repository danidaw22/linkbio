import { Component } from '@angular/core';
import { faDiscord, faGit, faGithub, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


title = "Mi link bio"
darkMode = false;

icDark = faSun

myRedes = [
  {name:"twitch", image: "twitch.svg", enlace:"https://www.twitch.tv/dannylm22", icon:faTwitch},
  {name:"github", image: "github.svg", enlace:"https://github.com/danidaw22",icon:faGithub},
  {name:"discord", image: "discord.svg", enlace:"https://discord.gg/K7hgCYQc",icon:faDiscord},
  {name:"twitter", image: "twitter.svg", enlace:"https://twitter.com/DanielLandete",icon:faTwitter}
]

changeMode(data: any){

  this.darkMode = !this.darkMode;

  if(this.darkMode){
    data.src="assets/images/light.png"
    this.icDark = faMoon
  }else{
    data.src="assets/images/dark-light.svg"
    this.icDark = faSun
  }
}

}
