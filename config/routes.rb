Rails.application.routes.draw do
  # root to: "home#index"
  
  mount_ember_app :savant, to: "/"

  namespace :api do
    resources :courses
    devise_for :users
    post '/users/sign_in', to: "sessions#create"
  end

end
