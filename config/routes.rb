Rails.application.routes.draw do
  # resources :books

  scope :api do
    # '/api/users/user_id/lists/'
    resources :users, only: [:show] do
      resources :lists, only: [:index]
      resources :books, only: [:create,:destroy, :update]
    end

  end


  post '/api/signup', to: 'users#create'
  get '/api/me', to:'users#show'
  post '/api/login', to: 'sessions#create'
  delete '/api/logout', to: 'sessions#destroy'


  get '/hello', to: 'application#hello_world'
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
