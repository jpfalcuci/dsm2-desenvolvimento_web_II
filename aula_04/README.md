# V-bind e V-On

**V-bind e V-On**Fácil aprendizado: Uma das principais vantagens do Vue.js é a facilidade de aprendizado. O framework tem uma sintaxe simples e intuitiva, e é fácil de integrar com outras bibliotecas e frameworks.

## **v-bind**

**`v-bind`** é usado para atribuir valores dinamicamente a atributos HTML. Por exemplo, você pode usar **`v-bind`** para atualizar a cor de fundo de um elemento dinamicamente com base em um valor de dados.

```
<template>
  <div :style="{ backgroundColor: corDeFundo }">
    Este é um exemplo de v-bind!
  </div>
</template>

<script>
export default {
  data() {
    return {
      corDeFundo: 'red'
    };
  }
};
</script>
```

Neste exemplo, a cor de fundo do **div** é definida como **red** inicialmente. No entanto, a cor de fundo pode ser atualizada dinamicamente com base em um valor de dados usando **v-bind**. A diretiva **:style** é usada para vincular o valor da propriedade **corDeFundo** à cor de fundo do elemento.

## v-on

```
<template>
  <button v-on:click="incrementarContador">
    Clique aqui para incrementar o contador!
  </button>
  <p>O contador é: {{ contador }}</p>
</template>

<script>
export default {
  data() {
    return {
      contador: 0
    };
  },
  methods: {
    incrementarContador() {
      this.contador++;
    }
  }
};
</script>
```

Neste exemplo, um botão é criado e a diretiva **v-on:click** é usada para lidar com o evento de clique no botão. Quando o botão é clicado, a função **incrementarContador** é chamada e o valor da propriedade **contador** é incrementado. O valor atual da propriedade **contador** é exibido abaixo do botão.

É importante lembrar que, em vez de usar a sintaxe **v-on:click**, você também pode usar a sintaxe abreviada **@click**. Por exemplo:

```
<button @click="incrementarContador">
  Clique aqui para incrementar o contador!
</button>
```

Esta sintaxe é equivalente à sintaxe **v-on:click**.

Em resumo, **v-bind** é usado para vincular valores de dados a atributos HTML e **v-on** é usado para lidar com eventos do usuário. Essas diretivas são fundamentais para criar aplicativos Vue.js interativos e dinâmicos.

## **Vamos criar o nosso projeto!?**

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <link rel="stylesheet" href="style.css" />
    <title>Utilizando o V-bind</title>
  </head>
  <body>
    <div id="app">
      <h1 v-once>Trabalhando com {{ titulo }}</h1>
      <p>{{titulo}} {{alterarTitulo()}}</p>
      <a :href="link">Google</a>
      <h2>Utilizando o HTML puro</h2>

      <p>{{htmlPuro}}</p>
      <p v-html="htmlPuro">{{htmlPuro}}</p>
      <h2>Utilizando evento</h2>
      <p>Contador: {{ count }}</p>
      <button class="button-bee" @click="contador">Soma + 1</button>
    </div>
  </body>
</html>

<script>
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        link: "http://google.com",
        count: 0,
        titulo: "links",
        htmlPuro: '<a href="http://google.com">Google </a>',
      };
    },
    methods: {
      alterarTitulo: function () {
        this.titulo = "Sou um novo titulo";
      },
      contador: function () {
        this.count = this.count + 1;
      },
    },
  }).mount("#app");
</script>
```

Este código é uma página HTML com um pouco de JavaScript embutido que usa o Vue.js para criar interatividade na página. O Vue.js é um framework JavaScript para criar interfaces de usuário reativas.

A página HTML tem um cabeçalho e um corpo. O cabeçalho inclui alguns meta dados e o título da página. Há também um link para um arquivo CSS que é referenciado na linha 7.

O corpo da página contém um elemento div com um id "app". Dentro do elemento div há vários elementos HTML que são renderizados pelo Vue.js.

O Vue.js é incluído na linha 6 usando um script externo que é carregado a partir da web usando uma URL. Na linha 35, o Vue.js é usado para criar um aplicativo Vue e montá-lo no elemento div com o id "app".

O objeto passado para o método createApp contém a lógica do aplicativo. Ele tem um método data() que retorna um objeto com quatro propriedades: link, count, titulo e htmlPuro. Essas propriedades são usadas pelo Vue.js para renderizar a página HTML.

Há também dois métodos no objeto: alterarTitulo() e contador(). O método alterarTitulo() é usado para alterar o valor da propriedade titulo quando é chamado. O método contador() é usado para incrementar o valor da propriedade count quando é chamado.

Na página HTML, há vários exemplos de como usar as propriedades e métodos definidos no objeto Vue. Por exemplo, a propriedade titulo é exibida em vários lugares na página HTML usando interpolação de texto e o método alterarTitulo() é chamado quando um dos elementos de parágrafo é clicado.

Há também um link HTML que usa uma diretiva v-bind para definir o valor do atributo href dinamicamente. Um exemplo de interpolação de HTML é mostrado, onde a propriedade htmlPuro é usada em um parágrafo e também com a diretiva v-html para renderizar o HTML real na página.

Finalmente, há um botão que usa a diretiva v-on para adicionar um evento de clique e chamar o método contador() quando o botão é clicado. O valor da propriedade count é exibido em outro elemento de parágrafo.
