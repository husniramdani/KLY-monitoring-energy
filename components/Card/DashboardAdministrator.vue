<template>
    <v-card elevation="1" class="mx-auto" outlined height="100%">
        <v-row class="pa-8">
            <v-col cols="12">
                <p class="text-h6 text-md-h6 font-weight-medium mb-0">
                    {{content.quantity}} {{content.title}}
                </p>
                {{content.body}}
            </v-col>
            <v-col cols="12" class="mt-3">
                <v-btn
                color="primary"
                elevation="2"
                class="text-capitalize bg-blue-400"
                :to="content.url"
                >Info Lebih</v-btn>
            </v-col>
        </v-row>
    </v-card>
</template>
<script>
export default {
    name: "CardDashboardAdministrator",
    props: {
        content:{},
        checkFunction:{
            type: Function,
            required: false,
        }
    },
    methods:{
        moreInformartion(){
            this.checkFunction()
        }
    }
};
</script>