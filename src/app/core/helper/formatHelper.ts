import { Injectable } from '@angular/core';
import { ChartData } from 'src/app/core/model/goal-report.model';

@Injectable()
export class FormatHelper {

  formatSimpleChartData(chartArray: any[]) {
    if (chartArray === null) {
      return;
    } else {
      const tempArray: ChartData[] = [];
      for (let x = 0; x < chartArray.length; x++) {
        tempArray.push(new ChartData(chartArray[x].Name, chartArray[x].Value ));
      }
      return tempArray;
    }
  }
}
