<script>
export default {
    computed: {
         bmiProgress() {
                const progress = [];

                for (let i = 0; i < this.bmiRanges.length; i++) {
                    if (this.bmiRanges[i].max === Infinity) {
                        progress.push(this.bmi >= this.bmiRanges[i].min ? 100 : 0);
                        continue;
                    }

                    if (this.bmi >= this.bmiRanges[i].min) {
                        if (this.bmi < this.bmiRanges[i].max) {
                            progress.push(((this.bmi - this.bmiRanges[i].min) / (this.bmiRanges[i].max - this.bmiRanges[i].min)) * 100);
                        } else {
                            progress.push(100);
                        }
                    } else {
                        progress.push(0);
                    }
                }

                return progress;
            }
    },
    props: {
        bmi: {
            required: true,
        },
        bmiRanges: {
            required: true,
        }
    }
}
</script>

<template>
     <div class="bmi-bar">
        <div class="bmi-bar-category" v-for="(bmiRange, i) in bmiRanges" :key="i">
            <div class="progress" :style="{width: this.bmiProgress[i] + '%', background: bmiRange.color}" :title="bmiRange.name"></div>
        </div>
     </div>
</template>

<style scoped>
.bmi-bar {
    display: flex;
    margin: 15px 0;
    width: 317px;
}

.bmi-bar-category + .bmi-bar-category {
    margin-left: 3px;
}

.bmi-bar-category {
    height: 5px;
    flex: 1;
    border-radius: 3px;
}

.progress {
    height: 5px;
}
</style>