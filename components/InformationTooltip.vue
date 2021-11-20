<template>
    <v-tooltip color="primary" bottom max-width="250px">
        <template v-slot:activator="{ on, attrs }">
            <v-icon
            v-bind="attrs"
            v-on="on"
            class="black--text subtitle-1"
            >mdi-information-outline
            </v-icon>
        </template>
        <span class="text-center">{{text}}</span>
    </v-tooltip>
</template>
<script>
export default {
  name: "InformationTooltip",
  props: {
    text: { type: String, required: true, default: "Tooltip" },
  }
};
</script>