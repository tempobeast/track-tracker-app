Rails.application.routes.draw do
  resources :workout_groups
  resources :log_entries
  resources :workouts
  resources :teams
  resources :coaches
  resources :athletes

  get '/me', to: 'athletes#show'
  post '/signup', to: 'athletes#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html?}
end
