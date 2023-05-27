// Composables
import { createRouter, createWebHistory } from 'vue-router'
import AcessoLogin from '@/views/acesso/AcessoLogin.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/loja/Loja.vue'),
    children: [
      {
        path: '',
        name: 'Loja',
        component: () => import('@/views/loja/Loja.vue'),
      },
    ],
  },
  {
    path: '/acesso',
    component: () => import('@/layouts/acesso/Acesso.vue'),
    children: [
      {
        path: 'login',
        name: 'AcessoLogin',
        component: AcessoLogin,
      },
      {
        path: 'cadastro',
        name: 'AcessoCadastro',
        component: () => import('@/views/acesso/AcessoCadastro.vue'),
      },
      {
        path: 'resetsenha',
        name: 'AcessoSenha',
        component: () => import('@/views/acesso/AcessoSenha.vue'),
      },
    ],
  },
  {
    path: '/sistema',
    component: () => import('@/layouts/system/System.vue'),
    children: [
      {
        path: 'meusprodutos',
        name: 'MeusProdutos',
        component: () => import('@/views/sistema/MeusProdutos.vue'),
      },
      {
        path: 'vendas',
        name: 'Vendas',
        component: () => import('@/views/sistema/Vendas.vue'),
      },
      {
        path: 'perfis',
        name: 'Perfis',
        component: () => import('@/views/sistema/Perfis.vue'),
      },
      {
        path: 'usuarios',
        name: 'Usuarios',
        component: () => import('@/views/sistema/Usuarios.vue'),
      },
      {
        path: 'producao',
        name: 'Producao',
        component: () => import('@/views/sistema/Producao.vue'),
      },
      {
        path: 'insumos',
        name: 'Insumos',
        component: () => import('@/views/sistema/Insumos.vue'),
      },
      {
        path: 'produtos',
        name: 'Produtos',
        component: () => import('@/views/sistema/Produtos.vue'),
      },
      {
        path: 'configuracoes',
        name: 'Configuracoes',
        component: () => import('@/views/sistema/Configuracoes.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
