<template>
  <div>
    <h1>Sharenet Spot Prices</h1>
    <table>
      <thead>
        <tr>
          <th @click="sort('fullName')">Full Name</th>
          <th @click="sort('price')">Price</th>
          <th @click="sort('move')">Move</th>
          <th @click="sort('pmove')">Percentage Move</th>
          <th @click="sort('datetime')">Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="spot in sortedSpots" :key="spot.code">
          <td>{{ spot.fullName }}</td>
          <td>{{ spot.price }}</td>
          <td>{{ spot.move }}</td>
          <td>{{ spot.pmove }}%</td>
          <td>{{ spot.datetime }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      spotData: [],
      sortBy: null,
      sortDirection: "asc",
    };
  },
  computed: {
    sortedCryptoData() {
      const data = [...this.spotData];
      if (this.sortBy) {
        data.sort((a, b) => {
          const modifier = this.sortDirection === "asc" ? 1 : -1;
          return (
            modifier *
            (a[this.sortBy] - b[this.sortBy])
          );
        });
      }
      return data;
    },
  },
  methods: {
    async fetchData() {
      try {
        const spots = await axios.get("https://api.sharenet.co.za/api/v1/px2/spots", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Request-Methods": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Expose-Headers": "Authorization"
          }
        });
      console.log(spots); 
      this.spotData = response.spots;
      } catch (error) {
        console.log('error');
      }
      
    },
    sort(column) {
      if (this.sortBy === column) {
        this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
      } else {
        this.sortBy = column;
        this.sortDirection = "asc";
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

th {
  cursor: pointer;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

router-link {
  display: block;
  margin-top: 20px;
}
</style>
