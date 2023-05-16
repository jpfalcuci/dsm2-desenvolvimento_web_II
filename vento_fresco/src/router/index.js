// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/loja/Loja.vue'),
    children: [
      {
        path: '',
        name: 'Loja',
        component: () => import('@/views/Loja.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/layouts/acesso/Acesso.vue'),
    children: [
      {
        path: '',
        name: 'AcessoLogin',
        component: () => import('@/views/AcessoLogin.vue'),
      },
    ],
  },
  {
    path: '/cadastro',
    component: () => import('@/layouts/acesso/Acesso.vue'),
    children: [
      {
        path: '',
        name: 'AcessoCadastro',
        component: () => import('@/views/AcessoCadastro.vue'),
      },
    ],
  },
  {
    path: '/resetsenha',
    component: () => import('@/layouts/acesso/Acesso.vue'),
    children: [
      {
        path: '',
        name: 'AcessoSenha',
        component: () => import('@/views/AcessoSenha.vue'),
      },
    ],
  },
  {
    path: '/meusprodutos',
    component: () => import('@/layouts/system/System.vue'),
    children: [
      {
        path: '',
        name: 'MeusProdutos',
        component: () => import('@/views/MeusProdutos.vue'),
      },
    ],
  },
  {
    path: '/vendas',
    component: () => import('@/layouts/system/System.vue'),
    children: [
      {
        path: '',
        name: 'Vendas',
        component: () => import('@/views/Vendas.vue'),
      },
    ],
  },
  {
    path: '/perfis',
    component: () => import('@/layouts/system/System.vue'),
    children: [
      {
        path: '',
        name: 'Perfis',
        component: () => import('@/views/Perfis.vue'),
      },
    ],
  },
  {
    path: '/usuarios',
    component: () => import('@/layouts/system/System.vue'),
    children: [
      {
        path: '',
        name: 'Usuarios',
        component: () => import('@/views/Usuarios.vue'),
      },
    ],
  },
  {
    path: '/producao',
    component: () => import('@/layouts/system/System.vue'),
    children: [
      {
        path: '',
        name: 'Producao',
        component: () => import('@/views/Producao.vue'),
      },
    ],
  },
  {
    path: '/insumos',
    component: () => import('@/layouts/system/System.vue'),
    children: [
      {
        path: '',
        name: 'Insumos',
        component: () => import('@/views/Insumos.vue'),
      },
    ],
  },
  {
    path: '/produtos',
    component: () => import('@/layouts/system/System.vue'),
    children: [
      {
        path: '',
        name: 'Produtos',
        component: () => import('@/views/Produtos.vue'),
      },
    ],
  },
  {
    path: '/configuracoes',
    component: () => import('@/layouts/system/System.vue'),
    children: [
      {
        path: '',
        name: 'Configuracoes',
        component: () => import('@/views/Configuracoes.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
