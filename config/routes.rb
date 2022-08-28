Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: JSON } do
    get "/shares/random", :to => "/shares#random"
  resources :shares, only: [ :create, :show ]
  end
end
