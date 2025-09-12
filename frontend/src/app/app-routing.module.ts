import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';  // ✅ import here

const routes: Routes = [
  { path: '', component: ListPostsComponent },
  { path: 'posts/:id', component: PostDetailComponent }   // ✅ use the class name
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
