import { bootstrapApplication } from '@angular/platform-browser';
import { MiniChatComponent } from './app/mini-chat/mini-chat.component';

bootstrapApplication(MiniChatComponent)
  .catch(err => console.error(err));
