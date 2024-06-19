import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { EnqueteService } from 'src/shared/service/enquete.service';

@Component({
  selector: 'app-graph-state',
  standalone: true,
  imports: [CommonModule,NgxEchartsModule],
  templateUrl: './graph-state.component.html',
  styleUrls: ['./graph-state.component.scss']
})
export class GraphStateComponent {

  constructor(private enqueteService: EnqueteService) {
    this.enqueteService.getState().subscribe(it => {
      this.option = {
        xAxis: {
          type: 'category',
          data: it.valueData
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: it.countData,
            type: 'bar'
          }
        ]
      };
    })
  }

  option: EChartsOption = {};
}
