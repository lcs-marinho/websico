import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnqueteService } from 'src/shared/service/enquete.service';
import { EChartsOption } from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-graph-psychology-form',
  standalone: true,
  imports: [CommonModule,NgxEchartsModule],
  templateUrl: './graph-psychology-form.component.html',
  styleUrls: ['./graph-psychology-form.component.scss']
})
export class GraphPsychologyFormComponent {

  option: EChartsOption = {};

  constructor(private enqueteService: EnqueteService) {
    this.enqueteService.getPsychologyForm().subscribe(it => {
      this.option = {
        title: {
          text: 'Conhecimento sobre avaliação psicológica',
          subtext: '',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '15%',
          left: 'center'
        },
        series: [
          {
            name: 'Info',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '70%'],
            // adjust the start and end angle
            startAngle: 180,
            endAngle: 360,
            data: [
              { value: it.countData[0], name: it.valueData[0] },
              { value: it.countData[1], name: it.valueData[1] }
            ]
          }
        ]
      };
    })

  }


}
