<template>
    <main class="flexbox">
        <Drop id="board-1">
        <div>
            <h2 style="color: #f3f3f3">Животные</h2>
            <Card id="card-1" draggable="true">
                <p>Cat</p>
            </Card>
            <Card id="card-5" draggable="true">
                <p>Dog</p>
            </Card>
            <Card id="card-6" draggable="true">
                <p>Fox</p>
            </Card>
        </div>

        </Drop>
        <Drop id="board-2">
            <div>
            <h2 style="color: #f3f3f3">Автомобили</h2>
            <Card id="card-2" draggable="true">
                <p>Audio</p>
            </Card>
            <Card id="card-3" draggable="true">
                <p>BWM</p>
            </Card>
            <Card id="card-4" draggable="true">
                <p>Toyota</p>
            </Card>
            </div>
        </Drop>
    </main>
</template>

<script>
  import Drop from '@/components/Drop'; //Компонент
  import Card from '@/components/Card'; //Компонент
  export default {
    name: "Drops",
    components: {
      Drop,
      Card
    }
  }
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
    body{
        background-color: #f3f3f3;
    }
    .flexbox{
        display: flex;
        justify-content: space-between;

        width: 100%;
        max-width: 768px;
        height: 100vh;

        overflow: hidden;

        margin: 0 auto;
        padding: 15px;
    }
    .flexbox .board{
        display: flex;
        flex-direction: column;

        width: 100%;
        max-width: 300px;

        background-color: #313131;

        padding: 15px;
    }

    .flexbox .board .card {
        padding: 15px 25px;
        background-color: #f3f3f3;

        cursor: pointer;
        margin-bottom: 15px;
    }
</style>
