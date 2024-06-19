import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EChartsOption } from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { EnqueteService } from 'src/shared/service/enquete.service';

@Component({
  selector: 'app-graph-psychology-process',
  standalone: true,
  imports: [CommonModule,NgxEchartsModule],
  templateUrl: './graph-psychology-process.component.html',
  styleUrls: ['./graph-psychology-process.component.scss']
})
export class GraphPsychologyProcessComponent {
  option: EChartsOption = {};

  constructor(private enqueteService: EnqueteService) {
    this.enqueteService.getPsychologyProcess().subscribe(it => {
      this.option = {
        title: {
          text: 'Participação em processe de avaliação psicológica',
          subtext: '',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '8%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 12,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: it.countData[0] + it.countData[2], name: 'Não participou' },
              { value: it.countData[1], name: 'Participaram' },
            ]
          }
        ]
      };
      
      
    })
  }
}
