<script>
export default {
    props: {
        active: {
            type: Boolean
        }
    }
}
</script>

<template>
    <div class="custom-checkbox">
        <input type="checkbox" class="checkbox">
        <div :class="{background: true, active: active}"></div>
    </div>
</template>

<style scoped>
    .custom-checkbox {
        position: relative;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 8px;
        cursor: pointer;
    }

    .checkbox {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .background {
        width: 100%;
        height: 100%;
        background: white;
    }

    .active {
        background: hsla(160, 100%, 37%, 1);
    }
</style>