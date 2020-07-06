import { Component, OnInit } from '@angular/core';
import { TraitementService } from '../traitement.service'; 
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  LineChart=[];
  BarChart=[];
  PieChart=[];

  constructor(private trait : TraitementService) { }

  getGraphs() {
    this.trait.getGraphs().subscribe(
      () => {
        console.log("Infos du graphe passées !");
      },
      error => {
        console.log(error);
      }
    )
  }
  ngOnInit(): void {
    this.getGraphs();
    this.BarChart = new Chart('barChart', {
      type: 'bar',
    data: {
    labels: ["Non traité", "positif", "négatif"],
    datasets: [{
        label: 'Nombre',
        data: [this.trait.getNonTraite() ,this.trait.getPositif() , this.trait.getNegatif()],
        backgroundColor: [
          'rgba(240, 195, 0)',
          'rgba(127, 221, 76)',
          'rgba(212, 115, 212)',
            // 'rgba(255, 99, 132, 0.2)',
            // 'rgba(54, 162, 235, 0.2)',
            //  'rgba(255, 206, 86, 0.2)',

        ],
        borderColor: [
          'rgba(173, 79, 9)',
          'rgba(86, 130, 3)',
          'rgba(128, 0, 128)',
            // 'rgba(255,99,132,1)',
            // 'rgba(54, 162, 235, 1)',
            // 'rgba(255, 206, 86, 1)',

        ],
        borderWidth: 1
    }]
    },
    options: {
    title:{
        text:"Bar Chart",
        display:true
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
    }
    });

    // pie chart:
    this.PieChart = new Chart('pieChart', {
      type: 'pie',
    data: {
    labels: ["Non traité", "positif", "négatif"],
    datasets: [{
        label: '# of Votes',
        data: [this.trait.getNonTraite() ,this.trait.getPositif() , this.trait.getNegatif()],

        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',

        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',

        ],
        borderWidth: 1
    }]
    },
    options: {
    title:{
        text:"Bar Chart",
        display:true
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
    }
    });
  }

}
