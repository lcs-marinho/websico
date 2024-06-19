import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { EnqueteService } from 'src/shared/service/enquete.service';

@Component({
  selector: 'app-graph-interesse',
  standalone: true,
  imports: [CommonModule,NgxEchartsModule],
  templateUrl: './graph-interesse.component.html',
  styleUrls: ['./graph-interesse.component.scss']
})
export class GraphInteresseComponent {
  option: EChartsOption = {};

  constructor(private enqueteService: EnqueteService) {
    this.enqueteService.getInteresse().subscribe(it => {
      this.option = {
        title: {
          text: 'Interesse em particiar de um processo de avaliação',
          subtext: '',
          left: 'center'
        },
        xAxis: {
          type: 'category',
          data: [it.valueData[0],it.valueData[2]]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [it.countData[0],it.countData[2]],
            type: 'bar'
          }
        ]
      };
    })
  }
}
