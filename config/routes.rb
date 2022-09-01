Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
   get "/api/shares/random", :to => "api/shares#random"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [ :create ]
  resources :shares, only: [ :create, :show ]
   resource :session, only: [ :show, :create, :destory ]
   get '*path', to: 'static_pages#frontend_index'
  end
end
