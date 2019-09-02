<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["data", "label"],
  data() {
    return {
      gradient: null
    };
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
    this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
    this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");
    this.renderChart(
      {
        datasets: [
          {
            label: this.label + " Growth",
            borderColor: "#FC2525",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "white",
            backgroundColor: this.gradient,
            data: this.data
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                format: "YYYY-MM-DD",
                tooltipFormat: "ll"
              },
              scaleLabel: {
                labelString: "Date"
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: `${this.label}s`
              }
            }
          ]
        }
      }
    );
  }
};
</script>

<style scoped>
</style>
