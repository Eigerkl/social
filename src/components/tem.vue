<template>
    <div>
      <ul>
        <li>01</li>
        <li>02</li>
        <li>03</li>
        <li>04</li>
        <li>05</li>
        <li>06</li>
        <li>07</li>
        <li>08</li>
        <li>09</li>
        <li>10</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "tem",
        data(){
          return{

          }
        },
        mounted(){
            this.getData();
        },
        methods:{
          getData(){
            var data = Mock.mock({
              'list|1-10': [{
                'id|+1': 1
              }]
            });
            $('<pre>').text(JSON.stringify(data, null, 4))
              .appendTo('body')
          }
        }
    }
</script>

<style scoped>

</style>
