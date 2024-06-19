import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EChartsOption } from 'echarts';
import { EnqueteService } from 'src/shared/service/enquete.service';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-graph-age',
  standalone: true,
  imports: [CommonModule,NgxEchartsModule],
templateUrl: './graph-age.component.html',
  styleUrls: ['./graph-age.component.scss']
})
export class GraphAgeComponent {
  option: EChartsOption = {};

  constructor(private enqueteService: EnqueteService) {
    this.enqueteService.getAge().subscribe(it => {
      this.option = {
        title: {
          text: 'Faixa Etária',
          subtext: '',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Info',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            padAngle: 5,
            itemStyle: {
              borderRadius: 10,
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 25,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: it.countData[0], name: it.valueData[0] },
              { value: it.countData[1], name: it.valueData[1] },
              { value: it.countData[2], name: it.valueData[2] },
              { value: it.countData[3], name: it.valueData[3] },
              { value: it.countData[4], name: it.valueData[4] },
              { value: it.countData[5], name: it.valueData[5] }
            ]
          }
        ]
      };
      
      
    })
  }
}
