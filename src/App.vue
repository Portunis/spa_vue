<template>
        <div class="nav-bar">
            <div class="menu">
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/todos">Todos</router-link></li>
                    <li> <router-link to="/calculator">Calculator</router-link></li>
                    <li> <router-link to="/drops">Drop</router-link></li>

                </ul>
            </div>
        </div>
        <div>
            <h1>Portunis application</h1>
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

    body {
        background-color: #f2f2f2;
        margin: 0px;
        font-family: tahoma,serif;
        color: #282828;
    }
    h1 {
        font-size: 50px;
    }

    h3 {
        font-size: 25px;
    }
    label {
        font-size: 20px;
        margin-bottom: 5px;
    }


    .nav-bar {
        background: linear-gradient(-90deg, #84cf6a, #16c0b0);
        height: 60px;
        margin-bottom: 25px;
        -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
        -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);
    }

    p {
        font-size: 22px;
    }
    select {
        height: 40px;
        font-size: 20px;
        background-color: white;
        cursor: pointer;
    }
    ul {
        list-style-type: none;
    }

</style>
