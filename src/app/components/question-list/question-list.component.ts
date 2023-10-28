import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent {
  chartData: any;

  constructor(private http: HttpClient,private authservice: AuthService) { }
  companyId!:any;
  ngOnInit(): void {
    const companyID = localStorage.getItem('companyId');
    if(companyID){
    this.authservice.companyReviewAnalysis(companyID).subscribe(data => {
      this.chartData = data;
      console.log(this.chartData)
      this.createChart();
    });
   
  }}

  createChart() {
    // Logic to create the chart using Chart.js
    const ctx = document.getElementById('lineChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['0','Positive', 'Negative ', 'Average '],
        datasets: [
          {
            label: 'Positive',
            data: [0,this.chartData.positive_review_count, 
            ],
            backgroundColor: 'blue',
            borderColor: 'blue',
            borderWidth: 1
          },
          {
            label: 'Negative',
            data: [0,0,this.chartData.negative_review_count
              
            ],
            backgroundColor: 'red',
            borderColor: 'red',
            borderWidth: 1
          },
          {
            label: 'Average',
            data: [0,0,0,this.chartData.average_review_count
              
            ],
            backgroundColor: 'yellow',
            borderColor: 'yellow',
            borderWidth: 1
          }
        ]
        
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
