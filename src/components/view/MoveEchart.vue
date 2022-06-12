<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const ROOT_PATH =
    'https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples'
type EChartsOption = echarts.EChartsOption

const main = ref<HTMLElement | null>(null)
let option: EChartsOption

// $.get(
//     ROOT_PATH + '/data/asset/data/life-expectancy-table.json',
//     function (_rawData) {
//         run(_rawData)
//     }
// )

onMounted(() => {
    const myChart = echarts.init(main.value!)
    run(null)
    option && myChart.setOption(option)

    function run(_rawData: any) {
        // var countries = ['Australia', 'Canada', 'China', 'Cuba', 'Finland', 'France', 'Germany', 'Iceland', 'India', 'Japan', 'North Korea', 'South Korea', 'New Zealand', 'Norway', 'Poland', 'Russia', 'Turkey', 'United Kingdom', 'United States']
        const countries = [
            'Finland',
            'France',
            'Germany',
            'Iceland',
            'Norway',
            'Poland',
            'Russia',
            'United Kingdom'
        ]

        const datasetWithFilters: echarts.DatasetComponentOption[] = []
        const seriesList: echarts.SeriesOption[] = []

        echarts.util.each(countries, function (country) {
            const datasetId = 'dataset_' + country
            datasetWithFilters.push({
                id: datasetId,
                fromDatasetId: 'dataset_raw',
                transform: {
                    type: 'filter',
                    config: {
                        and: [
                            { dimension: 'Year', gte: 1950 },
                            { dimension: 'Country', '=': country }
                        ]
                    }
                }
            })

            seriesList.push({
                type: 'line',
                datasetId: datasetId,
                showSymbol: false,
                name: country,
                endLabel: {
                    show: true,
                    formatter: function (params: any) {
                        return params.value[3] + ': ' + params.value[0]
                    }
                },
                labelLayout: {
                    moveOverlap: 'shiftY'
                },
                emphasis: {
                    focus: 'series'
                },
                encode: {
                    x: 'Year',
                    y: 'Income',
                    label: ['Country', 'Income'],
                    itemName: 'Year',
                    tooltip: ['Income']
                }
            })
        })

        option = {
            animationDuration: 10000,
            dataset: [
                {
                id: 'dataset_raw',
                source: _rawData
                },
                ...datasetWithFilters
            ],
            title: {
                text: 'Income of Germany and France since 1950'
            },
            tooltip: {
                order: 'valueDesc',
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                nameLocation: 'middle'
            },
            yAxis: {
                name: 'Income'
            },
            grid: {
                right: 140
            },
            series: seriesList
        }

        myChart.setOption(option);
    }
})
</script>

<template>
    <div class="move-echart">
        <div class="main-container" ref="main">

        </div>
    </div>
</template>

<style scoped lang="scss">
    .move-echart {
        .main-container {
            height: 600px;
        }  
    }
</style>