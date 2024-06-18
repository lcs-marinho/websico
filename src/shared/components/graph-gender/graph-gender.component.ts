import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EChartsOption } from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';


@Component({
  selector: 'app-graph-gender',
  standalone: true,
  imports: [CommonModule,NgxEchartsModule],
  templateUrl: './graph-gender.component.html',
  styleUrls: ['./graph-gender.component.scss']
})
export class GraphGenderComponent {
  option: EChartsOption  = {
    title: {
      text: 'Gênero',
      subtext: '',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '70%',
        data: [
          { value: 1048, name: 'Masculino' },
          { value: 735, name: 'Feminino' },
          { value: 580, name: 'Não respondeu' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  ngOnInit() {
     
  }
}
