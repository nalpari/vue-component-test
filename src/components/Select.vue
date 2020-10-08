<template>
  <div>
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            :items="items"
            item-text="codeName"
            item-value="codeValue"
            label="CODE"
            outlined
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Select",
  data: () => ({
    // items: [],
  }),
  computed: {
    ...mapState({
      items: (state) => state.select.items,
    }),
  },
};
</script>
