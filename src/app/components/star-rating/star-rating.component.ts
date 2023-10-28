import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  chartData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://109.123.241.127:3000/review/all/analysis').subscribe(data => {
      
      this.chartData = data;
      console.log(this.chartData)
      this.createChart();
    });
   
  }

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
