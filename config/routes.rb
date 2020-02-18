Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'artists/index'
      get 'artists/create'
      get '/show/:id', to: 'artists#show'
      delete '/destroy/:id', to: 'artists#destroy'
    end
  end
  ##get 'homepage/index'
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
