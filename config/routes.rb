Rails.application.routes.draw do
  resources :workout_groups
  resources :log_entries
  resources :workouts
  resources :teams
  resources :coaches
  resources :athletes
  #route to test config
  get '/hello', to: 'application#hello_world'

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html?}
end
