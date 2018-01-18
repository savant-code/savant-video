Rails.application.routes.draw do
  # root to: "home#index"
  devise_for :users, path: 'api/users', controllers: { sessions: "api/users/sessions", registrations: "api/users/registrations" }
  mount_ember_app :savant, to: "/"

  resources :users, only: [:create]
  resources :sessions, only: [:create, :destroy]
end
