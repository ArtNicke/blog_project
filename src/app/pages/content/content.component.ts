import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string="https://cinepop.com.br/wp-content/uploads/2019/11/tony-stark-696x391.jpg"
  contentTitle:string="Tony Stark Descobre Novo Potencial nas Joias do Infinito"
  contentDescription:string="Tony Stark, o lendário Homem de Ferro e gênio inventor, surpreendeu o mundo mais uma vez ao anunciar uma descoberta revolucionária relacionada às poderosas Joias do Infinito. Stark, conhecido por sua dedicação à tecnologia e inovação, revelou que desenvolveu uma tecnologia capaz de canalizar a energia das Joias do Infinito de forma segura e controlada."

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("Id"))

    )
  }

}
