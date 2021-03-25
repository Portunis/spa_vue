<template>
    <header>
        <div class="menu">
            <ul>
                <li><router-link to="/todos">Todos</router-link></li>
                <li> <router-link to="/calculator">Calculator</router-link></li>
            </ul>
        </div>
    </header>
<div>
    <h1>Todo application</h1>
    <hr>

    <router-view />
</div>

</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
    header {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
    }
    .menu {
        flex-grow: 1;
    }
    .menu li {
        margin-right: 20px;
    }
    .menu li:last-child {
        margin-right: 0;
    }
    .menu a {
        padding: 8px 10px;
    }
    .menu .active {
        color: #fff;
        background-color: #ff3d00;
        border-radius: 8px;
    }
    .menu ul {
        display: flex;
        flex-flow: row nowrap;
        margin: 2px 0 0;
        padding: 0;
        font-size: 16px;
        line-height: 18px;
        list-style: none;
    }
    .menu a,
    .menu .active {
        display: block;
        padding: 8px 10px;
        text-transform: uppercase;
        letter-spacing: .27em;
    }
    .menu a {
        color: #000;
        text-decoration: none;
    }
</style>
