Rails.application.routes.draw do
  get 'welcome/index'
  root 'welcome#index'
  resources :user
  resources :posts
  resources :likes
  resources :dislike
  post 'user/authUser', to: 'user#authUser'
  get 'fetch-posts', to: 'posts#fetch_posts'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
