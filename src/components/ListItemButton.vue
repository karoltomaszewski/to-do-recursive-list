<template>
    <button>
        <slot>

        </slot>
    </button>
</template>

<style scoped>
button {
    background: #181818;
    color: #ccc;
    border-radius: 4px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    transition: 0.5s;
    margin-left: 8px;
    width: 24px;
}

button:hover {
    background: #222;
}
</style>