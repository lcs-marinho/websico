import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EChartsOption } from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { EnqueteService } from 'src/shared/service/enquete.service';


@Component({
  selector: 'app-graph-gender',
  standalone: true,
  imports: [CommonModule,NgxEchartsModule],
  templateUrl: './graph-gender.component.html',
  styleUrls: ['./graph-gender.component.scss']
})
export class GraphGenderComponent {
  gender: string[] = [];
  count: number[] = [];

  constructor(private enqueteService: EnqueteService) {
    this.enqueteService.getGender().subscribe(it => {
      this.gender = it.valueData;
      this.count = it.countData;

      this.option = {
        title: {
          text: 'Gênero',
          subtext: '',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '70%',
            data: [
              { value: this.count[1], name: 'Masculino' },
              { value: this.count[2], name: 'Feminino' },
              { value: this.count[0], name: 'Não respondeu' },
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
    })
  }

  option: EChartsOption = {};
  
  ngOnInit() {
  }
}
