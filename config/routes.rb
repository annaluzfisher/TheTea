Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
   get "/api/shares/random", :to => "api/shares#random"
  namespace :api, defaults: { format: JSON } do

  resources :shares, only: [ :create, :show ]
   
  end
end
