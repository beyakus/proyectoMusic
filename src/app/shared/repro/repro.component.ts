import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repro',
  templateUrl: './repro.component.html',
  styleUrls: ['./repro.component.scss'],
})
export class ReproComponent implements OnInit {
  /**
   * Add or remove tracklist
   */
  private playsList = [
    '../../../assets/audio/audio1.mp3',
    '../../../assets/audio/audio2.mp3',
    '../../../assets/audio/audio3.mp3',
    '../../../assets/audio/audio4.mp3',
  ];
  private indexTrack = 0;
  play: boolean;
  constructor() {}

  ngOnInit() {
    // this.getPlay();
  }

  private getAudio() {
    const audio = document.getElementById('audio') as HTMLAudioElement;
    return audio;
  }

  private getPlay() {
    const audio = this.getAudio();
    this.play = true;
    audio.src = this.playsList[this.indexTrack];
    audio.play();
  }

  private setPlay(index: number) {
    const audio = this.getAudio();
    audio.pause();
    audio.src = this.playsList[index];
    audio.play();
  }

  music() {
    const audio = this.getAudio();
    this.play = !this.play;
    this.play ? audio.play() : audio.pause();
  }

  next() {
    if (this.indexTrack < this.playsList.length - 1) {
      this.indexTrack++;
      this.setPlay(this.indexTrack);
    }
  }

  previous() {
    if (this.indexTrack > 0) {
      this.indexTrack--;
      this.setPlay(this.indexTrack);
    }
  }
}
