<template>
  <div>
    <h1>Crypto Prices</h1>
    <table>
      <thead>
        <tr>
          <th @click="sort('name')">Coin Name</th>
          <th @click="sort('symbol')">Coin Symbol</th>
          <th @click="sort('current_price')">Price</th>
          <th @click="sort('price_change_percentage_1h_in_currency')">
            1h Move
          </th>
          <th @click="sort('market_cap')">Market Cap</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="crypto in sortedCryptoData" :key="crypto.id">
          <td>{{ crypto.name }}</td>
          <td>{{ crypto.symbol }}</td>
          <td>{{ crypto.current_price }}</td>
          <td>{{ crypto.price_change_percentage_1h_in_currency }}%</td>
          <td>{{ crypto.market_cap }}</td>
        </tr>
      </tbody>
    </table>
    <router-link to="/contact">Go to Page 2</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cryptoData: [],
      sortBy: null,
      sortDirection: "asc",
    };
  },
  computed: {
    sortedCryptoData() {
      const data = [...this.cryptoData];
      if (this.sortBy) {
        data.sort((a, b) => {
          const modifier = this.sortDirection === "asc" ? 1 : -1;
          return modifier * (a[this.sortBy] - b[this.sortBy]);
        });
      }
      return data;
    },
  },
  methods: {
    async fetchData() {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 10,
            page: 1,
          },
        }
      );
      this.cryptoData = response.data;
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

<style scoped>
h1 {
  color: #ffff;
}
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
  color: #ffff;
}

th {
  cursor: pointer;
}


router-link {
  display: block;
  margin-top: 20px;
}
</style>
