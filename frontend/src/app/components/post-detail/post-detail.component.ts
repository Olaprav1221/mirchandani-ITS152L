import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit, OnDestroy {
  private routeSub: Subscription = new Subscription();
  private id: number = 0;

  post?: Post;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = +params['id'];  // string → number
      this.initData();
    });
  }

  initData(): void {
    this.http.get<Post>(`https://localhost:7268/api/post/${this.id}`).subscribe({
      next: (data: Post) => {
        this.post = data;
        console.log('✅ Loaded post:', this.post);
      },
      error: (err) => {
        console.error('❌ Error fetching post:', err);
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
