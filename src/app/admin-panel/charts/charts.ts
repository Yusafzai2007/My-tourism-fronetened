// import { Component, OnInit } from '@angular/core';
// import { Chart, registerables } from 'chart.js';
// import { Tourism } from '../../services/tourism';

// @Component({
//   selector: 'app-charts',
//   templateUrl: './charts.html',
//   styleUrls: ['./charts.css'],
// })
// export class Charts implements OnInit {
//   constructor(private service: Tourism) {}

//   paymentdata: any[] = [];
//   dataamount: number[] = [];
//   datayear: string[] = [];

//   ngOnInit(): void {
//     Chart.register(...registerables);

//     this.service.paymentget().subscribe((data: any) => {
//       this.paymentdata = data.tourism.orders;
//       console.log('Payment Data:', this.paymentdata);

//       // ✅ Group total amount by year
//       const groupedData: { [year: string]: number } = {};

//       this.paymentdata.forEach((item) => {
//         const year = new Date(item.order_date).getFullYear().toString();
//         const total = Number(item.total) || 0;

//         if (groupedData[year]) {
//           groupedData[year] += total;
//         } else {
//           groupedData[year] = total;
//         }
//       });

//       // ✅ Convert grouped data to arrays for chart
//       this.datayear = Object.keys(groupedData);
//       this.dataamount = Object.values(groupedData);

//       console.log('Grouped Years:', this.datayear);
//       console.log('Grouped Totals:', this.dataamount);

//       // ✅ Show both charts
//       this.showchart();
//       this.showchart1();
//     });
//   }

//   // 📊 Bar Chart
//   showchart() {
//     const ctx = document.getElementById('myChart') as HTMLCanvasElement;
//     if (!ctx) return;

//     new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: this.datayear,
//         datasets: [
//           {
//             label: 'Total Payment Amount',
//             data: this.dataamount,
//             backgroundColor: [
//               'rgba(86, 178, 240, 0.6)',
//               'rgba(7, 75, 131, 0.6)',
//               'rgba(8, 0, 26, 0.6)',
//               'rgba(153, 102, 255, 0.6)',
//               'rgba(255, 159, 64, 0.6)',
//               'rgba(31, 3, 44, 0.12)',
//             ],
//             borderColor: 'rgba(54, 162, 235, 1)',
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           legend: { display: true, position: 'top' },
//           title: { display: true, text: 'Tourism Payment by Year (Bar Chart)' },
//         },
//         scales: {
//           y: { beginAtZero: true, title: { display: true, text: 'Total Amount ($)' } },
//           x: { title: { display: true, text: 'Year' } },
//         },
//       },
//     });
//   }

//   // 🥧 Pie Chart
//   showchart1() {
//     const ctx = document.getElementById('piechart') as HTMLCanvasElement;
//     if (!ctx) return;

//     new Chart(ctx, {
//       type: 'pie',
//       data: {
//         labels: this.datayear,
//         datasets: [
//           {
//             label: 'Total Payment Amount',
//             data: this.dataamount,
//             backgroundColor: [
//               'rgba(86, 178, 240, 0.6)',
//               'rgba(7, 75, 131, 0.6)',
//               'rgba(8, 0, 26, 0.6)',
//               'rgba(153, 102, 255, 0.6)',
//               'rgba(255, 159, 64, 0.6)',
//               'rgba(31, 3, 44, 0.12)',
//             ],
//             borderColor: 'white',
//             borderWidth: 2,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           legend: { display: true, position: 'bottom' },
//           title: { display: true, text: 'Tourism Payment Distribution (Pie Chart)' },
//         },
//       },
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Tourism } from '../../services/tourism';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.html',
  styleUrls: ['./charts.css'],
})
export class Charts implements OnInit {
  constructor(private service: Tourism) {}

  paymentdata: any[] = [];
  dataamount: number[] = [];
  datayear: string[] = [];

  ngOnInit(): void {
    Chart.register(...registerables);

    this.service.getAllPayments().subscribe((data: any) => {
      this.paymentdata = data.tourism.orders;
      console.log('Payment Data:', this.paymentdata);

      // ✅ Group total amount by year
      const groupedData: { [year: string]: number } = {};

      this.paymentdata.forEach((item) => {
        const year = new Date(item.order_date).getFullYear().toString();
        const total = Number(item.total) || 0;

        if (groupedData[year]) {
          groupedData[year] += total;
        } else {
          groupedData[year] = total;
        }
      });

      // ✅ Convert grouped data to arrays for chart
      this.datayear = Object.keys(groupedData);
      this.dataamount = Object.values(groupedData);

      console.log('Grouped Years:', this.datayear);
      console.log('Grouped Totals:', this.dataamount);

      // ✅ Show both charts
      this.showchart();
      this.showchart1();
    });
  }

  // 📊 Bar Chart
showchart() {
  const ctx = document.getElementById('myChart') as HTMLCanvasElement;
  if (!ctx) return;

  const chartCtx = ctx.getContext('2d');
  if (!chartCtx) return;

  // 🌈 Create a vertical gradient fill (shadow)
  const gradient = chartCtx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(54, 162, 235, 0.4)');  // Top color
  gradient.addColorStop(1, 'rgba(54, 162, 235, 0)');    // Transparent bottom

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: this.datayear,
      datasets: [
        {
          label: 'Total Payment Amount',
          data: this.dataamount,
          fill: true, // ✅ Enable area fill
          backgroundColor: gradient, // ✅ Gradient shadow
          borderColor: '#3b82f6', // Blue line
          borderWidth: 3,
          pointBackgroundColor: '#3b82f6',
          tension: 0.4, // ✅ Smooth curve
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(255,255,255,0.1)' },
        },
        x: {
          grid: { display: false },
        },
      },
    },
  });
}


  // 🥧 Pie Chart
  showchart1() {
    const ctx = document.getElementById('piechart') as HTMLCanvasElement;
    if (!ctx) return;

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: this.datayear,
        datasets: [
          {
            label: 'Total Payment Amount',
            data: this.dataamount,
            backgroundColor: [
              'rgba(86, 178, 240, 0.6)',
              'rgba(7, 75, 131, 0.6)',
              'rgba(8, 0, 26, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(31, 3, 44, 0.12)',
            ],
            borderColor: 'white',
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true, position: 'bottom' },
          title: { display: true, text: 'Tourism Payment Distribution (Pie Chart)' },
        },
      },
    });
  }
}
