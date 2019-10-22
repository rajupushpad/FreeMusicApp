Rails.application.routes.draw do
  get 'welcome/index'
  root 'welcome#index'
  resources :user
  resources :posts
  resources :likes
  post 'user/authUser', to: 'user#authUser'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
