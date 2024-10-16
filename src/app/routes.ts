import { Routes } from '@angular/router';



export const routes: Routes = [
  {
    path: '',
  },
  {
    path: 'chat',
    loadComponent: () =>
      import('./mini-chat/mini-chat.component').then(
        (c) => c.MiniChatComponent
      ) // Carregando o chat de forma lazy
  },
  {
    path: '**',
    redirectTo: '' // Redireciona para home caso a rota não exista
  }
];
