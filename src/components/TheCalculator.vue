<script setup>
    import ProgressBar from './ProgressBar.vue';
    import {ref, computed} from 'vue';

    const bmiRanges = [
        {
            min: 0,
            max: 16,
            name: 'Underweight (Severe thinness)',
            color: '#082E79'
        },
        {
            min: 16,
            max: 17,
            name: 'Underweight (Moderate thinness)',
            color: '#4169E1',
        },
        {
            min: 17,
            max: 18.5,
            name: 'Underweight (Mild thinness)',
            color: '#ACE1AF'
        },
        {
            min: 18.5,
            max: 25,
            name: 'Normal range',
            color: '#CDEBA7'
        },
        {
            min: 25,
            max: 30,
            name: 'Overweight (Pre-obese)',
            color: '#FFFF99'
        },
        {
            min: 30,
            max: 35,
            name: 'Obese (Class I)',
            color: '#FDE456'
        },
        {
            min: 35,
            max: 40,
            name: 'Obese (Class II)',
            color: '#CF2929'
        }, 
        {
            min: 40,
            max: Infinity,
            name: 'Obese (Class III)',
            color: '#801818'
        }];

    const height = ref(null);
    const weight = ref(null);

    const bmi = computed(() => ((height.value > 0 && weight.value > 0) ? (parseFloat(weight.value) / Math.pow(parseInt(height.value) / 100, 2)).toFixed(1) : null));
    const currentBmiRange = computed(() => (bmi.value !== null ? bmiRanges.find(el => bmi.value >= el.min && bmi.value < el.max) : null));
</script>


<template>
    <div class="calculator">
        <h1 class="green">BMI Calculator</h1>

        <input placeholder="Your height (cm)" type="number" step="1"  min="1" required v-model="height"> <br>
        <input placeholder="Your weight (kg)" type="number" step="0.1" min="1" required v-model="weight">

       <ProgressBar :bmi="bmi" :bmiRanges="bmiRanges" />

        <div v-if="bmi !== null && currentBmiRange !== null">
            <span :style="{color: currentBmiRange.color, fontWeight: 'bold'}"> {{ bmi }} </span> {{ currentBmiRange.name }} 
        </div>
    </div>
</template>

<style scoped>
.calculator {
    margin: auto;
    padding: 10%;
    border: solid 1px grey;
    border-radius: 16px;
    max-width: 520px;
    height: 400px;
}

input {
    padding: 6px;
    margin-top: 15px;
    border-radius: 6px;
    border: none;
    width: 100%;
}

@media only screen and (min-width: 1024px) {
  .calculator {
    padding: 100px;
  }
}
</style>